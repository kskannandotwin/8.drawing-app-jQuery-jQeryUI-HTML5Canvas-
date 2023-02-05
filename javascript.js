$(function() {
    $('#slider').slider({
        min: 3,
        max: 30,
        slide: function(event, ui) {
            $('#circle').width(ui.value);
            $('#circle').height(ui.value);
        }
    });

    // declare variables
        // painting erasing or not
        // painting or erasing
        // get the canvas and context
        // get the canvas container
        // mouse position

    // onload load saved work from local storage

    // set drawing parameters (lineWidth, lineJoin, lineCap)

    // click inside container

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