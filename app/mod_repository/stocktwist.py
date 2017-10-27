from base import BaseRepo
from app.mod_database import models
from app.mod_utils import helper
from app.mod_library.exception import SException

class CompanyRepo(BaseRepo):
    model = models.Company

class StockRepo(BaseRepo):
    model = models.Stock

class UserRepo(BaseRepo):
    model = models.User

    def user_exists(self, email):
        return bool(self.filter(email=email).count())

    def create_user(self, data):
        data['password'] = helper.hash_it(data['password'])
        return self.create(data)

    def check_password(self, email, password):
        user = self.filter(email=email).first()
        if not user:
            raise SException('User not found', 404)
        self.user = user
        return helper.check_hash(password, user.password)

    def login_user(self, email, password):
        user = self.filter(email=email).first()
        if not user:
            raise SException('User not found', 404)
        if not helper.check_hash(password, user.password):
            raise SException('Invalid credentials', 400)
        # create user token
        token = UserToken().create(user=user, token=helper.generate_token())
        return token

class UserToken(BaseRepo):
    model = models.UserToken

class CommentsRepo(BaseRepo):
    model = models.Comment
