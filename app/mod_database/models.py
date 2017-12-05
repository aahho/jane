from datetime import datetime
import json

from flask_mongoengine import MongoEngine
from flask import request

from app.mod_home import transformers
from app.mod_repository.base import MainQuerySet
from app.mod_utils import helper

#db = MongoAlchemy()
db = MongoEngine()

class Base(db.Document):
    createdAt = db.DateTimeField()
    updatedAt = db.DateTimeField(default=datetime.now)

    transformer = lambda x: x
    excludes = []
    includes = []

    meta = {
        'abstract': True,
        'queryset_class': MainQuerySet
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

class CompanyDetail(db.DynamicDocument):

    includes = []
    excludes = []

    meta = {
            'collection': 'company_details'    
        }
    #transformer = transformers.transform_upload

    def get(self, key, default='-NA-'):
        return getattr(self, key, default) or default

class Company(Base):
    name = db.StringField()
    code = db.StringField(required=True, unique=True)
    slug = db.StringField()
    description = db.StringField()
    stockExchangeCode = db.StringField(required=True)
    type = db.StringField()
    frequency = db.StringField()
    refreshedAt = db.DateTimeField(required=False)
    oldestAvailableDate = db.DateTimeField(required=False)
    newAvailableDate = db.DateTimeField(required=False)
    history = db.ListField(db.DictField(), default_empty=True)
    historyCount = db.IntField(default=0)
    watchlistCount = db.IntField(default=0)
    logo = db.StringField(default='/static/img/no_image.svg')
    details = db.ReferenceField(CompanyDetail, default=CompanyDetail())
    #columns = db.ListField(db.StringField(), default_empty=True)

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

    @property
    def watchlistcount(self):
        return User.objects.no_dereference().filter(favourites=self).count()

    @property
    def comments(self):
        p = Comment.objects\
                .filter(company=self)\
                .paginate(int(request.args.get('cpage', 1)), 
                        int(request.args.get('citems', 5)), 
                        error_out=False)
        return p

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
    favourites = db.ListField(db.ReferenceField(Company), default_empty=True)

    #email_index = Index().ascending('email').unique()

    meta = {
            'collection': 'users',
            'indexes': [
                    'favourites'
                ]
    }

    def tokens(self):
        d = UserToken.objects(**{'user': self})
        return d.all()

    @classmethod
    def auth(cls):
        from flask import session
        if 'authenticate' in session:
            return cls.objects.filter(id=session['authenticate']['user']['_id']['$oid']).first()
        return None

class UserToken(Base):
    user = db.ReferenceField(User)
    token = db.StringField()
    expiresAt = db.DateTimeField(required=True, default=helper.add_days_to_date(datetime.now(), 7))

    meta = {
            'collection': 'user_tokens'        
    }

class Upload(db.DynamicDocument):
    selfLink = db.StringField(required=True)
    uploaderId = db.StringField(required=True, unique=True)

    includes = []
    excludes = []

    meta = {
            'collection': 'uploads'    
        }
    transformer = transformers.transform_upload


class Reply(Base):
    message = db.StringField(required=True)
    user = db.ReferenceField(User)

    meta = {
            'collection': 'replies'        
    }

class Comment(Base):
    company = db.ReferenceField(Company)
    message = db.StringField()
    type = db.StringField(default='text')
    user = db.ReferenceField(User)
    # check https://paper.dropbox.com/doc/Stock-twits-cBsgmgxy6NTO4TtwkblA8
    replies = db.ListField(db.ReferenceField(Reply), default_empty=True)
    attachment = db.ReferenceField(Upload)

    meta = {
            'collection': 'comments',
            'indexes': ['createdAt'],
            'ordering': ['-createdAt'],
    }

    @property
    def _attachment(self):
        try:
            if self.attachment:
                return Upload.transformer(self.attachment)
        except Exception as e:
            pass
        return None

"""
class FeedParser(Base):
    config_collection_name = 'feedparse'

    trading = db.ListField(db.DictField(db.StringField()), default_empty=True)
    newsfeed = db.ListField(db.DictField(db.StringField()), default_empty=True)
"""

