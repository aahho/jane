
from app.mod_library.exception import SException


class Validator(object):
    rule = {}

    def __init__(self):
        self.errors = set()

    def validate(self, data):
        for key, value in self.rule.iteritems():
            exist, dtype = self.__unpack_rules(value)
            if not self._apply_exists(exist, key, data):
                self.errors.add('Please provide ' + key)
                continue

            if not self._apply_dtypes(dtype, value, data[key]):
                self.errors.add(key + ' is not ' + dtype)

        if len(self.errors) == 0:
            return True

        raise SException(list(self.errors), 400)

    def __unpack_rules(self, value):
        value = value.strip('|')
        tuples = value.split('|')
        if len(tuples) == 2:
            return tuples
        else:
            return (value, None)

    def _apply_exists(self, exist, key, data):
        if exist == 'required':
            return key in data
        return True

    def _apply_dtypes(self, dtype, rule_value, request_value):
        if dtype == 'string':
            return isinstance(request_value, str) \
                    or isinstance(request_value, unicode)

        return True

def login(data):
    return True

class VLogin(Validator):
    rule = {
            "email": "required|string",
            "password": "required"
        }
