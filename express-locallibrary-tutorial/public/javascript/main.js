$(document).ready(function () {
    $('input.typeahead').typeahead({
        name: 'authors',
        hints: true,
        remote: '/catalog/search?key=%QUERY',
        limit: 10
    });
});