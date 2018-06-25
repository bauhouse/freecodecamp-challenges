var main = function() {
  $('.menu-button').click(function() {
    $('.menu').animate({left:'0px'}, 200);
    $('body').animate({left:'320px'}, 250).addClass('open');
    $('.menu-button').click(false);
  });
  $('.close-button').click(function() {
    $('.menu').animate({left:'-320px'}, 200);
    $('body').animate({left:'0px'}, 200).removeClass('open');
  });
};

$(document).ready(main);
