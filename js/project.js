$(document).ready(function() {
	OverPrjOne();
	OverPrjTwo();
	OverPrjThree();
	OverPrjFour();


});

function OverPrjOne(){
	$( "#prj-one").mouseover(function() {
		$("#img-prj-one").hide();
		$("#more-prj-one").show();
	});

	$( "#prj-one").mouseout(function() {
		$("#img-prj-one").show();
		$("#more-prj-one").hide();
  		
	});

}
function OverPrjTwo(){
	$( "#prj-two").mouseover(function() {
		$("#img-prj-two").hide();
		$("#more-prj-two").show();
	});

	$( "#prj-two").mouseout(function() {
		$("#img-prj-two").show();
		$("#more-prj-two").hide();
  		
	});

}
function OverPrjThree(){
	$( "#prj-three").mouseover(function() {
		$("#img-prj-three").hide();
		$("#more-prj-three").show();
	});

	$( "#prj-three").mouseout(function() {
		$("#img-prj-three").show();
		$("#more-prj-three").hide();
  		
	});

}
function OverPrjFour(){
	$( "#prj-four").mouseover(function() {
		$("#img-prj-four").hide();
		$("#more-prj-four").show();
	});

	$( "#prj-four").mouseout(function() {
		$("#img-prj-four").show();
		$("#more-prj-four").hide();
  		
	});

}