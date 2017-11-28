$(document).ready(function(){

	$('.m-list ,.treding-item').on('click',function(event){
		var url = $(event.currentTarget).data('src');
		console.log(url);
		window.location.href = url;
	})

	$('#anonymous-comment').on('click',function(event){
		$('#login').modal('show');
	})
	$('.login-signup-modal').on('click',function(event){
		$('#login').modal('hide');
		$('#signup').modal('show');
	})
	
	$('.signup-login-modal').on('click',function(event){
		$('#signup').modal('hide');
		$('#login').modal('show');
	})

})