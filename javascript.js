$(function () {
  $("#slider").slider({
    min: 3,
    max: 30,
    slide: function (event, ui) {
      $("#circle").width(ui.value);
      $("#circle").height(ui.value);
    },
  });

  // declare variables
  // painting erasing or not
  var paint = false;

  // painting or erasing
  var paint_erase = "paint";

  // get the canvas and context
  var canvas = document.getElementById("paint");
  var ctx = canvas.getContext("2d");

  // get the canvas container
  var container = $("#container");

  // mouse position
  var mouse = { x: 0, y: 0 };

  // onload load saved work from local storage

  // set drawing parameters (lineWidth, lineJoin, lineCap)
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  // click inside container
  container.mousedown(function() {
      paint = true;
      window.alert(paint);
  });
  // move the mouse while holding mouse key

  // mouse up => we are not painting erasing anymore

  // if we leave the container we are not painting erasing anymore

  // click on the reset button

  // click on save button

  // click on the erase button

  // change color input

  // change lineWidth using slider

  // functions
});
