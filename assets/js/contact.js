$.get("/Pratik-bairagi/assets/html/navigation.html", function(data){
    $("#navbar").replaceWith(data);
});

$.get("/Pratik-bairagi/assets/html/loader.html", function(data){
    $("#loading").replaceWith(data);
  });
  $(window).on('load', function(){
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  });
  function removeLoader(){
      $( ".loader-wrapper" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( ".loader-wrapper" ).remove(); //makes page more lightweight 
    });  
  }
