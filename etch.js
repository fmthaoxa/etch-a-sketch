function drawCanvas(grid) {

  var pixel = $("<div id='pixel'></div>");
  var pixelHeight = (Math.floor((600 / grid)*100))/100;
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

    $(document).on("mouseover", "#pixel", function() {
      if ($('#black').is(':checked')===true) {
        $(this).css({"background-color":'black','opacity':1})
      }
      else if ($('#eraser').is(':checked')===true) {
        $(this).css({"background-color":'white','opacity':0})
      }
      else if ($('#rainbow').is(':checked')===true) {
        var r = Math.floor(Math.random() * 255 + 1);
        var g = Math.floor(Math.random() * 255 + 1);
        var b = Math.floor(Math.random() * 255 + 1);
        var randomColor = "rgb(" + r + "," + g + "," + b +")";
        $(this).css({"background-color":randomColor,'opacity':1})
      }
      else if ($('#pencil').is(':checked')===true) {
        var opacity = parseFloat($(this).css('opacity'));
					if (opacity === 0)
					{
						$(this).css({
							'opacity': 0.1,
							'background-color': 'black'
						});
					}
					else
					{
						opacity += 0.1;
						$(this).css({'opacity': opacity});
					}

      }
    });










});
