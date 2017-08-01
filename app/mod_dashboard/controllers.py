# Import flask dependencies
from flask import Blueprint, request, render_template, redirect, url_for

# Define the blueprint: 'app', set its url prefix: app.url/auth
mod_dashboard = Blueprint('dashboard', __name__, url_prefix='/dashboard')

# Set the route and accepted methods
@mod_dashboard.route('/')
def home():
	return render_template('dashboard/home.html')