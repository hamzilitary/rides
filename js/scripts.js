$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches"));

  if (height >= 52) {
    $('#above').show();
  } else {
    $('#shorter').show();
  }
});
