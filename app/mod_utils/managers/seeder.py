import requests, csv, time
from thread import start_new_thread, allocate_lock
from datetime import timedelta

from flask import json
import quandl

from base import BaseCommand
from app.mod_database import models
from app.mod_utils import fileop
from config import APP_DIR, BASE_DIR
from app.mod_repository.stocktwist import CompanyRepo, StockRepo
from app.mod_utils import helper


class StockGetter(BaseCommand):
    STOCK_API = "https://www.quandl.com/api/v3/datasets/{}/{}.json?api_key=xMH7BiBu6s24LHCizug3"

    def __init__(self):
        self.company_repo = CompanyRepo()
        self.stock_repo = StockRepo()
        self.count = 0
        self.lock = allocate_lock()
        self.sleep_time = 1 # in seconds

    def run(self):
        companies = self.company_repo.all()
        complete = companies.count()
        for company in companies:
            start_new_thread(self.read_stock, (company,))
            time.sleep(self.sleep_time)
        while self.count != complete:
            time.sleep(4)
            continue
        print "Companies synced successfully"

    def _extract_history(self, data):
        history = []
        history_data = data['data']
        if data['database_code'] == 'BSE':
            for d in history_data:
                history.append({
                        "date": d[0],
                        "open": d[1],
                        "high": d[2],
                        "low": d[3],
                        "close": d[4],
                        "last": None,
                        "totalTradeQuantity": None,
                        "turnover": None,
                        "wap": d[5],
                        "noOfShares": d[6],
                        "noOfTrades": d[7],
                        "totalTurnover": d[8],
                        "deliverableQuantity": d[9],
                        "percentageDeliveryQtytoTradedQty": d[10],
                        "spreadHtoL": d[11],
                        "spreadCtoO": d[12],
                    })
        elif data['database_code'] == 'NSE':
            for d in history_data:
                history.append({
                        "date": d[0],
                        "open": d[1],
                        "high": d[2],
                        "low": d[3],
                        "last": d[4],
                        "close": d[5],
                        "totalTradeQuantity": d[6],
                        "turnover": d[7], # in Lacs
                        "wap": None,
                        "noOfShares": None,
                        "noOfTrades": None,
                        "totalTurnover": None,
                        "deliverableQuantity": None,
                        "percentageDeliveryQtytoTradedQty": None,
                        "spreadHtoL": None,
                        "spreadCtoO": None,
                    })
        return history

    def read_stock(self, company):
        try:
            url = self.STOCK_API.format(company.stockExchangeCode, company.code)
            response = requests.get(url)
            if 'dataset' not in response.json():
                print response.json()
                self.sleep_time = 2
                time.sleep(2)
                self.read_stock(company)
            data = response.json()['dataset']
            if (company.refreshedAt - helper.str_to_datetime(data['refreshed_at']).replace(tzinfo=None)) == timedelta(0):
                print company.stockExchangeCode, company.code, company.name, "Continuing"
            else:
                print company.stockExchangeCode, company.code, company.name, "Updating" 
                company.refreshedAt = helper.str_to_datetime(data['refreshed_at'])
                company.oldestAvailableDate = helper.str_to_datetime(data['oldest_available_date'])
                company.newAvailableDate = helper.str_to_datetime(data['newest_available_date'])
                company.history = helper.str_to_datetime(data)
                company.save()
        except Exception as e:
            print "Error ("+company.code+"): " + e.__str__()
            pass
        self.lock.acquire()
        self.count += 1
        self.lock.release()


