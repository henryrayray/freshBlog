$(function() {
  // add event listeners

  $('.proj-box').hover(function() {
    var linkText = this.children[0].attributes.href.value.toUpperCase();
    $('.page-title').append($("<span class='link-text'>/"+linkText+"</span>").hide().fadeIn(500));
  }, function() {
    $('.page-title').text("PROJECTS");
  });

});