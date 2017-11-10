from flask import Blueprint, request
from flask.wrappers import Response

from config import API_VERSION
from app.mod_library import response
from app.mod_home import validators

api_parent = Blueprint('API', __name__, url_prefix='/api/' + API_VERSION + '/')

def api(rule, validator=validators.VDefault, **options):

    def route(route_func):
        def route_control_func(*args, **kwargs):

            if request.method != 'GET':
                validator().validate(request.json)

            # we can send data from here to route function
            result = route_func(*args, **kwargs)
            if not isinstance(result, Response):
                result = response.json(result)
            return result
            #return response.json(result)

        endpoint = options.pop("endpoint", route_func.__name__)
        api_parent.add_url_rule(rule, endpoint, route_control_func, **options)
        return route_control_func

    return route
