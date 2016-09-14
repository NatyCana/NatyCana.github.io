$(document).ready(function() {

	$('body').scrollspy({ target: '#navbar-index' });
	
	LowScroll();

	/*SetUp Background*/
	setUpBGAboutMe();
    $(window).resize(setUpBGAboutMe);
    setUpBGSkills();
    $(window).resize(setUpBGSkills);
    setUpBGProject();
    $(window).resize(setUpBGProject);


	/*section detection*/
	$("#navbar-index").on("activate.bs.scrollspy", function(){
		var currentSection = $(".nav li.active > a").text();
        console.log("You are currently viewing: " + currentSection);

    })


	/*Education*/
	OverEffectEducationHEIG();
	OverEffectEducationSAMT();
	


	/*Project*/
    OverPrjOne();
    OverPrjTwo();
    OverPrjThree();
    OverPrjFour();


	/*Languages*/
  	OverItalianFlag();
	OverFrenchFlag();
	OverEnglishFlag();
	OverGermanFlag();





});

/*=========== BASIC FUNCTION ===========*/
function LowScroll(){
	
	$("#navbar-home a").on('click', function(event) {

    	// Prevent default anchor click behavior
    	event.preventDefault();

   		// Store hash
    	var hash = this.hash;

    	// Using jQuery's animate() method to add smooth page scroll
    	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    	$('html, body').animate({
      		scrollTop: $(hash).offset().top
    	}, 1000, function(){
   
      	// Add hash (#) to URL when done scrolling (default click behavior)
      	window.location.hash = hash;
    	});
    });

	$("#text-description a").on('click', function(event) {

    	event.preventDefault();

   		// Store hash
    	var hash = this.hash;

    	// Using jQuery's animate() method to add smooth page scroll
    	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    	$('html, body').animate({
      		scrollTop: $(hash).offset().top
    		}, 1000, function(){
   
				// Add hash (#) to URL when done scrolling (default click behavior)
      			window.location.hash = hash;
    		});
  	});
}

/*=========== SETUP BACKGROUND SECTION ===========*/
/*Height and Witdh BG AboutMe*/
var aboutMeImgWidth = 3783;
var aboutMeImgHeight = 2027;

/*Height and Witdh BG Skills*/
var skillsMeImgWidth = 3783;
var skillsMeImgHeight = 2027;

/*Height and Witdh BG Project*/
var projectMeImgWidth = 5451;
var projectMeImgHeight = 2921;


function setUpBGAboutMe() {
    var minHeight = 200;
    /*Windows Height*/
    var targetHeight = ($(window).height());
    if (targetHeight < minHeight) {
        targetHeight = minHeight;
    }
    /*Windows Width*/
    var targetWidth = $(window).width();
    var relativeWidth = targetHeight / (aboutMeImgHeight * aboutMeImgWidth); 
    
    /*------------------------CSS Style----------------------------------*/    
    $('#bg-aboutMe').css('height', targetHeight +'px');
    
    $('#bg-aboutMe').css('backgroundSize', 'auto 100%');

    if (relativeWidth < targetWidth) {
        $('#bg-aboutMe').css('backgroundSize', '100% auto');
    }    
}

function setUpBGSkills() {
    var minHeight = 200;
    /*Windows Height*/
    var targetHeight = ($(window).height());
    if (targetHeight < minHeight) {
        targetHeight = minHeight;
    }
    /*Windows Width*/
    var targetWidth = $(window).width();
    var relativeWidth = targetHeight / skillsMeImgHeight * skillsMeImgWidth; 
    
    /*------------------------CSS Style----------------------------------*/    
    $('#bg-skills').css('height', targetHeight +'px');
    
    $('#bg-skills').css('backgroundSize', 'auto 100%');

    if (relativeWidth < targetWidth) {
        $('#bg-skills').css('backgroundSize', '100% auto');
    }    
}
function setUpBGProject() {
    var minHeight = 200;
    /*Windows Height*/
    var targetHeight = ($(window).height());
    if (targetHeight < minHeight) {
        targetHeight = minHeight;
    }
    /*Windows Width*/
    var targetWidth = $(window).width();
    var relativeWidth = targetHeight / projectMeImgHeight * projectMeImgWidth; 
    
    /*------------------------CSS Style----------------------------------*/    
    $('#bg-project').css('height', targetHeight +'px');
    
    $('#bg-project').css('backgroundSize', 'auto 100%');

    if (relativeWidth < targetWidth) {
        $('#bg-project').css('backgroundSize', '100% auto');
    }    
}


/*=========== EDUCATION FUNCTION ===========*/
function OverEffectEducationHEIG(){
	$( "#education-HEIG").mouseover(function() {
		$("#education-text-heig").show();
	});

	$( "#education-HEIG").mouseout(function() {
		$("#education-text-heig").hide();
  		
	});
}
function OverEffectEducationSAMT(){
	$( "#education-SAMT").mouseover(function() {
		$("#education-text-samt").show();
	});
	$( "#education-SAMT").mouseout(function() {
		$("#education-text-samt").hide();
  		
	});
}

/*=========== SKILLS FUNCTION ===========*/
function SkillsLineEffects(){
	$("section").find("#skills").hover(function(){
		console.log("skills");
	})
	
}

/*=========== PROJECT FUNCTION ===========*/
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

/*=========== FLAG FUNCTION ===========*/
function OverItalianFlag(){
	$( "#italian-flag").mouseover(function() {
		$("#bw-flag-it").hide();
		$("#color-flag-it").show();
		$("#desc-it").show();
	});

	$( "#italian-flag").mouseout(function() {
		$("#bw-flag-it").show();
		$("#color-flag-it").hide();
		$("#desc-it").hide();
  		
	});

}
function OverFrenchFlag(){
	$( "#french-flag").mouseover(function() {
		$("#bw-flag-fr").hide();
		$("#color-flag-fr").show();
		$("#desc-fr").show();
	});

	$( "#french-flag").mouseout(function() {
		$("#bw-flag-fr").show();
		$("#color-flag-fr").hide();
		$("#desc-fr").hide();
  		
	});

}

function OverEnglishFlag(){
	$( "#english-flag").mouseover(function() {
		$("#bw-flag-en").hide();
		$("#color-flag-en").show();
		$("#desc-en").show();
	});

	$( "#english-flag").mouseout(function() {
		$("#bw-flag-en").show();
		$("#color-flag-en").hide();
		$("#desc-en").hide();
  		
	});

}
function OverGermanFlag(){
	$( "#german-flag").mouseover(function() {
		$("#bw-flag-de").hide();
		$("#color-flag-de").show();
		$("#desc-de").show();
	});

	$( "#german-flag").mouseout(function() {
		$("#bw-flag-de").show();
		$("#color-flag-de").hide();
		$("#desc-de").hide();
  		
	});

}