
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

def transform_comment(comment):
    return {
            "id": comment.get_id(),
            "user": user(comment.user),
            "data": comment.message,
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
