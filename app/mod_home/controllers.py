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
@mod_home.route('')
def index():
    paginator = views.list_all_company(per_page=int(request.args.get('items', 10)))
    trendings = views.list_trending_companies()
    news = views.list_latest_news()
    watchlist = []
    if 'authenticate' in session:
        watchlist = views.list_of_watchlist(int(request.args.get('witems', 5)), int(request.args.get('wpage', 1))).items
        #from app.mod_database.models import User
        #watchlist = User.auth().favourites
    #    return render_template('company/authenticated_list.html', paginator=paginator, trendings=trendings)
    return render_template('company/list.html', 
            paginator=paginator, news_list=news,
            trendings=trendings, watchlist=watchlist)

@mod_home.route('companies/<company_code>')
@mod_home.route('companies/<company_code>/<slug>')
def company_details(company_code, slug=None):
    company = views.get_only_company(company_code)
    if slug != company.slug:
        return redirect("companies/{}/{}".format(company_code, company.slug))
    company = views.get_current_stock_of_company(company_code, company=company)
    trendings = views.list_trending_companies()
    news = views.list_latest_news()
    watchlist = []
    if 'authenticate' in session:
        watchlist = views.list_of_watchlist().items
    return render_template('company/details.html', 
            company=company, trendings=trendings, 
            news_list=news, watchlist=watchlist)

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

#@router.api('companies/<company_id>/comments', methods=['GET', 'POST'], validator=validators.VAttachment)
@mod_home.route('companies/<company_id>/comments', methods=['POST'])
def comments(company_id):
    if request.method == 'POST':
        #return response.json(views.add_comment_to_company(company_id, request.json))
        data = {
            'comment': request.values.get('comment', None),
            'attachment': request.files.get('attachment', None)
        }
        company = views.add_comment_to_company(company_id, data)
        return redirect('/companies/' + company.code + '/' + company.slug) 
    else:
        return response.paginate(views.list_comments_of_company(company_id))

#@router.api('companies/<company_id>/comments/<comment_id>/reply', methods=['POST'])
@mod_home.route('companies/<company_id>/comments/<comment_id>/reply', methods=['POST'])
def reply(company_id, comment_id):
    if request.method == 'POST':
        company = views.reply_to_comment(company_id, comment_id, request.values.get('replyContent'), request.values.get('replyTo', None))
        print company
        return redirect('/companies/' + company.code + '/' + company.slug) 
    else:
        return response.paginate(views.list_replies_of_comments(company_id, comment_id))

@mod_home.route('companies/<company_id>/watch')
def watch_company(company_id):
    views.add_to_watchlist(company_id)
    return redirect(request.args.get('referer', '/'))

@mod_home.route('companies/<company_id>/unwatch')
def unwatch_company(company_id):
    views.remove_from_watchlist(company_id)
    return redirect(request.args.get('referer', '/'))

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
    return response.json(views.filter(request.args.get('q', None)))
    #return response.paginate(views.filter(request.args.get('q', None)))

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

#@router.api('users', methods=['POST'])
#def signup():
#    return views.signup_user(request.json)

@mod_home.route('user/signup', methods=['POST'])
def user_signup():
    views.signup_user(request.form)
    return redirect("/")

