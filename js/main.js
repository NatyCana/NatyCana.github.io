/*
 |--------------------------------------------------------------------------
 | Resume event
 |--------------------------------------------------------------------------
 */
$(document).ready(function() {
	OverEffectEducation();
	OverEffectAcademicalProjects();
	OverEffectWorkHistory();
	OverEffectSkills();
	OverEffectLanguages();
});


/*
 |--------------------------------------------------------------------------
 | OverEffects
 |--------------------------------------------------------------------------
 */
function OverEffectEducation(){
	var education = document.getElementById("education");
	$( "#education").mouseover(function() {
		document.getElementById("img-education").style.display = "none";
		education.style.backgroundColor='#3a3a39';
		/*$("#education").append("<p id='text-skills'>soxkdsconsnconscoiasn</p>").addClass("text-skills");*/
		document.getElementById("education-text").style.display="initial";
	});

	$( "#education").mouseout(function() {
		/*$('#text-skills').remove();*/
		document.getElementById("education-text").style.display="none";
  		education.style.backgroundColor = '#f7f7f7';
   		document.getElementById("img-education").style.display = "initial";
	});
}

function OverEffectAcademicalProjects(){
	var academicalP = document.getElementById("academicalProjects");

	$("#academicalProjects").mouseover(function(){
		document.getElementById("img-academicalProjects").style.display="none";
		academicalP.style.backgroundColor='#3a3a39';
		document.getElementById("academicalProjects-text").style.display="initial";
	});

	$("#academicalProjects").mouseout(function(){
		/*$('#text-skills').remove();*/
		document.getElementById("academicalProjects-text").style.display="none";
  		academicalP.style.backgroundColor = '#f7f7f7';
   		document.getElementById("img-academicalProjects").style.display = "initial";
	});
}
function OverEffectWorkHistory(){
	var workH = document.getElementById("workHistory");

	$("#workHistory").mouseover(function(){
		document.getElementById("img-workHistory").style.display="none";
		workH.style.backgroundColor='#3a3a39';
		document.getElementById("workHistory-text").style.display="initial";
	});

	$("#workHistory").mouseout(function(){
		document.getElementById("workHistory-text").style.display="none";
  		workH.style.backgroundColor = '#f7f7f7';
   		document.getElementById("img-workHistory").style.display = "initial";
	});
}
function OverEffectSkills(){
	var skills = document.getElementById("skills");

	$("#skills").mouseover(function(){
		document.getElementById("img-skills").style.display="none";
		skills.style.backgroundColor='#3a3a39';
		document.getElementById("skills-text").style.display="initial";
	});

	$("#skills").mouseout(function(){
		document.getElementById("skills-text").style.display="none";
  		skills.style.backgroundColor = '#f7f7f7';
   		document.getElementById("img-skills").style.display = "initial";
	});
}
function OverEffectLanguages(){
	var languages = document.getElementById("languages");

	$("#languages").mouseover(function(){
		document.getElementById("img-languages").style.display="none";
		languages.style.backgroundColor='#3a3a39';
		document.getElementById("languages-text").style.display="initial";
	});

	$("#languages").mouseout(function(){
		document.getElementById("languages-text").style.display="none";
  		languages.style.backgroundColor = '#f7f7f7';
   		document.getElementById("img-languages").style.display = "initial";
	});
}

