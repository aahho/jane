# Import flask dependencies
from flask import Blueprint, request, render_template, redirect, url_for

# Define the blueprint: 'app', set its url prefix: app.url/auth
klib = Blueprint('KBaseLib', __name__)

class KBaseLib():
    __abstract__ = True
