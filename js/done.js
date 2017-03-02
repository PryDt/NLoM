
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(function(){
	$("label").css("text-color", "red");
	var c = getUrlParameter("c");
	var grade = 0; // really...

	grade = (parseInt(c) / 12) * 100;
	$("#txt").text("You got a " + grade + "!!!");
});
