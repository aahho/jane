from base import BaseRepo
from app.mod_database import models

class CompanyRepo(BaseRepo):
    model = models.Company

class StockRepo(BaseRepo):
    model = models.Stock

class UserRepo(BaseRepo):
    model = models.User

class CommentsRepo(BaseRepo):
    model = models.Comment
