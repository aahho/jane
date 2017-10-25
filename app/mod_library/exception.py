
class SException(Exception):
    
    def __init__(self, message, status_code=422):
        super(SException, self).__init__(message)
        self.status_code = status_code
