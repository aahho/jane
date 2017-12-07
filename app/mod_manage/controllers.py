import json

# Import flask dependencies
from flask import Blueprint, request, render_template, redirect, url_for, session

import views
from app.mod_library import response
from app.mod_library.exception import SException


# Define the blueprint: 'app', set its url prefix: app.url/auth
mod_manage = Blueprint('manage', __name__, url_prefix='/manage')

@mod_manage.before_request
def admin_auth_required():
    if request.endpoint != 'manage.admin_login':
        if 'admin' not in session:
            return redirect('/manage/login')

@mod_manage.route('/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        res, data = views.login_admin(request.values)
        if res:
            return redirect('/manage/companies')
        return redirect(url_for('manage.admin_login'))
    else:
        return render_template('manage/login.html')

@mod_manage.route('/logout', methods=['GET'])
def admin_logout():
    if 'admin' in session:
        del session['admin']
    return redirect(url_for('manage.admin_login'))

# Set the route and accepted methods
@mod_manage.route('/companies')
def company_list():
    companies = views.list_companies()
    return render_template('manage/company/list.html', paginator=companies)

@mod_manage.route('/companies/<company_id>')
def companies_admin(company_id):
    if request.method == 'POST':
        company = view.update_companies(company_id, request.values)
    else:
        company = views.get_company_details(company_id)
    return render_template('manage/company/details.html', company = company)

@mod_manage.route('/companies/<company_id>/edit', methods=['GET', 'POST'])
def company_update_admin(company_id):
    if request.method == 'POST':
        company = views.update_company(company_id, request.json)
        return "Success"
    else:
        company = views.get_company_details(company_id)
    print company.name
    if company.details:
         company.details = json.loads(company.details.to_json())
         if company.details.get('_id', None):
             del company.details['_id']
    else:
         company.details = {}
    return render_template('manage/company/edit.html', company = company)

@mod_manage.route('/users')
def user_list():
    users = views.list_users()
    print users
    return render_template('manage/user/list.html', paginator = users)

@mod_manage.route('/users/<user_id>')
def user_admin(user_id):
    if request.method == 'POST':
        user = views.update_user(user_id, request.values)
    else:
        user = views.get_user_details(user_id)
    return render_template('manage/user/details.html', user = user)

@mod_manage.route('/uploads/<upload_id>', methods=['POST'])
def upload(upload_id):
    try:
        if request.json:
            res = views.update_upload(upload_id, request.json)
        elif len(request.values.to_dict()):
            res = views.update_upload(upload_id, request.values.to_dict())
        else:
            raise SException('Please provide some arguments', 400)
        return response.json({'data': 'success'})
    except SException as e:
        raise e
    except:
        raise SException('Invalid request', 400)

