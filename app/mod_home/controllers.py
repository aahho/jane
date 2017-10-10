# Import flask dependencies
from flask import Blueprint, request, render_template, \
                  flash, g, session, redirect, url_for

import views
from app.mod_library import response
from app.mod_library import router


# Define the blueprint: 'home', set its url prefix: app.url/auth
mod_home = Blueprint('home', __name__, url_prefix='/')

# Set the route and accepted methods
@mod_home.route('/')
def index():
	return render_template('index.html')

@router.api('companies')
def companies():
    #return response.json(views.list_all_company())
    print views.list_all_company()
    return {'a': 'aaa'}
    return response.paginate(views.list_all_company())

@router.api('companies/<company_code>/stocks')
def stocks(company_code):
    return response.json(views.get_current_stock_of_company(company_code))

@router.api('login')
def login():
    return views.login_user(request.values)

@router.api('users', methods=['POST'])
def signup():
    return views.signup_user(request.json)
