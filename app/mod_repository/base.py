from math import ceil

from flask_mongoalchemy import BaseQuery
from flask import request


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


class BaseRepo(object):

    __abstract__ = True

    def __init__(self, into='default', transformer=None):
        #self.connection = config.get_connection(into)
        if not hasattr(self, 'model'):
            raise Exception('Please define model in your class ' + self.__repr__())
        
        # Take includes as fields if defined
        self.fields = self.model.includes if len(self.model.includes) else self.model.get_fields().keys()
        # Exclude the fields
        self.fields = list(set(self.fields).difference(self.model.excludes))
        self.query = self.model.query
        self.transformer = transformer if transformer is not None else self.model.transformer
        self.limit = 10

    def set_transformer(self, transformer):
        self.transformer = transformer
        return self

    def set_limit(self, limit):
        self.limit = limit
        return self

    def get(self):
        pass

    def fields(self, *field_names):
        return self.query.fields(field_names)

    def all(self):
        return [self.transformer(obj) for obj in iter(self.query.fields(*self.fields))]

    def _all(self, query_set):
        return [self.transformer(obj) for obj in iter(query_set)]

    def paginate(self, per_page=None, page=None, error_out=False):
        print "Asdfsdf"
        page = int(request.args['page']) if page is None else page
        per_page = int(request.args['items']) if per_page is None else per_page
        if page < 1 and error_out:
            abort(404)

        items = self._all(self.query.skip((page - 1) * per_page).limit(per_page).fields(*self.fields))

        if len(items) < 1 and page != 1 and error_out:
            abort(404)

        return Pagination(self, page, per_page, self.query.count(), items)
        return self.model.query.paginate(items)

    def save(self, data):
        """
        Create or Update data into table
        """
        return self.query.save(self.model, data)

    def create(self, data):
        #self.connection.create(self.model, data)
        self.model(**data).save()
        return self.filter(email=data['email']).first()

    def update(self, data):
        return self.connection.update(self.model, data)

    def delete(self):
        return self.connection.delete(self.model)

    def filter(self, expressions=None, **data):
        if expressions is None:
            return self.query.filter(data)
        return self.query.filter(expressions, data)

