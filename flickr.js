$( document ).ready(function() {
  $("#clear").click(function(){
      $( "#images" ).empty();
  })
  $("#but").click(function(){
     tag=$(" input").val()
     var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
      tags: tag,
      tagmode: "any",
      format: "json"
    })
  .done(function( data ) {
    $.each( data.items, function( i, item ) {
      $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
    });
  });
  });
});
