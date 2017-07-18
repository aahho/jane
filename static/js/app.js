(function (window, Vue, moment) {
	var tweets = new Vue({
	  el: '#tweets',
	  delimiters: ["[[", "]]"],
	  data: {
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
	  el: '#feeds',
	  delimiters: ["[[", "]]"],
	  data: {
	    tweets: [
	      { 
	      	title: 'Feed #1',
	      	summary: "I'm looking forward to day when I finally understand how Airdrop on Mac really works.... 🤔#Apple",
	      	timestamp: moment().fromNow()
	      }
	    ]
	  }
	});
}(window, Vue, moment));