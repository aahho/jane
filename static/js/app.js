(function (window, Vue, moment) {

	var ELEMENTS = {
		sidenav: '#sidenavList',
		tweets: '#tweets',
		feeds: '#feeds'
	};

	var sidenavList = new Vue({
		el: ELEMENTS.sidenav,
		delimiters: ["[[", "]]"],
		data: {
			items: [
				{
					id: 'feed',
					title: 'News Feed',
					active: true,
					className: 'ti-rss-alt',
					subitems: null
				},
				{
					id: 'dataAggr',
					title: 'Data Aggregation',
					active: false,
					className: 'ti-menu-alt',
					subitems: [
						{
							title: 'Social Signals',
							active: false,
							className: 'ti-flickr'
						},
						{
							title: 'Manage Aggr',
							active: false,
							className: 'ti-hummer'
						}
					]
				},
				{
					id: 'mentions',
					title: 'Mentions',
					active: false,
					className: 'ti-tag',
					subitems: [
						{
							title: '#apple',
							active: false,
							className: 'ti-tag'
						},
						{
							title: '#makeinindia',
							active: false,
							className: 'ti-tag'
						},
						{
							title: '#politics',
							active: false,
							className: 'ti-tag'
						},
						{
							title: '#summer',
							active: false,
							className: 'ti-tag'
						},
						{
							title: '#fml',
							active: false,
							className: 'ti-tag'
						}
					]
				}
			]
		},
		methods: {
			setActive: function (item) {
				switch(item.id) {
					case 'feeds':
						feeds.$data.active = true;
						tweets.$data.active = false;
					break;
					case 'dataAggr':
					break;
					case 'mentions':
						tweets.$data.active = true;
						feeds.$data.active = false;
					break;
				}
			}
		}
	});

	var tweets = new Vue({
	  el: ELEMENTS.tweets,
	  delimiters: ["[[", "]]"],
	  data: {
	  	active: false,
	    tweets: [
	      { 
	      	handle: '@LucasMajzlan',
	      	tweet: "I'm looking forward to day when I finally understand how Airdrop on Mac really works.... 🤔#Apple",
	      	timestamp: moment().fromNow()
	      }
	    ]
	  }
	});

	var feeds = new Vue({
	  el: ELEMENTS.feeds,
	  delimiters: ["[[", "]]"],
	  data: {
	  	active: true,
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
	});
}(window, Vue, moment));