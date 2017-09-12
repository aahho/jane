import os
BASE_DIR = os.path.abspath(os.path.dirname(__file__))  

# Statement for enabling the development environment
DEBUG = True
#SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'app.db')
#DATABASE_CONNECT_OPTIONS = {}

# Application threads. A common general assumption is
# using 2 per available processor cores - to handle
# incoming requests using one and performing background
# operations using the other.
THREADS_PER_PAGE = 2

# Enable protection agains *Cross-site Request Forgery (CSRF)*
CSRF_ENABLED     = True

# Use a secure, unique and absolutely secret key for
# signing the data. 
CSRF_SESSION_KEY = "secret"

# Secret key for signing cookies
SECRET_KEY = "secret"



TWEEPY_CONSUMER_KEY = "aakaNvoZG0NDnZip321lrGKEM"
TWEEPY_CONSUMER_SECRET = "y1VJZ6ORvKypSMWB0yHCfcnFJxK9LSAbSxNAcn7hQmQc4QHsK9"
TWEEPY_ACCESS_TOKEN_KEY = "116363974-eeCyCHKj8V3NfAecuAdmS2ILwUSill5cARryBkVF"
TWEEPY_ACCESS_TOKEN_SECRET = "3RiUUEfsjuLqz6R78CSPB5eP5ANirNm4lgtpLrbycezox"

MONGOALCHEMY_DATABASE = 'stocks'
FIXTURES_DIR = '' # will be used when loading fixtures
