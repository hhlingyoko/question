(function () {
  var $debounceClick = $('.js-debounce-click');
  $debounceClick.on('click', function () {
    if($debounceClick.hasClass('clicked')) {
      $debounceClick.removeClass('clicked')
    }else{
      $debounceClick.addClass('clicked')
    }
  })
  // 简单防抖 & 带有立即执行的 防抖
  function debounce () {
    
  }
})($)