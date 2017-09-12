

class BaseRepo(object):

    __abstract__ = True

    def __init__(self, into='default'):
        #self.connection = config.get_connection(into)
        pass

    def get(self):
        pass

    def all(self):
        return self.model.query.all()

    def save(self, data):
        """
        Create or Update data into table
        """
        self.connection.save(self.model, data)

    def create(self, data):
        #self.connection.create(self.model, data)
        return self.model(**data).save()

    def update(self, data):
        self.connection.update(self.model, data)

    def delete(self):
        self.connection.delete(self.model)


