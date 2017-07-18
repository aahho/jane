class Twitter():

	def getTweets():
		tweets = api.search("FA Cup")
		return tweets

	def resizeimg(avatar):
		new_link = avatar.replace("_normal", "")
		return new_link
