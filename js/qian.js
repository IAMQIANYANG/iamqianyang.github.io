$(document).ready(function () {
    var title = $("#title");
    var width = title.width();
    title.mouseover(function () {
        title.fadeOut(500, function () {
            title.text('Welcome').css("color","red").fadeIn(500);
        });
    });

    title.mouseleave(function(){
        title.fadeOut(500, function() {
            title.text("Qian's Portfolio").css("color","black").fadeIn(500);
        });
    })
});