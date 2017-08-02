(function (window, Vue, moment, _) {

    console.log(window.getTweetList());


	const ELEMENTS = {
		sidenav: '#sidenavList',
		home: '#home',
		tweets: '#tweetslist',
		feeds: '#feedslist',
		facebook: '#facebook',
		bots: '#posting',
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
					id: 'home',
					slug: '',
					title: 'Home',
					className: 'ti-home',
					subitems: null
				},
				{
					id: 'feeds',
					slug: 'feeds',
					title: 'News Feed',
					className: 'ti-rss-alt',
					subitems: null
				},
				{
					id: 'tweets',
					slug: 'tweets',
					title: 'Twitter',
					className: 'ti-tag',
                    subitems: null

				},
				{
					id: 'fb',
					slug: 'fb',
					title: 'Facebook',
					className: 'ti-facebook',
                    subitems: null

				},
				{
					id: 'posting',
					slug: 'posting',
					title: 'Posting',
					className: 'ti-flickr-alt',
                    subitems: null

				}
				// {
				// 	id: 'dataAggr',
				// 	slug: 'dataAggr',
				// 	title: 'Data Aggregation',
				// 	className: 'ti-menu-alt',
				// 	subitems: [
				// 		{
				// 			id: 'hashSocial',
				// 			title: 'Social Signals',
				// 			className: 'ti-flickr'
				// 		},
				// 		{
				// 			id: 'hashManage',
				// 			title: 'Manage Aggr',
				// 			className: 'ti-hummer'
				// 		}
				// 	]
				// }
				
			],
			activeView: ''
		}
	});

    //tweet parser

    function parseTweets() {
        var urls = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
        var mentions = /([^a-zA-Z0-9-_\.]@([A-Za-z]+[A-Za-z0-9_]+))/gim;
        var hashtags = /([^a-zA-Z0-9-_\.]#([A-Za-z]+[A-Za-z0-9_]+))/gim;
        return tweets_json.filter(function (item) {
            item.handle = '<a href="https://twitter.com/'+item.handle+'" target="_blank">'+item.handle+'</a>';
			item.timestamp = moment(item.timestamp).fromNow();
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
			currentView: ''
		},
		components: {
			home: {
				template: ELEMENTS.home,
				delimiters: ["[[", "]]"],
				data: function () {
					return {

					}
				}
			},
			feeds: {
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
			tweets: {
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
			fb: {
				template: ELEMENTS.facebook,
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
			posting: {
				template: ELEMENTS.bots,
				delimiters: ["[[", "]]"],
				data: function () {
					return {}
				}
			},
			empty: {
				template: '<h1>Nothing here</h1>'
			}
		}
	});

	let getCurrentView = function () {
		let viewName = window.location.pathname.split('/').pop();
		console.log(viewName);
		if(viewName === '' || viewName === 'dashboard') {
			sidenavList.$data.activeView = 'home';
			appContent.$data.currentView = 'home';
			return;
		}
		sidenavList.$data.activeView = viewName;
		appContent.$data.currentView = viewName;
	}

	getCurrentView();
}(window, Vue, moment, _));