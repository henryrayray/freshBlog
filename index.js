$(function() {
  // set positions

  // add event listeners
  $("li.about").hover(function() {
    var topPos = $('.about').position().top;
    $('.about-right-pane').show();
    $('.about-right-pane').css({
      top: topPos,
      position: 'absolute'
    });
    // $('.about-right-pane').addClass('animated fadeInDown');

    $('li.name-li').addClass('animated fadeInDown');
    $('li.name-li').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      console.log("finished")
    });
    //$('.bg-container').fadeIn("slow");
    // $('.bg-container').toggleClass('home-background');

  }, function() {
    $('.about-right-pane').hide();
    //$('.bg-container').fadeOut("slow");
    // $('.bg-container').toggleClass('home-background');
  });

  $("li.projects").hover(function() {
    var topPos = $('.projects').position().top;
    $('.projects-right-pane').show();
    $('.projects-right-pane').css({
      top: topPos,
      position: 'absolute'
    });
    $('.projects-right-pane').addClass('animated fadeInDown');

  }, function() {
    $('.projects-right-pane').hide();
  });
})