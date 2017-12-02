import pytz
# Import flask and template operators
from flask import Flask, render_template, redirect
from flask_mongoalchemy import MongoAlchemy
from flask_cors import CORS
from  mod_database.models import db
from app.mod_library import exception, response

# Define the WSGI application object
app = Flask(__name__)

# CORS for application
CORS(app)

# Configurations
app.config.from_object('config')

# init database
db.init_app(app)

# Sample HTTP error handling
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(405)
def method_not_allowed(error):
    return redirect('/')

@app.errorhandler(exception.SException)
def own_error(error):
    # return response.exception(error)
    print error
    return redirect(error.redirect_url)

# Import a module / component using its blueprint handler variable (mod_auth)
# from app.mod_auth.controllers import mod_auth as auth_module
from app.mod_library.baseLib import mod_lib as BaseLib
from app.mod_library.router import api_parent as APIParent
from app.mod_sandbox.controllers import mod_sandbox as sandbox
from app.mod_home.controllers import mod_home as home
from app.mod_dashboard.controllers import mod_dashboard as dashboard
from app.mod_manage.controllers import mod_manage as manage


app.register_blueprint(home)
app.register_blueprint(dashboard)
app.register_blueprint(manage)
app.register_blueprint(sandbox)
app.register_blueprint(BaseLib)
app.register_blueprint(APIParent)

# Import filters and register to app in order to use in templates
from app.mod_utils import filters

app.jinja_env.filters['timesince'] = filters.timesince

