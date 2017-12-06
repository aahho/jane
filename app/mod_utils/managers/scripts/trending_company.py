from nsetools import Nse

from app.mod_utils.managers.base import BaseCommand
from app.mod_repository.stocktwist import TrendingCompanyRepo, CompanyRepo

class Command(BaseCommand):

    def __init__(self):
        self.trending_company_repo = TrendingCompanyRepo()
        self.company_repo = CompanyRepo()
        self.nse = Nse()

    def run(self):
        gainers = self.nse.get_top_gainers()[:5]
        losers = self.nse.get_top_losers()[:5]
        print gainers, losers
        return 
        g_comapnies = [ self.company_repo.get_or_create(code=g['symbol']) for g in gainers ]
        l_comapnies = [ self.company_repo.get_or_create(code=l['symbol']) for l in losers ]
        trendings = g_comapnies.extends(l_comapnies)
        date = helper.today()
        try:
            self.trending_company_repo.create(date=date, trendings=trendings)
        except Exception as e:
            print "error", e
        print "Done"
