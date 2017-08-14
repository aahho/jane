# Import flask dependencies
from flask import Blueprint, request, render_template, redirect, url_for

# Define the blueprint: 'app', set its url prefix: app.url/auth
mod_manage = Blueprint('manage', __name__, url_prefix='/manage')

# Set the route and accepted methods
@mod_manage.route('/')
def home():
	return render_template('manage/feeds/home.html')
