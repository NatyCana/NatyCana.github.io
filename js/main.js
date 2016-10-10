$(document).ready(function() {
    LowScroll();
    setUpWidthSection();
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
    
    $("#home a").on('click', function(event) {

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

}

function setUpWidthSection() {

    /*Windows Height*/
    var targetHeight = ($(window).height());
    
    /*Windows Width*/
    var targetWidth = $(window).width();
    
    /*------------------------CSS Style----------------------------------*/    
    
    
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