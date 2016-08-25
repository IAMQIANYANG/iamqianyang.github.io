/**
 * Created by pandachain on 2016-08-24.
 */

$(window).scroll(function () {
  var position = $(this).scrollTop();

  $('.section').each(function() {
    var target = $(this).offset().top + 62;

    var id = $(this).attr('id');
    // $('.navigation a[href*=id]').removeClass('active');

    if (position >= target) {
      console.log(11);0
      $('.navigation a[href*=id]').addClass('active');

    }
  });

});