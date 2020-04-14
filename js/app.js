// On window Load
$(()=>{
    console.log( "Document loaded" );
   
    document.getElementById("form_searches_0_functie").addEventListener("change", callNudge);
	
    // Init datepicker
    $( "#form_searches_0_daterange").datepicker();
    $( "#form_searches_1_daterange").datepicker();

    //Init detail modal
    $("#detailsToggler").click(function(){
        $(this).toggleClass("collapsed");
        $("#detail-row-0").toggleClass("collapse")
    });

    //Init Nudge modal
    $( "#dialog-message" ).dialog({
        autoOpen: false,
        modal: false,
        position: { my: "left top", at: "left bottom", of: '#nudgeDiv' },
        resizable: false,
        draggable: false,
        closeOnEscape: true,
        buttons: {
          Nee: function() {
            $( this ).dialog( "close" );
          },
          Ja: function() {
            $( this ).dialog( "close" );
            setPublicationDate();
          }
        }
      });
})
