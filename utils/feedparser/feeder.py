# -*- coding: utf-8 -*-

import feedparser
import os
import json
import sys


RSS_URLS = [
    'http://feeds.feedburner.com/RockPaperShotgun',
    'http://www.gameinformer.com/b/MainFeed.aspx?Tags=preview',
    'http://feeds.feedburner.com/TechCrunch/startups'
    ]

feeds = []
for url in RSS_URLS:
    feeds.append(feedparser.parse(url))

posts = []

for feed in feeds:
    for post in feed.entries:
        posts.append({
            'title': feeds['entries'][i].title,
            'description': feeds['entries'][i].summary,
            'url': feeds['entries'][i].link,
        })
        break
    break


print posts
# posts = []
# for url in RSS_URLS:
#     posts.extend(feedparser.parse(url).entries)

# # for post in posts:
# #     print post[0]

# # dic = {}
# # dic = dict(map(None, *[iter(posts)]*2))



# f = open('feed.json' ,'w')
# f.write(str(posts))