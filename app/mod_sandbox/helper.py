import feedparser


class Sandbox():

    def __repr__(self):
        return '<Sandbox %r>' % (self.name)

    def getFeeds(self):
        items = []
        feedsList = Sandbox.model.get()
        for item in feedsList:
            self.extractItems()
        # call db model to get feeds list 
        # call a function to extarct feed_items 
        Sandbox.model.save(items) #raw
    
    # event ( post triggers in flask ) run after success in getFeeds. 
    # parses the raw and does the assortment. 

    
    def fetchFeeds(self):
        RSS_URLS = [
            'http://feeds.feedburner.com/RockPaperShotgun',
            'http://www.gameinformer.com/b/MainFeed.aspx?Tags=preview',
            'http://www.polygon.com/rss/group/news/index.xml',
        ]
        entries = []

        for url in RSS_URLS:
            entries.extend(feedparser.parse(url).entries)
        
       # entries_sorted = sorted(entries,key=lambda e: e.published_parsed,reverse=True)
        return entries
    
    def 

