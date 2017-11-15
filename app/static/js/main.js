$(document).ready(function(){

	$('.m-list ,.treding-item').on('click',function(event){
		var url = $(event.currentTarget).data('src');
		console.log(url);
		window.location.href = url;
	})

})