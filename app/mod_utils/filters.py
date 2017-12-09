from datetime import datetime
import time

from flask import request
from werkzeug import url_encode

from app.mod_utils import helper

def timesince(date, default="Just Now"):
    """
    Returns string representing "time since" e.g.
    3 days ago, 5 hours ago
    """
    now = helper.now()
    if not isinstance(date, datetime):
        date = helper.str_to_datetime(date)
    diff = now - date

    periods = (
        (diff.days / 365, "year", "years"),
        (diff.days / 30, "month", "months"),
        (diff.days / 7, "week", "weeks"),
        (diff.days, "day", "days"),
        (diff.seconds / 3600, "hour", "hours"),
        (diff.seconds / 60, "minute", "minutes"),
        (diff.seconds, "second", "seconds"),
    )

    for period, singular, plural in periods:
        if period:
            return "%d %s ago" % (period, singular if period == 1 else plural)

    return default

def to_datetime(date):
    """
    Return datetime object from int/float/str
    """
    return time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(date / 1000))

def current_url(**new_values):
    args = request.args.copy()
    
    for key, value in new_values.items():
        args[key] = value
    return '{}?{}'.format(request.path, url_encode(args))

def counts(value, singluar, plural=None):
    plural = plural or singluar + 's'
    s_or_p = plural if value > 1 else singluar
    return str(value) + ' ' + str(s_or_p)
