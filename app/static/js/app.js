(function (window, Vue, moment, _) {

    console.log(window.getTweetList());


	const ELEMENTS = {
		sidenav: '#sidenavList',
		tweets: '#tweetslist',
		feeds: '#feedslist',
		appContent: '#appContent'
	};

    var tweets_json = window.getTweetList();
	var newsfeed_json = window.getNewsList();


	var sidenavList = new Vue({
		el: ELEMENTS.sidenav,
		delimiters: ["[[", "]]"],
		data: {
			items: [
				{
					id: 'feeds',
					title: 'News Feed',
					className: 'ti-rss-alt',
					subitems: null
				},
				{
					id: 'tweets',
					title: 'Twitter',
					className: 'ti-tag',
                    subitems: null

				},
				{
					id: 'facebook',
					title: 'facebook',
					className: 'ti-facebook',
                    subitems: null

				},
				{
					id: 'dataAggr',
					title: 'Data Aggregation',
					className: 'ti-menu-alt',
					subitems: [
						{
							id: 'hashSocial',
							title: 'Social Signals',
							className: 'ti-flickr'
						},
						{
							id: 'hashManage',
							title: 'Manage Aggr',
							className: 'ti-hummer'
						}
					]
				},
				
			],
			activeItem: {
				id: 'feeds',
				title: 'News Feed',
				className: 'ti-rss-alt',
				subitems: null
			},
			activeSubitem: {},
		},
		methods: {
			setActive: function (item, isSub, idx) {
				console.log(this.items);
				if(item.subitems !== null && !isSub) {
					this.activeItem = item;
					this.activeSubitem = item.subitems[0];
				} else if(item.subitems === null){
					this.activeItem = item;
					this.activeSubitem = {};
				} else if(isSub) {
					this.activeSubitem = item
					this.activeItem = this.items[idx]
					console.log(item, isSub, idx);
				}

				switch(this.activeItem.id) {
					case 'feeds':
						appContent.$data.currentView = 'feedslist';
						break;
					case 'tweets':
						appContent.$data.currentView = 'tweetslist';
						break;
					case 'facebook':
						appContent.$data.currentView = 'fblist';
						break;	
					default: appContent.$data.currentView = 'empty';
				}

			}
		}
	});

    //tweet parser

    function parseTweets() {
        var urls = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
        var mentions = /([^a-zA-Z0-9-_\.]@([A-Za-z]+[A-Za-z0-9_]+))/gim;
        var hashtags = /([^a-zA-Z0-9-_\.]#([A-Za-z]+[A-Za-z0-9_]+))/gim;
        return tweets_json.filter(function (item) {
            item.handle = '<a href="https://twitter.com/'+item.handle+'" target="_blank">'+item.handle+'</a>';

            if(item.tweet.match(urls)) {
                item.tweet = item.tweet.replace(urls, '<a href="$1" target="_blank">$1</a>');
            }
            if(item.tweet.match(mentions)) {
                item.tweet = item.tweet.replace(mentions, '<a href="https://twitter.com/$1" target="_blank">$1</a>');
            }
            if(item.tweet.match(hashtags)) {
                item.tweet = item.tweet.replace(hashtags, function (match) {
                	// console.log('tweet hastag replacer ', match);
                	var mItem = encodeURIComponent(match);
                	return '<a href="https://twitter.com/search?q='+mItem+'" target="_blank">'+match+'</a>'
                });
            }

            return item;
        });
    }

    tweets_json = parseTweets();

	var appContent = new Vue({
		el: ELEMENTS.appContent,
		delimiters: ["[[", "]]"],
		data: {
			currentView: 'feedslist'
		},
		components: {
			feedslist: {
				template: ELEMENTS.feeds,
				delimiters: ["[[", "]]"],
				data: function () {
				  return {
				  	feeds: newsfeed_json,
                    searchText: ''
				  }
				},
                watch: {
                    searchText: function (item) {
                        this.searchItems(this.searchText, this.tweets);
                        console.log('watch',item);
                    }
                },
                methods: {
                    searchItems: _.debounce(function (searchText) {
                        this.feeds = newsfeed_json.filter(function (item) {
                            if(item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || item.summary.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                                return item;
                            }
                            // console.log('methods', item, searchText)
                        });
                    }, 500)
                }
			},
			tweetslist: {
    			template: ELEMENTS.tweets,
    			delimiters: ["[[", "]]"],
    			data: function () {
    			  	return {
    				    tweets: tweets_json,
                        searchText: ''
    				}
    			},
                watch: {
                    searchText: function (item) {
                        this.searchItems(this.searchText, this.tweets);
                        console.log('watch',item);
                    }
                },
                methods: {
                    searchItems: _.debounce(function (searchText) {
                        this.tweets = tweets_json.filter(function (item) {
                            if(item.handle.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || item.tweet.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                                return item;
                            }
                            // console.log('methods', item, searchText)
                        });
                    }, 500)
                }
			},
			empty: {
				template: '<h1>Nothing here</h1>'
			}
		}
	});
}(window, Vue, moment, _));