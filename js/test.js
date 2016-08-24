
$(document).ready(function() {
	$( "p" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

	$( "#title-description" ).mouseover(function() {
  $( "#title-description" ).append( "<div>Handler for .mouseover() called.</div>" );
});
});