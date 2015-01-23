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
    $('li.name-li').addClass('animated fadeInDown');

  }, function() {
    $('.about-right-pane').hide();
  });

  var serialAnimation = function(boxes, initLength) {
    if (boxes) {
      var $box = $(boxes.shift());
      $box.show();
      $box.addClass('animated fadeInRight');
      $box.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        serialAnimation(boxes);
      });
    }
  }

  $("li.projects").hover(function() {
    var topPos = $('.projects').position().top;
    $('.projects-right-pane').show();
    $('.projects-right-pane').css({
      top: topPos,
      position: 'absolute'
    });

    $('.proj-title').addClass('animated fadeInDown');
    $('.proj-title').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      var boxes = $('.proj-box').toArray();
      serialAnimation(boxes, boxes.length);
    });

  }, function() {
    $('.projects-right-pane').hide();
  });

  $("li.blog").hover(function() {
    var topPos = $('.blog').position().top;
    $('.blog-right-pane').show();
    $('.blog-right-pane').css({
      top: topPos,
      position: 'absolute'
    });
    $('.blog-title').addClass('animated fadeInDown');
    $('.blog-title').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('.blog-writing-effect').show();
    });
  }, function() {
    $('.blog-right-pane').hide();
  })
})