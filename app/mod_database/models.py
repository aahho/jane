from flask_mongoalchemy import MongoAlchemy

db = MongoAlchemy()

class Base(db.Document):
    createdAt = db.CreatedField(tz_aware=False)
    updatedAt = db.ModifiedField(tz_aware=False)

class Company(Base):
    config_collection_name = 'companies'

    name = db.StringField()
    code = db.StringField()
    description = db.StringField()
    stockExchangeCode = db.StringField()
    type = db.StringField()
    frequency = db.StringField()
    refreshedAt = db.DateTimeField(use_tz=True, required=False)
    oldestAvailableDate = db.DateTimeField(use_tz=False, required=False)
    newAvailableDate = db.DateTimeField(use_tz=False, required=False)
    history = db.ListField(db.DictField(db.AnythingField()), default_empty=True)
    #columns = db.ListField(db.StringField(), default_empty=True)
    #favouritesCount = db.IntField(required=False) # can be used to show how many users make it as favourite

class ComanyNews(Base):
    config_collection_name = 'companiesNews'

    company = db.StringField() # has to change to document or a foreign field
    news = db.ListField(db.DictField(db.StringField()), default_empty=True)
    date = db.DateTimeField(use_tz=False, required=False)

class Stock(Base):
    config_collection_name = 'stocks'

    name = db.StringField()
    company = db.StringField() # has to change to document or a RefField field
    date = db.DateTimeField(use_tz=False, required=False)
    open = db.FloatField()
    high = db.FloatField()
    low = db.FloatField()
    last = db.FloatField()
    close = db.FloatField()
    totalTradeQuantity = db.FloatField()
    turnover = db.FloatField() # in lacs

class User(Base):
    config_collection_name = 'users'

    #id = db.ObjectIdField()
    name = db.StringField()
    email = db.StringField()
    lastLoginAt = db.DateTimeField(use_tz=False, required=False)
    lastActiveAt = db.DateTimeField(use_tz=False, required=False)
    favourites = db.ListField(db.DictField(db.StringField()), default_empty=True)

class Comment(Base):
    config_collection_name = 'comments'

    company = db.StringField() # has to change to document or a foreign field
    message = db.StringField()
    user = db.StringField() # has to change to document or a foreign field
    # check https://paper.dropbox.com/doc/Stock-twits-cBsgmgxy6NTO4TtwkblA8
    replies = db.ListField(db.DictField(db.StringField()), default_empty=True) # modify and use document field
    commentedAt = db.DateTimeField(use_tz=False, required=False)

class FeedParser(Base):
    config_collection_name = 'feedparse'

    trading = db.ListField(db.DictField(db.StringField()), default_empty=True)
    newsfeed = db.ListField(db.DictField(db.StringField()), default_empty=True)

