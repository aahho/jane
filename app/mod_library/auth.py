from flask import request, session

from app.mod_repository.stocktwist import UserTokenRepo

class Auth():
    token_user = {}

    @classmethod
    def user(cls, token=None, for_decorator=False):
        #token = request.headers.get('Authorization') if token is None else token
        token = session['authenticate']['token']['token'] if 'authenticate' in session else None
        if token in cls.token_user:
            return cls.token_user[token]
        user = UserTokenRepo().get_auth_user(token)
        if token not in cls.token_user and for_decorator:
            cls.token_user[token] = user
        return user

    @classmethod
    def remove_user(cls, token=None):
        """
        Have to use expiration date for token_user
        """
        token = request.headers.get('Authorization') if token is None else token
        if token in cls.token_user:
            del cls.token_user[token]
        return 

def user(for_decorator=False):
    return Auth.user(for_decorator=for_decorator)

def auth_required(func):

    def wrap(*args, **kwargs):
        user(for_decorator=True)
        result = func(*args, **kwargs)
        Auth.remove_user()
        return result
    return wrap
