from datetime import datetime
import json

from flask_mongoengine import MongoEngine
from flask import request

from app.mod_home import transformers
from app.mod_repository.base import MainQuerySet
from app.mod_utils import helper

#db = MongoAlchemy()
db = MongoEngine()

class BasicMixin(object):

    transformer = lambda x: x
    excludes = []
    includes = []

class DynamicBase(db.DynamicDocument, BasicMixin):
    createdAt = db.DateTimeField()
    updatedAt = db.DateTimeField(default=datetime.now)

    meta = {
        'abstract': True,
        'queryset_class': MainQuerySet
    }
    
    def save(self, *args, **kwargs):
        """
        Override save method to set created field only once
        """
        if not self.createdAt:
            self.createdAt = datetime.now()
        self.updatedAt = datetime.now()
        return super(DynamicBase, self).save(*args, **kwargs)

class Base(db.Document, BasicMixin):
    createdAt = db.DateTimeField()
    updatedAt = db.DateTimeField(default=datetime.now)

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

class CompanyDetail(DynamicBase):

    meta = {
            'collection': 'company_details'    
        }
    #transformer = transformers.transform_upload

    def get(self, key, default='-NA-'):
        return getattr(self, key, default) or default

class Stock(DynamicBase):
    # not using reference field, coz it will load every time and might slow down app
    company_id = db.ObjectIdField(required=True) 
    date = db.DateTimeField(required=True)
    open = db.FloatField(default=1)
    high = db.FloatField(default=1)
    low = db.FloatField(default=1)
    last = db.FloatField(default=1)
    close = db.FloatField(default=1)
    totalTradeQuantity = db.FloatField()
    turnover = db.FloatField(null=True) # in lacs

    excludes = ['company']

    meta = {
            'collection': 'stocks',
            'indexes': [
                {
                    'fields': ('date', 'company_id'),
                    'unique': True
                }
            ]
    }

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
    stocks = db.ListField(db.ReferenceField(Stock), default_empty=True, reverse_delete_rule=db.PULL)
    stock = db.ReferenceField(Stock, reverse_delete_rule=db.NULLIFY, default=Stock())
    historyCount = db.IntField(default=0)
    watchlistCount = db.IntField(default=0)
    logo = db.StringField(default='/static/img/no_image.svg')
    details = db.ReferenceField(CompanyDetail, required=False)
    weight = db.IntField(default=0)
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

class TrendingCompany(Base):
    trendings = db.ListField(db.ReferenceField(Company), required=True)
    date = db.DateTimeField(required=True)

    meta = {
        'collection': 'trending_companies'        
    }

"""
class ComanyNews(Base):
    config_collection_name = 'companiesNews'

    company = db.StringField() # has to change to document or a foreign field
    news = db.ListField(db.DictField(db.StringField()), default_empty=True)
    date = db.DateTimeField(use_tz=False, required=False)
"""

class AdminUser(Base):
    email = db.StringField(required=True, unique=True)
    password = db.StringField(required=True)

    meta = {
        'collection': 'admin_users'
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

    def like(self, comment):
        return Like.objects.filter(user=self, comment=comment).count()

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

    def like(self, user_id):
        return Like.objects.no_dereference().filter(comment=str(self.id), user=str(user_id['$oid'])).count()

    @property
    def likes_count(self):
        return Like.objects.no_dereference().filter(comment=str(self.id)).count()

class Like(Base):
    user = db.ReferenceField(User)
    comment = db.ReferenceField(Comment)

    meta = {
        'collection': 'likes',
        'indexes': [
            {
                'fields': ('user', 'comment'),
                'unique': True
            }    
        ]
    }

"""
class FeedParser(Base):
    config_collection_name = 'feedparse'

    trading = db.ListField(db.DictField(db.StringField()), default_empty=True)
    newsfeed = db.ListField(db.DictField(db.StringField()), default_empty=True)
"""