class FirstTimeDataSeeder(BaseCommand):
    json_path = APP_DIR + '/mod_utils/stockdetails/'
    NSE_PATH = APP_DIR + '/mod_utils/resources/NSE.csv'
    BSE_PATH = APP_DIR + '/mod_utils/resources/BSE.csv'
    STOCK_API = "https://www.quandl.com/api/v3/datasets/{}.json?api_key=xMH7BiBu6s24LHCizug3"
    completed = 0
    lock = allocate_lock()

    def __init__(self):
        self.company_repo = CompanyRepo()
        self.stock_repo = StockRepo()

    def run(self):
        start_new_thread(self.read_stock, (self.NSE_PATH,))
        start_new_thread(self.read_stock, (self.BSE_PATH,))
        while self.completed != 2:
            time.sleep(2)
        """
        self.create_from_json_files()
        """
        return

    def create_from_json_files(self):
        json_files = fileop.list_all_files(self.json_path, only_files=True, extension='json', with_path=True)
        for json_file in json_files:
            try:
                print json_file
                json_data = json.load(fileop.open_file(json_file))
                company_data = self._extract_company_data(json_data)
                self.company_repo.create(company_data)
            except Exception as e:
                fileop.append(BASE_DIR + '/error_company.txt', json_file + " " + e.__str__() + "\n")

    def read_stock(self, csv_file_path):
        count = 1
        with fileop.open_file(csv_file_path, 'rb') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                market_n_company_code = row['market_n_company_code']
                company_name = row['company_name']
                print count, market_n_company_code, company_name
                if self.company_code_exists(market_n_company_code.split('/')[-1]):
                    continue
                try:
                    count += 1
                    url = self.STOCK_API.format(market_n_company_code)
                    result = requests.get(url)
                    if result.status_code == 200:
                        self.create_company(result.json()['dataset'])
                    else:
                        fileop.append(BASE_DIR + '/quandl_error_company.txt', market_n_company_code + " " + csv_file_path\
                                + " " + company_name + " " + str(result.status_code) + "\n")
                except Exception as e:
                    fileop.append(BASE_DIR + '/quandl_error_company.txt', "Error in " + csv_file_path + " " + e.__str__() + "\n")

        fileop.append(BASE_DIR + '/quandl_results.txt', csv_file_path + " = " + str(count) + "\n")
        self.lock.acquire()
        self.completed += 1
        self.lock.release()
        return

    def company_code_exists(self, company_code):
        return self.company_repo.filter(code=company_code).count()

    def create_company(self, json_data):
        company_data = self._extract_company_data(json_data)
        return self.company_repo.create(company_data)

    def _extract_company_data(self, data):
        history = self._extract_history(data)
        return {
            "name": data['name'],
            "code": data['dataset_code'],
            #"quandlCode": data['dataset_code'],
            "description": data['description'],
            "stockExchangeCode": data['database_code'],
            "type": data['type'],
            "frequency": data['frequency'],
            "refreshedAt": helper.str_to_datetime(data['refreshed_at']),
            "oldestAvailableDate": helper.str_to_datetime(data['oldest_available_date']),
            "newAvailableDate": helper.str_to_datetime(data['newest_available_date']),
            "history": history,
            "historyCount": len(history),
        }

    def _extract_history(self, data):
        history = []
        history_data = data['data']
        if data['database_code'] == 'BSE':
            for d in history_data:
                history.append({
                        "date": d[0],
                        "open": d[1],
                        "high": d[2],
                        "low": d[3],
                        "close": d[4],
                        "last": None,
                        "totalTradeQuantity": None,
                        "turnover": None,
                        "wap": d[5],
                        "noOfShares": d[6],
                        "noOfTrades": d[7],
                        "totalTurnover": d[8],
                        "deliverableQuantity": d[9],
                        "percentageDeliveryQtytoTradedQty": d[10],
                        "spreadHtoL": d[11],
                        "spreadCtoO": d[12],
                    })
        elif data['database_code'] == 'NSE':
            for d in history_data:
                history.append({
                        "date": d[0],
                        "open": d[1],
                        "high": d[2],
                        "low": d[3],
                        "last": d[4],
                        "close": d[5],
                        "totalTradeQuantity": d[6],
                        "turnover": d[7], # in Lacs
                        "wap": None,
                        "noOfShares": None,
                        "noOfTrades": None,
                        "totalTurnover": None,
                        "deliverableQuantity": None,
                        "percentageDeliveryQtytoTradedQty": None,
                        "spreadHtoL": None,
                        "spreadCtoO": None,
                    })
        return history

    def _stock_details(self, data):
        return {}

class SlugMaker(BaseCommand):

    def __init__(self):
        self.company_repo = CompanyRepo()

    def run(self):
        from slugify import slugify
        companies = self.company_repo.set_excludes(['history']).all()
        for company in companies:
            company.slug = slugify(company.name)
            company.save()
            print company.name, company.slug
        print "Done"
