$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 900);
  });

});

$("#a, .nav a").click(function() {
  if ($("#btnCollapse").css('display') != 'none')
    $("#btnCollapse").click();
});