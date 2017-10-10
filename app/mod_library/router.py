from flask import Blueprint

from config import API_VERSION
from app.mod_library import response

api_parent = Blueprint('API', __name__, url_prefix='/api/' + API_VERSION + '/')

def api(rule, **options):

    def route(route_func):
        def route_control_func(*args, **kwargs):
            result = route_func(*args, **kwargs)
            return response.json(result)

        endpoint = options.pop("endpoint", route_func.__name__)
        api_parent.add_url_rule(rule, endpoint, route_control_func, **options)
        return route_control_func

    return route
