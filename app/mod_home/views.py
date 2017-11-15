import requests
from datetime import datetime, date, timedelta
import json

import quandl
from flask import request, session
from mongoengine.queryset.visitor import Q
from nsetools import Nse

from app.mod_repository.stocktwist import CompanyRepo, UserRepo,\
UserTokenRepo, CommentRepo, ReplyCommentRepo, UploadRepo
import transformers
from app.mod_library.exception import SException
from app.mod_library import auth

nse = Nse()
company_repo = CompanyRepo()
user_repo = UserRepo()
yesterday_date = date.today() - timedelta(1)
yesterday_date = yesterday_date.strftime("%Y-%m-%d")
today_date = date.today().strftime("%Y-%m-%d")

def list_all_company(per_page=50):
    #r = company_repo.set_transformer(transformers.company).all()
    #r = company_repo.set_transformer(transformers.company)\
    r = company_repo.skip_list('slice__history', 0, 1)\
            .set_excludes([])\
            .orderBy('-historyCount').paginate(per_page=per_page)
    return r

def list_trending_companies(per_page=10):
    return list_all_company(per_page).items

def filter(data):
    if data is None:
        raise SException("You have to provide something.", 400)
    result = CompanyRepo().set_transformer(transformers.company)\
            .filter_self(Q(name__icontains=data) | Q(code__icontains=data)).paginate()
    return result

def get_only_company(company_code):
    #comp = CompanyRepo().set_excludes(['history']).filter(code=company_code).first()
    comp = CompanyRepo().get(code=company_code)
    if not comp:
        raise SException("Invalid company code", 400)
    return comp

def get_current_stock_of_company(company_code, company=None):
    """
    https://www.quandl.com/api/v3/datasets/NSE/TCS.json?api_key=xMH7BiBu6s24LHCizug3
    """
    #response = requests.get('https://www.quandl.com/api/v3/datasets/NSE/' + company_code + '.json?start_date=' + yesterday_date + '&end_date=' + today_date + '&api_key=xMH7BiBu6s24LHCizug3')
    if company is None:
        company = CompanyRepo().get(code=company_code)
        if not company:
            raise SException("Error in company code", 400)
    if company.stockExchangeCode == 'NSE':
        stock_dict = nse.get_quote(str(company.code))
        company.stock = transformers.transform_nsetools_stock(stock_dict)
        return company
    response = requests.get('https://www.quandl.com/api/v3/datasets/' + \
            company.stockExchangeCode + '/' + company_code + '.json?api_key=xMH7BiBu6s24LHCizug3')
    #response = requests.get('https://www.quandl.com/api/v3/datasets/NSE/' + company_code + '.json?api_key=xMH7BiBu6s24LHCizug3')
    if response.status_code == 200:
        data = response.json()['dataset']
        #data['company'] = company
        #start_new_thread(CompanyRepo().update_stock, (data,))
        company.stock = transformers.transform_quandl_stock(data)
        return company
        #return transformers.company_with_current_stock(data)
    else:
        return response.json()
        raise Exception('Error in company_code')
    #print quandl.get('NSE/' + company_code, start_date="2017-10-03", end_date="2017-10-04")
    #return data

def get_all_stocks_of_company():
    pass

@auth.auth_required
def add_comment_to_company(company_id, data):
    #user = UserTokenRepo().get_auth_user(request.headers.get('Authorization'))
    user = auth.user()
    company = CompanyRepo().get_company(company_id)

    msg, upload_data = (data.get('comment', None), None)
    if data['type'] == 'attachment':
        if 'data' not in data:
            raise SException("Please provide attachment to upload")
        data['data']['uploaderId'] = data['data']['id']
        del data['data']['id']
        upload_data = UploadRepo().create(data['data'])
    elif msg is None or msg == '':
        raise SException("Please provide some comment")
    comment = CommentRepo().create({
                'user': user,
                'company': company,
                'message': msg,
                'type': data['type'],
                'attachment': upload_data
            })
    return transformers.transform_comment(comment)

def list_comments_of_company(company_id):
    company = CompanyRepo().get_company(company_id)
    return CommentRepo().set_transformer(transformers.transform_comment)\
            .filter_self(company=company)\
            .set_order_by('-createdAt')\
            .paginate()

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

@auth.auth_required
def add_to_watchlist(company_id):
    company = CompanyRepo().get_company(company_id)
    user = UserRepo().objects.no_dereference()\
            .filter(id=auth.user().id)\
            .update(add_to_set__favourites=company)
    return "Added successfully"

@auth.auth_required
def remove_from_watchlist(company_id):
    company = CompanyRepo().get_company(company_id)
    user = UserRepo().objects.no_dereference()\
            .filter(id=auth.user().id)\
            .update(pull__favourites=company)
    return "Removed successfully"

@auth.auth_required
def list_of_watchlist():
    user = UserRepo().objects.no_dereference().filter(id=auth.user().id).first()
    company_ids = [u.id for u in user.favourites]
    #return CompanyRepo().set_transformer(transformers.company)\
    return CompanyRepo().skip_list('slice__history', 0, 1)\
            .set_excludes([])\
            .filter_self(id__in=company_ids)\
            .paginate_self()

def signup_user(data):
    if UserRepo().user_exists(email=data['email']):
        raise SException('User already exists', 409)
    result = UserRepo().create_user(data)
    return result
    return transformers.user(result)

def login_user(data):
    user = UserRepo().login_user(data.get('email'), data.get('password'))
    """
    user_repository = UserRepo()
    if not user_repository.check_password(data.get('email'), data.get('password')):
        raise SException('Invalid credentials', 400)
    return transformers.user(user_repository.user)
    """
    if user:
        session['authenticate'] = {
                    'user': user.user,
                    'token': user,
                }
    return user
    return transformers.user_with_token(user)

def google_login_user(code):
    # Get from google
    # check user is in database
    # if not exists create user
    user = UserRepo().login_user(data.get('email'), data.get('password'))
    return transformers.user_with_token(user)

def logout_user():
    if 'authenticate' in session:
        del session['authenticate']
    return "Success"
    return UserTokenRepo().filter(token=request.headers.get('Authorization')).delete()

