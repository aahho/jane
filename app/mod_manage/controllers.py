# Import flask dependencies
from flask import Blueprint, request, render_template, redirect, url_for
from app.mod_repository.user import UserRepo
from app.mod_library import router


# Define the blueprint: 'app', set its url prefix: app.url/auth
mod_manage = Blueprint('manage', __name__, url_prefix='/manage')

# Set the route and accepted methods
@mod_manage.route('/')
def home():
	return render_template('manage/feeds/home.html')

#@mod_manage.route('/usersss')
#@router.api_parent.route('/users')
@router.api('users', methods=['GET'])
def users():
    #print UserRepo().create({'name': 'Kishan', 'email': 'kkl'})
    #print UserRepo().all()
    return "USers"
