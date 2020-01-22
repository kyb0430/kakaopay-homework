$(function() {
  var $window = $(window);
  var $body = $('body');
  var currentTop = 0;

  // page init
  $body.addClass('init');

    $window.on('scroll', function() {
      var scrollTop = $window.scrollTop();
      var gap = scrollTop - currentTop;

      console.log(scrollTop >= 0)
      if(gap > 0 && scrollTop >= 0) {
        $body.addClass('scroll-down');
      } else {
        $body.removeClass('scroll-down');
      }

      currentTop = scrollTop;
    });
});