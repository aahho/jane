import requests
from datetime import datetime, date, timedelta

import quandl
from flask import request

from app.mod_repository.stocktwist import CompanyRepo, UserRepo, UserTokenRepo, CommentRepo, ReplyCommentRepo
import transformers
from app.mod_library.exception import SException

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
    #response = requests.get('https://www.quandl.com/api/v3/datasets/NSE/' + company_code + '.json?start_date=' + yesterday_date + '&end_date=' + today_date + '&api_key=xMH7BiBu6s24LHCizug3')
    company = CompanyRepo().get(code=company_code)
    if not company:
        raise SException("Error in company code", 400)
    response = requests.get('https://www.quandl.com/api/v3/datasets/' + \
            company.stockExchangeCode + '/' + company_code + '.json?api_key=xMH7BiBu6s24LHCizug3')
    #response = requests.get('https://www.quandl.com/api/v3/datasets/NSE/' + company_code + '.json?api_key=xMH7BiBu6s24LHCizug3')
    if response.status_code == 200:
        data = response.json()['dataset']
        data['company'] = company
        return transformers.company_with_current_stock(data)
    else:
        return response.json()
        raise Exception('Error in company_code')
    #print quandl.get('NSE/' + company_code, start_date="2017-10-03", end_date="2017-10-04")
    #return data

def get_all_stocks_of_company():
    pass

def add_comment_to_company(company_id, message):
    user = UserTokenRepo().get_auth_user(request.headers.get('Authorization'))
    company = CompanyRepo().get_company(company_id)
    comment = CommentRepo().create({
                'user': user,
                'company': company,
                'message': message
            })
    return transformers.transform_comment(comment)

def list_comments_of_company(company_id):
    company = CompanyRepo().get_company(company_id)
    return CommentRepo().set_transformer(transformers.transform_comment).filter_self(company=company).paginate()

def reply_to_comment(company_id, comment_id, message, reply_to_id=None):
    user = UserTokenRepo().get_auth_user(request.headers.get('Authorization'))
    company = CompanyRepo().get_company(company_id)
    comment = CommentRepo().get(id=comment_id)
    reply = ReplyCommentRepo().create({
            "user": user,
            "message": message
        })
    comment.replies.append(reply)
    comment.save()
    return transformers.transform_reply(reply)

def list_replies_of_comments(company_id, comment_id):
    company = CompanyRepo().get_company(company_id)
    comment = CommentRepo().get(id=comment_id)
    return ReplyCommentRepo().set_transformer(transformers.transform_reply).c_paginate(comment.replies)

def signup_user(data):
    if UserRepo().user_exists(email=data['email']):
        raise SException('User already exists', 409)
    result = UserRepo().create_user(data)
    return transformers.user(result)

def login_user(data):
    user = UserRepo().login_user(data.get('email'), data.get('password'))
    """
    user_repository = UserRepo()
    if not user_repository.check_password(data.get('email'), data.get('password')):
        raise SException('Invalid credentials', 400)
    return transformers.user(user_repository.user)
    """
    return transformers.user_with_token(user)

