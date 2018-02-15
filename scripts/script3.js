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


$('.button').on('click', function() {
  if ($(this).hasClass("active")){
    $(this).removeClass("active");
    $(this).children("img").css('padding-left', '0px');
    $(this).css('background-color', 'rgba(0,0,0,0)')

    $('.tresc').css('display', 'none');

  } else {
    $('.button').children("img").css('padding-left', '0px');
    $('.button').css('background-color', 'rgba(0,0,0,0)')
    $('.button').removeClass("active");

    $('.tresc').css('display', 'none');

    $(this).addClass("active");
    $(this).children("img").css('padding-left', '10px');
    $(this).css('background-color', '#CFCFB0');

    switch($(this).attr('id')) {
      case 'b1':
        $('#t1').css('display', 'block');
        break;
      case 'b2':
        $('#t2').css('display', 'block');
        break;
      case 'b3':
        $('#t3').css('display', 'block');
        break;
      case 'b4':
        $('#t4').css('display', 'block');
        break;
      case 'b5':
        $('#t5').css('display', 'block');
        break;
      case 'b6':
        $('#t6').css('display', 'block');
        break;
      case 'b7':
        $('#t7').css('display', 'block');
        break;
    }
  }
  return false;
});