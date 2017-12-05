$(document).ready(function() {

    $('.m-list ,.treding-item').on('click', function(event) {
        var url = $(event.currentTarget).data('src');
        console.log(url);
        window.location.href = url;
    })

    $('#anonymous-comment').on('click', function(event) {
        $('#login').modal('show');
    })
    $('.login-signup-modal').on('click', function(event) {
        $('#login').modal('hide');
        $('#signup').modal('show');
    })

    $('.signup-login-modal').on('click', function(event) {
        $('#signup').modal('hide');
        $('#login').modal('show');
    })

    // var bestPictures = new Bloodhound({
    //    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    //    queryTokenizer: Bloodhound.tokenizers.whitespace,
    //    prefetch: '../data/films/post_1960.json',
    //    remote: {
    //      url: '../data/films/queries/%QUERY.json',
    //      wildcard: '%QUERY'
    //    }
    //  });

    // $('.typeahead').typeahead(null, {
    //     name: 'best-pictures',
    //     display: 'value',
    //     source: function(query, process) {
    //         var url = '/api/v1/companies/filter?q=' + query;
    //         return $.ajax({
    //             url: url,
    //             type: 'GET',
    //             dataType: 'json',
    //             success: function(response) {
    //                 console.log("data", response);
    //                 return process(response.data);
    //             }
    //         });
    //     },
    //     templates: {
    //         empty: [
    //             '<div class="empty-message">',
    //             'No result Found',
    //             '</div>'
    //         ].join('\n'),
    //         suggestion: function(data) {
    //             console.log(data);
    //             return Handlebars.compile('<a href=\"/companies/' + data.code + "/" + data.name + '\"><p><strong>' + data.code + '</strong> - (' + data.name + ')</p></a>');
    //         }
    //     }
    // });

    var template = Handlebars.compile($("#result-template").html());
    var empty = Handlebars.compile($("#empty-template").html());

    var engine = new Bloodhound({
        //identify: function(o) { return o.id_str; },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name', 'code'),
        //dupDetector: function(a, b) { return a.id_str === b.id_str; },
        //prefetch: remoteHost + '/demo/prefetch',
        remote: {
            url: '/api/v1/companies/filter?q=%QUERY',
            wildcard: '%QUERY'
        }
    });

    function engineWithDefaults(q, sync, async) {
        if (q === '') {
            //sync(engine.get('1090217586', '58502284', '10273252', '24477185'));
            async([]);
        } else {
            engine.search(q, sync, async);
        }
    }

    $('#demo-input').typeahead({
            hint: $('.Typeahead-hint'),
            menu: $('.Typeahead-menu'),
            minLength: 1,
            classNames: {
                open: 'is-open',
                empty: 'is-empty',
                cursor: 'is-active',
                suggestion: 'Typeahead-suggestion',
                selectable: 'Typeahead-selectable'
            }
        }, {
            source: engineWithDefaults,
            displayKey: 'screen_name',
            templates: {
                suggestion: template,
                empty: empty
            }
        })

})

function openLoginModal(e) {
    $('#login').modal('show');
    e.stopPropagation();
    return false;
}