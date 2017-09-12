# Import flask dependencies
from flask import Blueprint, request, render_template, \
                  flash, g, session, redirect, url_for

# Define the blueprint: 'home', set its url prefix: app.url/auth
mod_home = Blueprint('home', __name__, url_prefix='/')

# Set the route and accepted methods
@mod_home.route('/')
def index():
	return render_template('index.html')

@mod_home.route('/companies')
def companies():
    return "Company List"

@mod_home.route('/companies/<id>/stocks')
def stocks():
    return "Stock details of the company"
