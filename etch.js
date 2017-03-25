function drawCanvas(grid) {

  var pixel = $("<div id='pixel'></div>");
  var pixelHeight = (Math.floor((430 / grid)*100))/100;
  var pixelWidth = (Math.floor((600 / grid)*100))/100;
  pixel.height(pixelHeight);
  pixel.width(pixelWidth);




  for (var i= (grid**2); i>0; i--) {
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
