import requests
from datetime import datetime, date, timedelta

import quandl

from app.mod_repository.stocktwist import CompanyRepo, UserRepo
import transformers

company_repo = CompanyRepo()
user_repo = UserRepo()
yesterday_date = date.today() - timedelta(1)
yesterday_date = yesterday_date.strftime("%Y-%m-%d")
today_date = date.today().strftime("%Y-%m-%d")

def list_all_company():
    #r = company_repo.filter(company_repo.model.name == 'TCS').fields(('name', 'code',))
    #r = company_repo.filter(name = 'TCS').fields(('name', 'code',))
    #r = company_repo.filter({'name' : 'TCS'}).fields(('name', 'code',))
    #r = company_repo.set_transformer(transformers.company).all()
    r = company_repo.set_transformer(transformers.company).paginate()
    print len(r.items)
    return r

def list_trending_companies():
    pass

def get_current_stock_of_company(company_code):
    """
    https://www.quandl.com/api/v3/datasets/NSE/TCS.json?api_key=xMH7BiBu6s24LHCizug3
    """
    print today_date
    response = requests.get('https://www.quandl.com/api/v3/datasets/NSE/' + company_code + '.json?start_date=' + yesterday_date + '&end_date=' + today_date + '&api_key=xMH7BiBu6s24LHCizug3')
    if response.status_code == 200:
        data = response.json()['dataset']
        return transformers.company_with_current_stock(data)
    else:
        return response.json()
        raise Exception('Error in company_code')
    #print quandl.get('NSE/' + company_code, start_date="2017-10-03", end_date="2017-10-04")
    #return data

def get_all_stocks_of_company():
    pass

def signup_user(data):
    result = user_repo.create(data)
    return transformers.user(result)

def login_user(data):
    pass

