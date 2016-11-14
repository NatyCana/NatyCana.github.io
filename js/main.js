var window_height;

$(document).ready(function() {
    LowScroll();
    window_height = $(window).height();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    EffectsProfileSection();


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
    $("nav a").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
    });
    $("footer a").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
    });

}



function EffectsProfileSection(){
    $("#profile").hover(function(){
        console.log("profile");
        $( ".animation-profile" ).addClass( "animated pulse" );
    })
    $("#profile").mouseleave(function(){
        console.log("out");
        $( ".animation-profile" ).removeClass( "animated pulse" );
    })
}
 