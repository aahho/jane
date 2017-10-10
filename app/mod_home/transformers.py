
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
    }

def company_with_current_stock(data):
    result = {
        "id": data['dataset_code'],
        "name": data['name'],
        "code": data['dataset_code'],
        "refreshedAt": data['refreshed_at'],
        "stock": {}
    }

    if len(data['data']):
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

def user(user):
    return {
        'id': user.get_id(),
        'email': user.email,
        'name': user.name,
    }
