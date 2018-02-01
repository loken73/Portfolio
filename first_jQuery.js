$(document).ready(function(){

    var $winHeight = window.innerHeight;

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, function(){
   
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

      }

    });

  $(window).scroll(function(){

      if ($('html, body').scrollTop() <= $winHeight - 110){
          $('.navbar-default.navbar-fixed-top').css("background-color", "transparent");
      }

      if ($('html, body').scrollTop() >= $winHeight - 110)
      {
          $('.navbar-default.navbar-fixed-top').css("background-color", "#CBE5E5");
      }


  });

  $('.container ul li a').css('color', 'white');

  $('.container ul li a:hover, .container ul li:hover').css({
      color: '#868686'
  });

});