import json

from app.mod_utils import helper

def company_meta(model):
    return {
        "name": model.name,
        "code": model.code,
    }

def company(model):
    return {
        "id": model.get_id(),
        "name": model.name,
        "code": model.code,
        "description": model.description,
        "stockExchangeCode": model.stockExchangeCode,
        "refreshedAt": model.refreshedAt,
        "watchlistCount": model.watchlistcount,
        "stock": model.history[0] if len(model.history) > 0 else {}
    }

def company_with_current_stock(data):
    result = {
        "id": data['company'].get_id(),
        "name": data['name'],
        "code": data['dataset_code'],
        "refreshedAt": data['refreshed_at'],
        "stock": {}
    }

    if len(data['data']):
        # send by stockExchangeCode
        result['stock'] =  {
            "data": data['data'][0][0],
            "open": data['data'][0][1],
            "high": data['data'][0][2],
            "low": data['data'][0][3],
            "last": data['data'][0][4],
            "close": data['data'][0][5],
            "totalTradeQuantity": data['data'][0][6],
            "turnover": data['data'][0][7],
        }
    return result

def transform_quandl_stock(data):
    """ Will not be used. Using in stockapis.BSE"""
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

def transform_nsetools_stock(data):
    """ Will not be used. Using in stockapis.NSE"""
    return {
            "date": data['cm_adj_low_dt'],
            "open": data['open'],
            "high": data['dayHigh'],
            "low": data['dayLow'],
            "last": data['lastPrice'],
            "close": data['previousClose'],
            "totalTradeQuantity": data['quantityTraded'],
            "turnover": '-',
            "refreshedAt": helper.now()
        }

def transform_upload(upload):
    data = json.loads(upload.to_json())
    data['id'] = upload.id.__str__()
    del data['_id']
    return data

    return {
            'id': upload.id.__str__(),
            'selfLink': upload.selfLink,
            'title': upload.title,
        }

def transform_comment(comment):
    return {
            "id": comment.get_id(),
            "user": user(comment.user),
            "data": comment._attachment,
            "comment": comment.message,
            "type": comment.type,
            "commentedAt": comment.createdAt
        }

def transform_reply(reply):
    return {
            "id": reply.get_id(),
            "user": user(reply.user),
            "data": reply.message,
            "commentedAt": reply.createdAt
        }

def transform_comment_with_replies(comment):
    comment_data = transform_comment(comment)
    comment_data['replies'] = []
    for reply in comment.replies:
        comment_data['replies'].append(transform_reply(reply))
    return comment_data

def user(user):
    return {
        'id': user.get_id(),
        'email': user.email,
        'name': user.name,
    }

def user_with_token(token):
    user_data = user(token.user)
    user_data['token'] = token.token
    user_data['expiresAt'] = token.expiresAt
    return user_data
