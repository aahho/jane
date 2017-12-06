from base import BaseRepo
from app.mod_database import models
from app.mod_utils import helper
from app.mod_library.exception import SException

class CompanyRepo(BaseRepo):
    model = models.Company

    def company_exists(self, company_id):
        return bool(self.filter(id=company_id).count())

    def get_company(self, company_id):
        company = self.set_excludes(['history']).filter_self(id=company_id).first()
        if not company:
            raise SException("Comany not found", 404)
        return company

class TrendingCompanyRepo(BaseRepo):
    model = models.TrendingCompany

class CompanyDetailsRepo(BaseRepo):
    model = models.CompanyDetail

class LikeRepo(BaseRepo):
    model = models.Like

class CommentRepo(BaseRepo):
    model = models.Comment

    def like(self, comment, user):
        like = LikeRepo().filter(comment=comment, user=user).first()
        if not like:
            print "liking"
            return LikeRepo().create(comment=comment, user=user)
        print "already liked"
        return like

    def unlike(self, comment, user):
        return LikeRepo().filter(comment=comment, user=user).delete()

class StockRepo(BaseRepo):
    model = models.Stock

class UserRepo(BaseRepo):
    model = models.User

    def user_exists(self, email):
        return bool(self.filter(email=email).count())

    def create_user(self, data):
        db_data = {
                'name': data['name'],
                'email': data['email'],
                'password': helper.hash_it(data['password'])
            }
        return self.create(db_data)

    def check_password(self, email, password):
        user = self.filter(email=email).first()
        if not user:
            raise SException('User not found', 404)
        self.user = user
        return helper.check_hash(password, user.password)

    def login_user(self, email, password):
        user = self.filter(email=email).first()
        if not user:
            print "user not doung"
            raise SException('User not found', 404)
        if not helper.check_hash(password, user.password):
            print "invalid"
            raise SException('Invalid credentials', 400)
        # create user token
        token = UserTokenRepo().create(user=user, token=helper.generate_token())
        print "token"
        return token

class UserTokenRepo(BaseRepo):
    model = models.UserToken

    def create(self, user, token):
        return super(UserTokenRepo, self).create(user=user, token=token)

    def get_auth_user(self, token):
        token = self.filter(token=token, expiresAt__gt=helper.now()).first()
        if not token:
            print "Asdf"
            raise SException('Invalid authorization token', 401)
        return token.user

class CommentsRepo(BaseRepo):
    model = models.Comment

class ReplyCommentRepo(BaseRepo):
    model = models.Reply

class UploadRepo(BaseRepo):
    model = models.Upload
