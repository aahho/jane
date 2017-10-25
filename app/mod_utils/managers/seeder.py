import requests, csv

from flask import json
import quandl

from base import BaseCommand
from app.mod_database import models
from app.mod_utils import fileop
from config import APP_DIR, BASE_DIR
from app.mod_repository.stocktwist import CompanyRepo, StockRepo
from app.mod_utils import helper


class StockGetter(BaseCommand):
    json_path = APP_DIR + '/mod_utils/stockdetails/'
    STOCK_API = "https://www.quandl.com/api/v3/datasets/{}/{}.json?api_key=xMH7BiBu6s24LHCizug3"
    COMPANY_CSV_PATH = APP_DIR + '/mod_utils/companydetails'

    def run(self):
        quandl.ApiConfig.api_key = 'xMH7BiBu6s24LHCizug3'
        d = quandl.get('NSE/BSLGOLDETF')
        print dir(d)
        print d.to_json()
        return
        # Read every csv file in the path
        csv_files = fileop.list_all_files(self.COMPANY_CSV_PATH, only_files=True, extension='csv', with_path=True)
        for csv_file_path in csv_files:
            print 'BSE' in csv_file_path.split('/')[-1]
            market = 'NSE' if 'NSE' in csv_file_path.split('/')[-1] else 'BSE'
            with fileop.open_file(csv_file_path, 'rb') as csvfile:
                reader = csv.DictReader(csvfile)
                for row in reader:
                    print row
                    url = self.STOCK_API.format(market, 'Security Code')
                    result = requests.get(url)
                    print result.status_code
                    break
            break
        return
        # Read CSV
        # get companydetails
        company = 'TCS'
        url = self.STOCK_API.format('NSE', company)
        result = requests.get(url)
        #print result, result.status_code, result.json(), dir(result)
        # save into comany.json file in json_path
        if result.status_code == 200:
            try:
                fileop.create(self.json_path + company + '.json', json.dumps(result.json()['dataset']))
            except Exception as e:
                fileop.append(BASE_DIR + '/error_company.txt', company + " " + e.__str__() + "\n")
        else:
            fileop.append(BASE_DIR + '/error_company.txt', company + " " + result.status_code + "\n")

class FirstTimeDataSeeder(BaseCommand):
    json_path = APP_DIR + '/mod_utils/stockdetails/'
    STOCK_API = "https://www.quandl.com/api/v3/datasets/{}/{}.json?api_key=xMH7BiBu6s24LHCizug3"

    def __init__(self):
        self.company_repo = CompanyRepo()
        self.stock_repo = StockRepo()

    def run(self):
        url = self.STOCK_API.format('NSE','TCS')
        return
        json_files = fileop.list_all_files(self.json_path, only_files=True, extension='json', with_path=True)
        for json_file in json_files:
            try:
                print json_file
                json_data = json.load(fileop.open_file(json_file))
                company_data = self._extract_company_data(json_data['dataset'])
                self.company_repo.create(company_data)
            except Exception as e:
                fileop.append(BASE_DIR + '/error_company.txt', json_file + " " + e.__str__() + "\n")

    def _extract_company_data(self, data):
        return {
            "name": data['name'],
            "code": data['dataset_code'],
            "description": data['description'],
            "stockExchangeCode": data['database_code'],
            "type": data['type'],
            "frequency": data['frequency'],
            "refreshedAt": helper.str_to_datetime(data['refreshed_at']),
            "oldestAvailableDate": helper.str_to_datetime(data['oldest_available_date']),
            "newAvailableDate": helper.str_to_datetime(data['newest_available_date']),
            "history": self._extract_history(data['data']),
        }

    def _extract_history(self, data):
        history = []
        for d in data:
            history.append({
                    "date": d[0],
                    "open": d[1],
                    "high": d[2],
                    "low": d[3],
                    "last": d[4],
                    "close": d[5],
                    "totalTradeQuantity": d[6],
                    "turnover": d[7],
                })
        return history

    def _stock_details(self, data):
        return {}

