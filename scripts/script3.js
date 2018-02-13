var $menu = $('#sidebar');
  $('#menu-button').on('click', function() {
    if ($(this).hasClass('active')) {
      $menu.css('right','-320px');
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
      $menu.css('right','0');
    }
    return false;
  });