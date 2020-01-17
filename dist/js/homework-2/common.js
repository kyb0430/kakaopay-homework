function scrollCheck() {
  var $window = $(window);
  var winHeight = $window.height();
  var scrollTop = $window.scrollTop();

  $('.scroll-check').each(function() {
    var $this = $(this);
    var ratio = 1 - (Number($this.data('ratio')) || 80) / 100;
    var isViewportIn = scrollTop > ($this.offset().top - winHeight) + (winHeight * ratio);
    $this.toggleClass('in', isViewportIn);
  });
}