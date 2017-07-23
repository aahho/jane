# -*- coding: utf-8 -*-
# usage : python twitterHashTagExtractor.py hashtag

import os
import json
import sys
import requests


if sys.argv[1] == "":
    hashtag = 'indianpolitics'


hashtag = sys.argv[1]

api_key = "aakaNvoZG0NDnZip321lrGKEM"
api_secret = "y1VJZ6ORvKypSMWB0yHCfcnFJxK9LSAbSxNAcn7hQmQc4QHsK9"

# https://dev.twitter.com/oauth/application-only
# The base64 stuff described there is the normal Basic Auth dance.

r = requests.post('https://api.twitter.com/oauth2/token',
                  auth=(api_key, api_secret),
                  headers={'Content-Type':
                           'application/x-www-form-urlencoded;charset=UTF-8'},
                  data='grant_type=client_credentials')
assert r.json()['token_type'] == 'bearer'
bearer = r.json()['access_token']
# Note that the space character can be represented by “%20” or “+” sign.


url = 'https://api.twitter.com/1.1/search/tweets.json?q=%23'+hashtag
r = requests.get(url, headers={'Authorization': 'Bearer ' + bearer})
X = r.json()

json_data = {}
thefilenametemp = hashtag
thefilenameJson = hashtag+'.json'

f = open(thefilenameJson ,'w')

print str(len(X['statuses'])) + " items have been written to " + thefilenameJson 


for item in X['statuses']:
	some = {
        "text": item['text'],
        "handle": item['user']['screen_name'],
        "timestamp": item['user']['created_at']
    }
	f.write(json.dumps(some))

#print json_data
# with open(thefilenameJson, "rb") as fin:
#     content = json.load(fin)


# with open(thefilenameJson, "wb") as fout:
#     json.dump(content, fout, indent=1)