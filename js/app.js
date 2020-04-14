// On window Load
$(()=>{
    console.log( "Document loaded" );

	$( function() {
		$( "#form_searches_0_type" ).selectmenu();
		$( "#form_searches_0_department" ).selectmenu();
		$( "#form_searches_0_functie" ).selectmenu();
	} );
	
	$( "#form_searches_0_functie" ).on( "selectmenuchange", function( event, ui ) {callNudge();} );
	
    // Init datepicker
    $( "#form_searches_0_daterange" ).datepicker();

    //Init detail modal
    $("#detailsToggler").click(function(){
        $(this).toggleClass("collapsed");
        $("#detail-row-0").toggleClass("collapse")
    });
})