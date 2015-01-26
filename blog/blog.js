$(function() {
  var loc = window.location;
  var category = loc.pathname.split("/")[1];
  var possible_categories = ["general", "ideas", "development"];
  for (var i=0; i<possible_categories.length; i++) {
    var p_c = possible_categories[i];
    if (category == p_c) {
      $('li.'+p_c).addClass("active");
    }
  }
})

// used in /_layouts/post.html