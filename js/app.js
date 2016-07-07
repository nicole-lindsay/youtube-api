$(function(){
	$("#video-search").submit(function(event) {
		event.preventDefault();
		var userInput = $("#troll").val();
		getResults(userInput);
		$("#troll").val("");
		$("#thumbnails").empty();
	});
});

function getResults(userInput) {
	var params = {
		part: 'snippet',
		key: 'AIzaSyBDDTlpeiQKDwX45GvGOg9GQ9v2ynzXugw',
		q: userInput,
		type: 'video'
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		showResults(data);
	});
};

function showResults(results) {
	var fillEmptyDiv = "";
    $.each(results, function(index, value) {
        console.log(value);
        fillEmptyDiv += "<li>"
        fillEmptyDiv += "<p>" + /*snippet-->title*/ + "</p>";
        fillEmptyDiv += "<a href='https://www.youtube.com/watch?v=" + /*id-->videoId*/ + "' target='_blank'>";
        fillEmptyDiv += "<img src='" + /*snippet-->thumbnails-->medium-->url*/ + "'/>";
        fillEmptyDiv += "</a>"
        fillEmptyDiv += "</li>"
    });

    $("#thumbnails ul").append(fillEmptyDiv);
};
