$(document).ready(function () {
    var title = $("#title");
    var width = title.width();
    title.mouseover(function () {
        title.fadeOut(500, function () {
            title.text('Welcome').css("color", "#F2784B").fadeIn(500);
        });
    });

    title.mouseleave(function () {
        title.fadeOut(500, function () {
            title.text("Qian's Portfolio").css("color", "black").fadeIn(500);
        });
    });

    $('#topNav').onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 800
    });

    $('#d1, #d2, #d3, #d4,#d5,#d6 ').contenthover({
        overlay_background: '#03C9A9',
        overlay_opacity: 0.8
    });

});

