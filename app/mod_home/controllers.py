# Import flask dependencies
from flask import Blueprint, request, render_template, \
                  flash, g, session, redirect, url_for

import views
from app.mod_library import response
from app.mod_library import router
import validators


# Define the blueprint: 'home', set its url prefix: app.url/auth
mod_home = Blueprint('home', __name__, url_prefix='/')

# Set the route and accepted methods
@mod_home.route('/')
def index():
	return render_template('index.html')

@router.api('companies')
def companies():
    #return response.json(views.list_all_company())
    return response.paginate(views.list_all_company())

@router.api('companies/<company_code>/stocks')
def stocks(company_code):
    return response.json(views.get_current_stock_of_company(company_code))

@router.api('companies/<company_id>/comments', methods=['GET', 'POST'])
def comments(company_id):
    if request.method == 'POST':
        return response.json(views.add_comment_to_company(company_id, request.json.get('data')))
    else:
        return response.paginate(views.list_comments_of_company(company_id))

@router.api('companies/<company_id>/comments/<comment_id>/reply', methods=['GET', 'POST'])
def reply(company_id, comment_id):
    if request.method == 'POST':
        return response.json(views.reply_to_comment(company_id, comment_id, request.json.get('data'), request.json.get('replyTo', None)))
    else:
        return response.paginate(views.list_replies_of_comments(company_id, comment_id))

@router.api('companies/filter', methods=['GET'])
def filter():
    return response.paginate(views.filter(request.args.get('q', None)))

@router.api('companies/trending', methods=['GET'])
def trending():
    return response.paginate(views.list_trending_companies())

@router.api('login', methods=['POST'], validator=validators.VLogin)
def login():
    """
    request.args
    request.form
    request.files
    request.values
    request.json
    """
    return views.login_user(request.json)

@router.api('users', methods=['POST'])
def signup():
    return views.signup_user(request.json)

