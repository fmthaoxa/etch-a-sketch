function drawCanvas(grid) {
  var pixel = $("<div class='pixel' style='background:red'></div>");
  var pixelHeight = $('#canvas').height() / grid;
  var pixelWidth = $('#canvas').width() / grid;
  pixel.height(pixelHeight);
  pixel.width(pixelWidth);

  for (var i=0; i<grid; i++) {
      $('#canvas').append(pixel.clone());
  }
}


$(document).ready(function() {
  $('#reset').on('click', function() {
      $('#canvas').empty()
      var num = parseInt(prompt("Enter a number"));
      drawCanvas(num)
    });












});
