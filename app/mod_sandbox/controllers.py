# Import flask dependencies
from flask import Blueprint, request, render_template, redirect, url_for
import app.mod_sandbox.helper
# import app.mod_core.feeds

# Define the blueprint: 'app', set its url prefix: app.url/auth
mod_sandbox = Blueprint('sandbox', __name__, url_prefix='/sandbox')

# Set the route and accepted methods
@mod_sandbox.route('/')
def home():
	sand1 = app.mod_sandbox.helper.Sandbox()
	entries = sand1.fetchFeeds()
	return render_template('sandbox/home.html',entries=entries)

