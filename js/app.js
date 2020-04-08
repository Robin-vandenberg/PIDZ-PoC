// On window Load
$(()=>{
    console.log( "Document loaded" );
    
    $("#detailsToggler").click(function(){
        $(this).toggleClass("collapsed");
        $("#detail-row-0").toggleClass("collapse")
    });
})