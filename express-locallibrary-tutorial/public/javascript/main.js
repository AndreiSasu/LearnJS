$(document).ready(function () {
    $('input.typeahead').typeahead({
        name: 'authors',
        remote: '/catalog/search?key=%QUERY',
        limit: 10
    });
});