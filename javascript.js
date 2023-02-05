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
  container.mousedown(function (e) {
    paint = true;
    ctx.beginPath();
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    ctx.moveTo(mouse.x, mouse.y);
  });

  // move the mouse while holding mouse key
  container.mousemove(function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    if (paint == true) {
      if (paint_erase == "paint") {
        // get color input
        ctx.strokeStyle = "red";
      } else {
        // white color
        ctx.strokeStyle = "white";
      }
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  });

  // mouse up => we are not painting erasing anymore
  container.mouseup(function () {
    paint = false;
  });

  // if we leave the container we are not painting erasing anymore
  container.mouseleave(function () {
    paint = false;
  });

  // click on the reset button
  $("#reset").click(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paint_erase = 'paint';
    $('#erase').removeClass('eraseMode');
  });

  // click on save button

  // click on the erase button
  $("#erase").click(function () {
    if (paint_erase == "paint") {
      paint_erase = "erase";
    } else {
      paint_erase = "paint";
    }
    $(this).toggleClass("eraseMode");
  });

  // change color input

  // change lineWidth using slider

  // functions
});
