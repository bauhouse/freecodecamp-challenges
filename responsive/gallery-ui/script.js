var main = function() {

  $('.menu-button').click(function() {
    $('.menu').animate({left: 0}, 200);
    $('body').animate({marginLeft: '320px'}, 250).addClass('open');
    $('.menu-button').click(false);
  });
  $('.close-button').click(function() {
    $('.menu').animate({left: '-320px'}, 200);
    $('body').animate({marginLeft: 0}, 200).removeClass('open');
  });

  $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );

};

$(document).ready(main);
