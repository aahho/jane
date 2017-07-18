(function (window, Vue, moment) {

	var ELEMENTS = {
		sidenav: '#sidenavList',
		tweets: '#tweetslist',
		feeds: '#feedslist',
		appContent: '#appContent'
	};

	var viewSelectedComponent = {};

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
				{
					id: 'tweets',
					title: 'Mentions',
					className: 'ti-tag',
					subitems: [
						{
							id: 'hashapple',
							title: '#apple',
							className: 'ti-tag'
						},
						{
							id: 'hasmakeinindia',
							title: '#makeinindia',
							className: 'ti-tag'
						},
						{
							id: 'hashpolitics',
							title: '#politics',
							className: 'ti-tag'
						},
						{
							id: 'hashsummer',
							title: '#summer',
							className: 'ti-tag'
						},
						{
							id: 'hashfml',
							title: '#fml',
							className: 'ti-tag'
						}
					]
				}
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
					default: appContent.$data.currentView = 'empty';
				}

			}
		}
	});

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
				  	feeds: [
						{ 
							id: '1',
							title: 'Feed #1',
							summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet sapien ut fermentum tincidunt. Donec venenatis nisl pretium risus aliquet, vulputate molestie ipsum pharetra. Sed lobortis sem mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras id laoreet nulla. Etiam molestie sapien non porta interdum. Praesent ornare lacinia hendrerit.",
							timestamp: moment().fromNow()
						},
						{ 
							id: '2',
							title: 'Feed #2',
							summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet sapien ut fermentum tincidunt. Donec venenatis nisl pretium risus aliquet, vulputate molestie ipsum pharetra. Sed lobortis sem mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras id laoreet nulla. Etiam molestie sapien non porta interdum. Praesent ornare lacinia hendrerit.",
							timestamp: moment().fromNow()
						},
						{ 
							id: '3',
							title: 'Feed #3',
							summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet sapien ut fermentum tincidunt. Donec venenatis nisl pretium risus aliquet, vulputate molestie ipsum pharetra. Sed lobortis sem mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras id laoreet nulla. Etiam molestie sapien non porta interdum. Praesent ornare lacinia hendrerit.",
							timestamp: moment().fromNow()
						}
					]
				  }
				}
			},
			tweetslist: {
			  template: ELEMENTS.tweets,
			  delimiters: ["[[", "]]"],
			  data: function () {
			  	return {
				    tweets: [
				      { 
				      	handle: '@LucasMajzlan',
				      	tweet: "I'm looking forward to day when I finally understand how Airdrop on Mac really works.... 🤔#Apple",
				      	timestamp: moment().fromNow()
				      }
				    ]
				}
			  }
			},
			empty: {
				template: '<h1>Nothing here</h1>'
			}
		}
	});
}(window, Vue, moment));