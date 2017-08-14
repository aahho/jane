# Import flask and template operators
from flask import Flask, render_template

# Define the WSGI application object
app = Flask(__name__)

# Configurations
app.config.from_object('config')

# Sample HTTP error handling
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

# Import a module / component using its blueprint handler variable (mod_auth)
# from app.mod_auth.controllers import mod_auth as auth_module
from app.mod_library.KBaseLib import KBaseLib
from app.mod_sandbox.controllers import mod_sandbox as sandbox
from app.mod_home.controllers import mod_home as home
from app.mod_dashboard.controllers import mod_dashboard as dashboard
from app.mod_manage.controllers import mod_manage as manage


app.register_blueprint(home)
app.register_blueprint(dashboard)
app.register_blueprint(manage)
app.register_blueprint(sandbox)
app.register_blueprint(KBaseLib)