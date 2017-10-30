from datetime import datetime

from flask_mongoengine import MongoEngine
from flask_mongoalchemy import MongoAlchemy
from mongoalchemy.document import Index

from app.mod_home import transformers
from app.mod_repository.base import MainQuery
from app.mod_utils import helper

#db = MongoAlchemy()
db = MongoEngine()

class Base(db.Document):
    #query_class = MainQuery

    createdAt = db.DateTimeField()
    updatedAt = db.DateTimeField(default=datetime.now)

    transformer = lambda x: x
    excludes = []
    includes = []

    meta = {
        'abstract': True,
    }

    def __init__(self, *args, **values):
        super(Base, self).__init__(*args, **values)

    def save(self, *args, **kwargs):
        """
        Override save method to set created field only once
        """
        if not self.createdAt:
            self.createdAt = datetime.now()
        self.updatedAt = datetime.now()
        return super(Base, self).save(*args, **kwargs)

    @classmethod
    def get_fields(cls):
        print "includes called"
        cls.includes = cls._fields.keys()
        return cls.includes

    def get_id(self):
        return self.id.__str__()

class Company(Base):

    name = db.StringField()
    code = db.StringField(required=True, unique=True)
    description = db.StringField()
    stockExchangeCode = db.StringField(required=True)
    type = db.StringField()
    frequency = db.StringField()
    refreshedAt = db.DateTimeField(required=False)
    oldestAvailableDate = db.DateTimeField(required=False)
    newAvailableDate = db.DateTimeField(required=False)
    history = db.ListField(db.DictField(), default_empty=True)
    historyCount = db.IntField(default=0)
    #columns = db.ListField(db.StringField(), default_empty=True)
    #favouritesCount = db.IntField(required=False) # can be used to show how many users make it as favourite

    meta = {
            'collection': 'companies',
            'indexes': [
                'historyCount',
                'code',
                'name',
                ('code', 'name'),
                #'$title',  # text index
                #'#title',  # hashed index
                #('title', '-rating'),
                #('category', '_cls'),
                #{
                #    'fields': ['created'],
                #    'expireAfterSeconds': 3600
                #}
            ],
            #'ordering': ['-historyCount']
    }

    #transformer = transformers.company_meta
    excludes = ['history']


"""
class ComanyNews(Base):
    config_collection_name = 'companiesNews'

    company = db.StringField() # has to change to document or a foreign field
    news = db.ListField(db.DictField(db.StringField()), default_empty=True)
    date = db.DateTimeField(use_tz=False, required=False)
"""

class Stock(Base):
    name = db.StringField()
    company = db.ReferenceField(Company)
    date = db.DateTimeField(use_tz=False, required=False)
    open = db.FloatField()
    high = db.FloatField()
    low = db.FloatField()
    last = db.FloatField()
    close = db.FloatField()
    totalTradeQuantity = db.FloatField()
    turnover = db.FloatField() # in lacs

    meta = {
            'collection': 'stocks'        
    }

class User(Base):

    #id = db.ObjectIdField()
    name = db.StringField()
    email = db.StringField()
    password = db.StringField()
    lastLoginAt = db.DateTimeField(required=False)
    lastActiveAt = db.DateTimeField(required=False)
    favourites = db.ListField(db.DictField(), default_empty=True)

    #email_index = Index().ascending('email').unique()

    meta = {
            'collection': 'users'        
    }

    def tokens(self):
        d = UserToken.objects(**{'user': self})
        return d.all()

class UserToken(Base):
    user = db.ReferenceField(User)
    token = db.StringField()
    expiresAt = db.DateTimeField(required=True, default=helper.add_days_to_date(datetime.now(), 7))

    meta = {
            'collection': 'user_tokens'        
    }

class Reply(Base):
    message = db.StringField(required=True)
    user = db.ReferenceField(User)

    meta = {
            'collection': 'replies'        
    }

class Comment(Base):
    company = db.ReferenceField(Company)
    message = db.StringField(required=True)
    user = db.ReferenceField(User)
    # check https://paper.dropbox.com/doc/Stock-twits-cBsgmgxy6NTO4TtwkblA8
    replies = db.ListField(db.ReferenceField(Reply), default_empty=True)

    meta = {
            'collection': 'comments'        
    }

"""
class FeedParser(Base):
    config_collection_name = 'feedparse'

    trading = db.ListField(db.DictField(db.StringField()), default_empty=True)
    newsfeed = db.ListField(db.DictField(db.StringField()), default_empty=True)
"""

