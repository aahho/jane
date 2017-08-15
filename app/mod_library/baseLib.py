# Import flask dependencies
from flask import Blueprint, request, render_template, redirect, url_for


mod_lib = Blueprint('mod_lib', __name__, url_prefix='/lib')

class KBaseLib():
    __abstract__ = True