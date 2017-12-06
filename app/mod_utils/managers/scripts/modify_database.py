from thread import start_new_thread
import time

from app.mod_utils.managers.base import BaseCommand
from app.mod_repository.stocktwist import CompanyRepo, StockRepo, CompanyDetailsRepo

class Command(BaseCommand):

    def __init__(self):
        self.company_repo = CompanyRepo()
        self.stock_repo = StockRepo()
        self.company_details_repo = CompanyDetailsRepo()

    def run(self):
        paginator = self.company_repo.set_excludes([]).filter_self(stockExchangeCode='NSE').paginate(1)
        company = paginator.items[0]
        print "running for " + company.name
        #start_new_thread(self.add_history_to_stock, (company,))
        self.add_history_to_stock(company)
        print "-" * 40

        while paginator.has_next:
            paginator = paginator.next()
            company = paginator.items[0]
            print "running for " + company.name
            #start_new_thread(self.add_history_to_stock, (company,))
            self.add_history_to_stock(company)
            print "-" * 40
            #time.sleep(1)
        
        #time.sleep(100000)
        print "Done"

    def add_history_to_stock(self, company):
        counter = len(company.history)
        if company.details is None:
            print "creating details for " + company.name
            company.details = self.company_details_repo.create(**{})
            company.details.save()
        for stock in company.history:
            try:
                stock['company_id'] = company.id
                try:
                    s = self.stock_repo.create(**stock)
                except:
                    continue
                company.stocks.append(s)
                company.save()
                counter -= 1
            except Exception as e:
                print e, company.name
        #if len(company.history) == len(company.stocks):
        print "finished : " + company.name
        if counter == 0:
            company.history = []
            company.save()
        else:
            print "Not deleting company history for - " + company.name
