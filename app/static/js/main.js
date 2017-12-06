$(document).ready(function() {
	// click on left side nav to go profile page of company  
    $('.m-list ,.treding-item').on('click', function(event) {
        var url = $(event.currentTarget).data('src');
        console.log(url);
        window.location.href = url;
    })

    // open login modal when anonymous user try to comment
    $('#anonymous-comment').on('click', function(event) {
        $('#login').modal('show');
    })

    // Open signup modal when user dont have account
    $('.login-signup-modal').on('click', function(event) {
        $('#login').modal('hide');
        $('#signup').modal('show');
    })

    //open login modal when user has already account
    $('.signup-login-modal').on('click', function(event) {
        $('#signup').modal('hide');
        $('#login').modal('show');
    })

    //when user select a company then redirect to profile page

	$('#demo-input').bind('typeahead:selected', function(obj, datum, name) {      
        if(datum.code){
        	window.location.href = '/companies/'+ datum.code + '/'+datum.name;
        }

	});


	// twitter typeahead integration and filtering
    var engine = new Bloodhound({
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        datumTokenizer: function(d){
        	var codeTokenizer = Bloodhound.tokenizers.obj.whitespace(d.code);
        	var nameTokenizer = Bloodhound.tokenizers.obj.whitespace(d.name);
        	return  codeTokenizer.concat(nameTokenizer);

        },
        remote: {
            url: '/api/v1/companies/filter?q=%QUERY',
            wildcard: '%QUERY'
        }
    });

    function engineWithDefaults(q, sync,async) {
            engine.search(q,sync, async);
    }

    engine.initialize();

    $('#demo-input').typeahead({
            menu: $('.Typeahead-menu'),
            minLength: 1,
            classNames: {
                open: 'is-open',
                empty: 'is-empty',
                cursor: 'is-active',
                selectable: 'Typeahead-selectable'
            }
        }, {
            source: engineWithDefaults,
            displayKey: 'code',
            limit : 10,
            templates: {
                suggestion: function(data){
                	
                	return '<a class=\"option-wrapper\" href=\"/companies/'+ data.code + '/'+ data.name +'\">'
                	+'<p class=\"option-content-wraper\">'
                	+ '<span class=\"fw-500 pr-1\">'+ data.code +'</span>'
                	+'<span class="pl-1">'+ data.name +'</span> <p></a>'
                },
                empty: '<p> No result Found</p>'
            }
        })



})


function openLoginModal(e) {
    $('#login').modal('show');
    e.stopPropagation();
    return false;
}