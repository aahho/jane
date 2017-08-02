# Import flask dependencies
from flask import Blueprint, request, render_template, redirect, url_for

# Define the blueprint: 'app', set its url prefix: app.url/auth
mod_dashboard = Blueprint('dashboard', __name__, url_prefix='/dashboard')

# Set the route and accepted methods
@mod_dashboard.route('/')
def home():
	return render_template('dashboard/home.html')

@mod_dashboard.route('/feeds')
def feeds():
	return render_template('dashboard/partials/feeds.html')

@mod_dashboard.route('/tweets')
def tweets():
	return render_template('dashboard/partials/tweets.html')

@mod_dashboard.route('/fb')
def fb():
	return render_template('dashboard/partials/facebook.html')

@mod_dashboard.route('/posting')
def posting():
	return render_template('dashboard/partials/posting.html')