import base
from app.mod_database import models

class CompanyRepo(base.Repo):
    model = models.Company

class StockRepo(base.Repo):
    model = models.Stock

class UserRepo(base.Repo):
    model = models.User

class CommentsRepo(base.Repo):
    model = models.Comment
