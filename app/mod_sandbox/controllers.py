# Import flask dependencies
from flask import Blueprint, request, render_template, redirect, url_for
from app.mod_library.feedparserLib import kFeedParser as FeedParserClass

mod_sandbox = Blueprint('sandbox', __name__, url_prefix='/sandbox')


@mod_sandbox.route('/')
def home():
	x = FeedParserClass()
	entries = x.getFeeds()
	return render_template('sandbox/home.html',entries=entries)