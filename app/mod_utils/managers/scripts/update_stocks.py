from nsetools import Nse

from app.mod_utils.managers.base import BaseCommand
from app.mod_repository.stocktwist import CompanyRepo
from app.mod_home.views import get_current_stock_of_company

class Command(BaseCommand):

    def __init__(self):
        self.company_repo = CompanyRepo()

    def run(self):
        companies = self.company_repo.all()
        for company in companies:
            #try:
            print "Updating stock for : " + company.code
            c = get_current_stock_of_company(company.code, company=company)
            #except Exception as e:
            #print "error", e

