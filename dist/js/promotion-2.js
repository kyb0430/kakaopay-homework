$(function() {
  // page init
  $('body').addClass('init in');

  // scroll check
  (function() {
    var $window = $(window);

    $('.btn-close').on('click', 'a', function(e) {
      e.preventDefault();

      var href = $(this).attr('href');

      $('.init').addClass('out');

      setTimeout(function() {
        location.href = href;
      },50)
    });

    $('.scroll-check').addClass('ready');
  })();
});