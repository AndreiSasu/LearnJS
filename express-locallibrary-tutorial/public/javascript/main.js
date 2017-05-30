$(document).ready(function () {
    $('input.typeahead').typeahead({
        name: 'countries',
        remote: '/search?key=%QUERY',
        limit: 10
    });
});