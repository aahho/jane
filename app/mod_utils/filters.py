from datetime import datetime

from app.mod_utils import helper

def timesince(date, default="Just Now"):
    """
    Returns string representing "time since" e.g.
    3 days ago, 5 hours ago
    """
    now = helper.now()
    if not isinstance(date, datetime):
        date = datetime(date)
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

