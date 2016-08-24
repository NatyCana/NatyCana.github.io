/*
 |--------------------------------------------------------------------------
 | Resume event
 |--------------------------------------------------------------------------
 */
$(document).ready(function() {
	OverEffectEducation();
	OverEffectMyProjects();
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
		education.style.opacity = "0.8";
		/*$("#education").append("<p id='text-skills'>soxkdsconsnconscoiasn</p>").addClass("text-skills");*/
		document.getElementById("education-text").style.display="initial";
	});

	$( "#education").mouseout(function() {
		/*$('#text-skills').remove();*/
		document.getElementById("education-text").style.display="none";
  		education.style.backgroundColor = '#f7f7f7';
  		education.style.opacity = "1";
   		document.getElementById("img-education").style.display = "initial";
	});
}

function OverEffectMyProjects(){
	var myProjects = document.getElementById("myProjects");

	$("#myProjects").mouseover(function(){
		document.getElementById("img-myProjects").style.display="none";
		myProjects.style.backgroundColor='#3a3a39';
		document.getElementById("myProjects-text").style.display="initial";
	});

	$("#myProjects").mouseout(function(){
		/*$('#text-skills').remove();*/
		document.getElementById("myProjects-text").style.display="none";
  		myProjects.style.backgroundColor = '#f7f7f7';
   		document.getElementById("img-myProjects").style.display = "initial";
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

