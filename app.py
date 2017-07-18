from flask import Flask, render_template
# import tweepy

app = Flask(__name__) 
app.config.from_pyfile('config.cfg')

TWEEPY_CONSUMER_KEY = "aakaNvoZG0NDnZip321lrGKEM"
TWEEPY_CONSUMER_SECRET = "y1VJZ6ORvKypSMWB0yHCfcnFJxK9LSAbSxNAcn7hQmQc4QHsK9"
TWEEPY_ACCESS_TOKEN_KEY = "116363974-eeCyCHKj8V3NfAecuAdmS2ILwUSill5cARryBkVF"
TWEEPY_ACCESS_TOKEN_SECRET = "3RiUUEfsjuLqz6R78CSPB5eP5ANirNm4lgtpLrbycezox"


# auth = tweepy.OAuthHandler(TWEEPY_CONSUMER_KEY, TWEEPY_CONSUMER_SECRET)
# auth.set_access_token(TWEEPY_ACCESS_TOKEN_KEY, TWEEPY_ACCESS_TOKEN_SECRET)

# api = tweepy.API(auth, secure = True)

# tweepy = Tweepy(app)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/dashboard')
def dashboard():
	return render_template('dashboard.html')


@app.route('/t')
def show_tweets():
	public_tweets = api.home_timeline()
	return render_template('tweets.html', public_tweets=tweets)


# @app.route('/login',methods=["GET","POST"])
# def login():
# 	error = None
# 	if
# 	return render_template('login.html',error = error)


@app.route('/hello')
def hello_world():
    return '<h1>Hello World</h1>'

if __name__ == '__main__':
	app.run(debug=True)