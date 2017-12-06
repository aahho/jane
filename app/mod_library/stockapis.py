import abc
import requests

from nsetools import Nse

from app.mod_utils import helper
from app.mod_library.exception import SException
from app.mod_repository.stocktwist import StockRepo

class Stock(object):
    """
    Base wrapper class for stock api classes
    """
    __metaclass__ = abc.ABCMeta
    BASE_API = 'https://www.quandl.com/api/v3/datasets/{}/{}.json?api_key=xMH7BiBu6s24LHCizug3'

    def __init__(self):
        self.use_default_transform = False

    def latest(self, company):
        data = self.perform_latest(company.code)
        transformer = self.transform_quandl if self.use_default_transform else self.transform
        company = self.update_db(company, transformer(data))
        return company

    def perform_latest(self, code):
        #response = requests.get('https://www.quandl.com/api/v3/datasets/NSE/' + company_code + '.json?start_date=' + yesterday_date + '&end_date=' + today_date + '&api_key=xMH7BiBu6s24LHCizug3')
        self.use_default_transform = True
        response = requests.get(self.BASE_API.format(self.STOCK_EXCHANGE_CODE, code))
        if response.status_code == 200:
            data = response.json()['dataset']
            return data
        else:
            raise SException('Error while getting stock data.', 400)

    def all(self, company):
        pass

    def filter(self, company, **kwargs):
        pass

    def transform(self, data):
        return data

    def transform_quandl(self, data):
        stock = None
        if len(data['data']):
            # send by stockExchangeCode
            stock =  {
                "date": data['data'][0][0],
                "open": data['data'][0][1],
                "high": data['data'][0][2],
                "low": data['data'][0][3],
                "last": data['data'][0][4],
                "close": data['data'][0][5],
                "totalTradeQuantity": data['data'][0][6],
                "turnover": data['data'][0][7],
            }
            stock['refreshedAt'] = helper.str_to_datetime(data['refreshed_at'])
        return stock

    def get_stock_repo(self):
        return StockRepo()

    def update_db(self, company, data):
        """
        Update the latest stock to database
        """
        stock = self.get_stock_repo().filter(date=data['date'], company_id=company.id).first()
        if stock:
            #if (helper.now() - stock.refreshedAt).seconds > 90 \
            #        and (helper.now() - stock.updatedAt).seconds > 90: # 90 seconds
                stock.open = data['open']
                stock.high = data['high']
                stock.low = data['low']
                stock.last = data['last']
                stock.close = data['close']
                stock.totalTradeQuantity = data['totalTradeQuantity']
                stock.turnover = data['turnover']
                stock.refreshedAt = data['refreshedAt']
                stock.save()
                company.stock = stock
                company.save()
        else:
            data['company_id'] = company.id
            stock = self.get_stock_repo().create(**data)
            company.stock = stock
            company.stocks.append(stock)
            company.save()
        return company

class NSE(Stock):
    STOCK_EXCHANGE_CODE = 'NSE'

    def __init__(self):
        self.nse = Nse()
        super(NSE, self).__init__()
    
    def perform_latest(self, code):
        stock_dict = self.nse.get_quote(str(code))
        if stock_dict is None:
            # cannot rely on quandl apis coz it has some api limits
            self.use_default_transform = True
            return super(NSE, self).perform_latest(code)
        return stock_dict

    def transform(self, data):
        return {
            "date": data['cm_adj_low_dt'],
            "open": data['open'],
            "high": data['dayHigh'],
            "low": data['dayLow'],
            "last": data['lastPrice'],
            "close": data['previousClose'],
            "totalTradeQuantity": data['quantityTraded'],
            "turnover": None,
            "refreshedAt": helper.now()
        }

class BSE(Stock):
    STOCK_EXCHANGE_CODE = 'BSE'
    USE_DEFAULT_TRANSFORMER = True 

