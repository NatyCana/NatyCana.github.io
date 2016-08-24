/*
 |--------------------------------------------------------------------------
 | Evenement sur le resume
 |--------------------------------------------------------------------------
 X*/
$(document).ready(function() {
	var education = document.getElementById("education");
	/*education.addEventListener("mouseover", mouseOver);
	education.addEventListener("mouseout", mouseOut);

	function mouseOver() {
		document.getElementById("img-education").style.display = "none";
		education.style.backgroundColor='#000';
		var textEducation =$("<p></p>").text("Text.");
		$("#education div").append("<p>Test</p>");

	}

	function mouseOut() {
   		education.style.backgroundColor = '#f7f7f7';
   		document.getElementById("img-education").style.display = "initial";
	}
*/
	$( "#education" ).mouseenter(function() {
		document.getElementById("img-education").style.display = "none";
		education.style.backgroundColor='#000';
		$("#education").append("<p id='education-text'>Handler for .mouseover() called.</p>").addClass("education-text");
	});

	$( "#education" ).mouseout(function() {
		$('#education-text').remove();
  		education.style.backgroundColor = '#f7f7f7';
   		document.getElementById("img-education").style.display = "initial";
	});


});
