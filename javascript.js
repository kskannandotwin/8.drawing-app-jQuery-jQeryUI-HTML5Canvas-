$(function() {
    $('#slider').slider({
        min: 3,
        max: 30,
        slide: function(event, ui) {
            $('#circle').width(ui.value);
            $('#circle').height(ui.value);
        }
    });
});