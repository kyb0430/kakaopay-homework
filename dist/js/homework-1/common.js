function scrollCheck() {
  var $window = $(window);
  var winHeight = $window.height();
  var scrollTop = $window.scrollTop();

  $('.scroll-check').each(function() {
    var $this = $(this);
    var ratio = 1 - (Number($this.data('ratio')) || 70) / 100;
    var isViewportIn = scrollTop > ($this.offset().top - winHeight) + (winHeight * ratio);

    $this.toggleClass('in', isViewportIn);
  });
}

$(function() {
  // page init
  $('body').addClass('init');

  // scroll check
  (function() {
    var $window = $(window);

    $('.scroll-check').addClass('ready');
    $window.on('load resize scroll', scrollCheck);
    scrollCheck();
  })();
});