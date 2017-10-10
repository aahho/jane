from flask import json

from base import BaseCommand
from app.mod_database import models
from app.mod_utils import fileop
from config import APP_DIR, BASE_DIR
from app.mod_repository.stocktwist import CompanyRepo, StockRepo
from app.mod_utils import helper

class FirstTimeDataSeeder(BaseCommand):
    json_path = APP_DIR + '/mod_utils/stockdetails/'

    def __init__(self):
        self.company_repo = CompanyRepo()
        self.stock_repo = StockRepo()

    def run(self):
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

