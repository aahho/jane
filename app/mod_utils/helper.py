import importlib
import sys
import bcrypt
from datetime import datetime, timedelta, date

from dateutil import parser
from uuid import uuid4

import config

base_module = 'app'

def get_module(mod_str):
    return importlib.import_module(mod_str)

def has_attr_in_module(module, attr):
    return hasattr(get_module(module), attr)

def get_attr_of_module(module, attr):
    return getattr(get_module(module), attr)

def method_exists(method_name, module=base_module):
    return has_attr_in_module(module, method_name)

def class_exists(cls_name, module=base_module):
    return has_attr_in_module(module, cls_name)

def get_class(cls_name, module=base_module):
    return get_attr_of_module(module, cls_name)

def get_def(def_name, module=base_module):
    return get_attr_of_module(module, def_name)

def today():
    return date.today().strftime("%Y-%m-%d")

def now():
    return datetime.now()

def str_to_datetime(string):
    return parser.parse(string)

def add_days_to_date(date, days):
    return date + timedelta(days=days)

def hash_it(string):
    return bcrypt.hashpw(str(string), bcrypt.gensalt())

def check_hash(string, hashed_string):
    return bcrypt.checkpw(str(string), str(hashed_string))

def random_string():
    return str(uuid4())

def generate_token():
    return random_string()
