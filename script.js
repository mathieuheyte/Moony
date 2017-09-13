// Scrollspy fluide
$(function () {
    $('header a').on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1500, function(){
        window.location.hash = hash;
      });
    });
  });

  