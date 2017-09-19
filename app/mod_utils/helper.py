import importlib
import sys
from datetime import datetime

from dateutil import parser

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

def str_to_datetime(string):
    return parser.parse(string)
