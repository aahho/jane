from math import ceil

from flask_mongoalchemy import BaseQuery
from flask import request

from app.mod_library.exception import SException

def transform(data):
    return data

class MainQuery(BaseQuery):
    pass

class Pagination(object):
    """Internal helper class returned by :meth:`~BaseQuery.paginate`."""

    def __init__(self, query, page, per_page, total, items):
        #: query object used to create this
        #: pagination object.
        self.query = query
        #: current page number
        self.page = page
        #: number of items to be displayed per page
        self.per_page = per_page
        #: total number of items matching the query
        self.total = total
        #: list of items for the current page
        self.items = items

    @property
    def pages(self):
        """The total number of pages"""
        return int(ceil(self.total / float(self.per_page)))

    @property
    def next_num(self):
        """The next page number."""
        return self.page + 1

    def has_next(self):
        """Returns ``True`` if a next page exists."""
        return self.page < self.pages

    def next(self, error_out=False):
        """Return a :class:`Pagination` object for the next page."""
        return self.query.paginate(self.page + 1, self.per_page, error_out)

    @property
    def prev_num(self):
        """The previous page number."""
        return self.page - 1

    def has_prev(self):
        """Returns ``True`` if a previous page exists."""
        return self.page > 1

    def prev(self, error_out=False):
        """Return a :class:`Pagination` object for the previous page."""
        return self.query.paginate(self.page - 1, self.per_page, error_out)


# @decorator_to_create_new_instance_while_method_calling
class BaseRepo(object):

    __abstract__ = True

    def __init__(self, into='default', transformer=None):
        #self.connection = config.get_connection(into)
        if not hasattr(self, 'model'):
            raise Exception('Please define model in your class ' + self.__repr__())
        
        """
        self.query = self.model.query
        # Take includes as fields if defined
        self.fields = self.model.includes if len(self.model.includes) else self.model.get_fields().keys()
        # Exclude the fields
        self.fields = list(set(self.fields).difference(self.model.excludes))
        """
        self.objects = self.model.objects
        self.transformer = transformer if transformer is not None else self.model.transformer
        self.limit = 10

    def set_transformer(self, transformer):
        self.transformer = transformer
        return self

    def set_limit(self, limit):
        self.limit = limit
        return self

    def get(self, id=None, code=None):
        if id is not None:
            obj = self.objects.filter(id=id).first()
            if not obj:
                #raise SException(self.model.__str__() + " data not found", 404)
                raise SException("Model data not found", 404)
            return obj
        if code is not None:
            obj = self.objects.filter(code=code).first()
            if not obj:
                #raise SException(self.model.__str__() + " data not found", 404)
                raise SException("Model data not found", 404)
            return obj
        return self.objects.all()

    def first(self):
        return self.objects.first()

    def fields(self, *field_names):
        return self.query.fields(field_names)

    def all(self):
        return [self.transformer(obj) for obj in iter(self.query.fields(*self.fields))]

    def _all(self, query_set):
        return [self.transformer(obj) for obj in iter(query_set)]

    def only(self, *only):
        self.objects = self.objects.only(*only)
        return self

    def orderBy(self, *columns):
        self.objects = self.objects.order_by(*columns)
        return self

    def exclude(self, *exclude):
        self.objects = self.objects.exclude(*exclude)
        return self

    def paginate(self, per_page=None, page=None, error_out=False):
        from flask_mongoengine.pagination import Pagination as PG
        page = int(request.values.get('page', 1)) if page is None else page
        per_page = int(request.values.get('items', 10)) if per_page is None else per_page
        if page < 1 and error_out:
            abort(404)
        pagination = self.objects.only(*self.model.includes).exclude(*self.model.excludes).paginate(page=page, per_page=per_page)
        pagination.items = [self.transformer(item) for item in pagination.items]
        return pagination
        """
        #return self.only(*self.model.includes).exclude(*self.model.excludes).paginate(page=page, per_page=per_page)
        return self.objects.only(*self.model.includes).exclude(*self.model.excludes).paginate(page=page, per_page=per_page)
        """

        self.only(*self.model.includes).exclude(*self.model.excludes)
        #items = self._all(self.objects.skip((page - 1) * per_page).limit(per_page))

        #if len(items) < 1 and page != 1 and error_out:
        #    abort(404)

        return PG(self.objects, page, per_page)
        return Pagination(self, page, per_page, self.objects.count(), items)
        return self.model.query.paginate(items)

    def c_paginate(self, total_data, per_page=None, page=None):
        from flask_mongoengine.pagination import Pagination as PG

        page = int(request.values.get('page', 1)) if page is None else page
        per_page = int(request.values.get('items', 10)) if per_page is None else per_page
        pagination = PG(total_data, page, per_page)
        pagination.items = [self.transformer(item) for item in pagination.items]
        return pagination

    def save(self, data):
        """
        Create or Update data into table
        """
        return self.query.save(self.model, data)

    def create(self, data=None, **kwargs):
        #self.connection.create(self.model, data)
        if data is None:
            data = kwargs
        model_obj = self.model(**data)
        model_obj.save()
        return model_obj
        #return self.filter(email=data['email']).first()

    def update(self, data):
        return self.connection.update(self.model, data)

    def delete(self):
        return self.connection.delete(self.model)

    def filter(self, expressions=None, **data):
        if expressions is None:
            return self.objects.filter(**data)
        return self.objects.filter(expressions, data)

    def filter_self(self, expressions=None, **data):
        self.objects = self.filter(expressions, **data)
        return self


