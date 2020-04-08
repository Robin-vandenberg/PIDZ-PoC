// On window Load
$(()=>{
    console.log( "Document loaded" );

    // Init datepicker
    $( "#form_searches_0_daterange" ).datepicker();

    //Init detail modal
    $("#detailsToggler").click(function(){
        $(this).toggleClass("collapsed");
        $("#detail-row-0").toggleClass("collapse")
    });
})