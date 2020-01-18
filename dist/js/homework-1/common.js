function scrollCheck() {
  var $window = $(window);
  var winHeight = $window.height();
  var scrollTop = $window.scrollTop();

  $('.scroll-check').each(function() {
    var $this = $(this);
    var ratio = 1 - (Number($this.data('ratio')) || 85) / 100;
    var isViewportIn = scrollTop > ($this.offset().top - winHeight) + (winHeight * ratio);

    $this.toggleClass('in', isViewportIn);
  });
}

function scrollMove() {
  var $window = $(window);
  var winHeight = $window.height();
  var scrollTop = $window.scrollTop();
  var ratio1 = -(winHeight * 0.1282 / winHeight * scrollTop);
  var ratio2 = -(winHeight * 0.1602 / winHeight * scrollTop);
  
  $('.scroll-move-1').css('margin-top', ratio1);
  $('.scroll-move-2').css('margin-top', ratio2);
}


$(function() {
  // page init
  
  window.setTimeout(function() {
    $('.page-loading').hide();
    $('body').addClass('init');
  }, 1500);

  // scroll check
  (function() {
    var $window = $(window);

    $('.scroll-check').addClass('ready');
    $window.on('load resize scroll', scrollCheck);
    $window.on('load resize scroll', scrollMove);
    scrollCheck();
    scrollMove();
  })();
});