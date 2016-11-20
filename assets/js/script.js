$(document).ready(function() {
  $('.tile').children().filter('.tile-overlay').css('display','none');

  $('.tile').hover(function() {
    var id = $(this).attr('id').slice(0,2);
    var overlay_id = '#' + id + '-overlay';
    var img_id = '#' + id + '-img';
    $(overlay_id).stop(true,true).delay(50).fadeIn(250);
    $(img_id).stop(true,true).delay(50).fadeTo(250, .25);
  }, function() {
    $('.tile-overlay').slice().stop(true,true).delay(50).fadeOut(250);
    $('.tile-img').stop(true,true).delay(50).fadeTo(250, 1);
  });

  $('.tile').click(function() {
    var id = $(this).attr('id').slice(0,2);
    var modal_id = '#' + id + '-modal';

    $('#master-overlay').show();
    $(modal_id).show();
    $('body').addClass('no-scroll');
  });

  $('#master-overlay').click(function() {
    $(this).hide();
    $('.modal-overlay').hide();
    $('body').removeClass('no-scroll');
  });

  $('.close').click(function() {
    $('#master-overlay').hide();
    $('.modal-overlay').hide();
    $('body').removeClass('no-scroll');
  });
});