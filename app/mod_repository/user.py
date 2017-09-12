from base import BaseRepo
from app.mod_database import models

class UserRepo(BaseRepo):
    model = models.User
