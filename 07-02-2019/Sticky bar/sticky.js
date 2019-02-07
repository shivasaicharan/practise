window.onscroll = function() {sticky()};

var bar = document.getElementById("content");
var num = bar.offsetTop;

function sticky() {
  if (window.pageYOffset >= num) {
    $("#content").addClass("fix");
  } else {
    $("#content").removeClass("fix");
  }
}