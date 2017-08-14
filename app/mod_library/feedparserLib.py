import feedparser


class kFeedParser(KBKBaseLib):
    
    RSS_URLS = [
            'http://feeds.feedburner.com/RockPaperShotgun',
            'http://www.gameinformer.com/b/MainFeed.aspx?Tags=preview',
            'http://www.polygon.com/rss/group/news/index.xml',
    ]

    def __repr__(self):
        return '<kFeedParser %r>' % (self.name)

    def getFeedUrlList(self):
        return self.RSS_URLS

    def getFeeds(self):
        items = []
        feedsList = self.getFeedUrlList()
        for item in feedsList:
            entries.extend(feedparser.parse(url).entries)

        return items

    
    #@todo event ( post triggers in flask ) run after success in getFeeds. 
    #@todo parses the raw and does the assortment. 
    
    # def fetchFeeds(self):
        
    #    # entries_sorted = sorted(entries,key=lambda e: e.published_parsed,reverse=True)
    #     return entries
    
    # def 

