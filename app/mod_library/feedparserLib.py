import feedparser
from app.mod_library.baseLib import KBaseLib as KBKBaseLibClass

class kFeedParser(KBKBaseLibClass):
    
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
        entries = []
        feedsList = self.getFeedUrlList()
        for item in feedsList:
            entries.extend(feedparser.parse(item).entries)

        return entries

    
    #@todo event ( post triggers in flask ) run after success in getFeeds. 
    #@todo parses the raw and does the assortment. 
    
    # def fetchFeeds(self):
        
    #    # entries_sorted = sorted(entries,key=lambda e: e.published_parsed,reverse=True)
    #     return entries
    
    # def 

