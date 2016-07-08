$(function() {
    $("#video-search").submit(function(event) {
        event.preventDefault();
        var userInput = $("#troll").val();
        getResults(userInput);
        $("#troll").val("");
        $("#thumbnails ul").empty();
    });

    $(".fancybox").fancybox();
});

function getResults(userInput) {
    var params = {
        part: 'snippet',
        key: 'AIzaSyBDDTlpeiQKDwX45GvGOg9GQ9v2ynzXugw',
        q: userInput,
        type: 'video'
    };
    url = 'https://www.googleapis.com/youtube/v3/search';

    $.getJSON(url, params, function(data) {
        showResults(data.items);
    });
};

function showResults(results) {
    var fillEmptyDiv = "";
    $.each(results, function(index, value) {
        console.log(value);
        fillEmptyDiv += "<li>"
        fillEmptyDiv += "<p>" + value.snippet.title + "</p>";
        fillEmptyDiv += "<a class='fancybox.iframe' rel='group' href='http://www.youtube.com/embed/" + value.id.videoId + "'>";
        fillEmptyDiv += "<img src='" + value.snippet.thumbnails.medium.url + "'/>";
        fillEmptyDiv += "</a>"
        fillEmptyDiv += "</li>"
    });

    $("#thumbnails ul").append(fillEmptyDiv);
};