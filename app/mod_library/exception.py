from flask import request, flash

class SException(Exception):
    
    def __init__(self, message, redirect_url=None, status_code=422):
        super(SException, self).__init__(message)
        self.status_code = status_code
        self.redirect_url = redirect_url or request.url
        flash(self.message, 'error')

