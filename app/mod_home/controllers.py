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
    paginator = views.list_all_company()
    trendings = views.list_trending_companies()
    watchlist = []
    if 'authenticate' in session:
        from app.mod_database.models import User
        watchlist = User.auth().favourites
    #    return render_template('company/authenticated_list.html', paginator=paginator, trendings=trendings)
    return render_template('company/list.html', paginator=paginator, trendings=trendings, watchlist=watchlist)

@mod_home.route('companies/<company_code>')
@mod_home.route('companies/<company_code>/<slug>')
def company_details(company_code, slug="adf"):
    if slug != "adf":
        return redirect("companies/{}/{}".format(company_code, "adf"))
    return render_template('company/details.html')
    return response.json(views.get_current_stock_of_company(company_code))

@mod_home.route('companies/<company_code>/<slug>/stocks')
def company_stock_details(company_code, slug):
    return response.json([company_code, slug, 'stocks'])

@router.api('companies')
def companies():
    #return response.json(views.list_all_company())
    return response.paginate(views.list_all_company())

@router.api('companies/<company_code>/stocks')
def stocks(company_code):
    return response.json(views.get_current_stock_of_company(company_code))

@router.api('companies/<company_id>/comments', methods=['GET', 'POST'], validator=validators.VAttachment)
def comments(company_id):
    if request.method == 'POST':
        return response.json(views.add_comment_to_company(company_id, request.json))
    else:
        return response.paginate(views.list_comments_of_company(company_id))

@router.api('companies/<company_id>/comments/<comment_id>/reply', methods=['GET', 'POST'])
def reply(company_id, comment_id):
    if request.method == 'POST':
        return response.json(views.reply_to_comment(company_id, comment_id, request.json.get('data'), request.json.get('replyTo', None)))
    else:
        return response.paginate(views.list_replies_of_comments(company_id, comment_id))

@mod_home.route('companies/<company_id>/watch')
def watch_company(company_id):
    views.add_to_watchlist(company_id)
    return redirect("/")

@router.api('users/watchlist', methods=['GET'])
@router.api('companies/<company_id>/watchlist', methods=['POST', 'DELETE'])
def watchlist(company_id=None):
    if request.method == 'POST':
        return response.json(views.add_to_watchlist(company_id))
    if request.method == 'DELETE':
        return response.json(views.remove_from_watchlist(company_id))
    else:
        return response.paginate(views.list_of_watchlist())

@router.api('companies/filter', methods=['GET'])
def filter():
    return response.paginate(views.filter(request.args.get('q', None)))

@router.api('companies/trending', methods=['GET'])
def trending():
    return response.paginate(views.list_trending_companies())

#@router.api('login', methods=['POST'], validator=validators.VLogin)
@mod_home.route('login', methods=['POST'])
def login():
    """
    request.args
    request.form
    request.files
    request.values
    request.json
    """
    print request.values
    user = views.login_user(request.values)
    return redirect("/")

@router.api('login/google', methods=['GET'])
def google_login():
    return views.google_login_user(request.args.get('code'))

#@router.api('user/logout', methods=['GET'])
@mod_home.route('user/logout', methods=['GET'])
def logout():
    views.logout_user()
    return redirect("/")

@router.api('users', methods=['POST'])
def signup():
    return views.signup_user(request.json)

