from nsetools import Nse

from app.mod_utils.managers.base import BaseCommand
from app.mod_repository.stocktwist import CompanyDetailsRepo, CompanyRepo
from app.mod_library.stockapis import NSE
from app.mod_utils import helper

class Command(BaseCommand):

    def __init__(self):
        self.company_details_repo = CompanyDetailsRepo()
        self.company_repo = CompanyRepo()
        self.nse = Nse()
        self.stockapi = NSE()

    def run(self):
        nse_list = self.nse.get_stock_codes()

        for code, title in nse_list.iteritems():
            company = self.company_repo.filter(stockExchangeCode='NSE', code=code).first()
            if company:
                if company.weight < 1:
                    print "saving: ", code, title
                    company.weight += 1
                    company.save()
            else:
                print "creating: ", code, title
                try:
                    details = self.company_details_repo.create(**{})
                    c = self.company_repo.create(details = details, **self._extract_company_data(title, code))
                    c.details = details
                    c.save()
                    c = self.stockapi.latest(c)
                except:
                    print "error for " + title

    def _extract_company_data(self, name, code):
        return {
            "name": name,
            "code": code,
            #"quandlCode": data['dataset_code'],
            "description": name,
            "stockExchangeCode": 'NSE',
            "type": 'Time Series',
            "frequency": 'daily',
            "refreshedAt": helper.now(),
            #"oldestAvailableDate": helper.now(),
            "newAvailableDate": helper.now(),
            "history": [],
            "historyCount": 0,
            "weight": 1
        }

