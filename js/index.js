 /* Scroll button appearing when I on scroll */
 $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
        $('.scroll-to-top').removeClass('no-display');
    } else {
        $('.scroll-to-top').addClass('no-display');
    }
  });

  /* Smooth Scrolling */
  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 500, function(){
              window.location.hash = hash;
          });
      }
    });
  });