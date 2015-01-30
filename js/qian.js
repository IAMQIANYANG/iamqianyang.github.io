$(document).ready(function () {
    var title = $("#title");
    var width = title.width();
    title.mouseover(function () {
        title.fadeOut(500, function () {
            title.text('Welcome').css("color", "#EC407A").fadeIn(500);
        });
    });

    title.mouseleave(function () {
        title.fadeOut(500, function () {
            title.text("Qian's Portfolio").css("color", "#03C9A9").fadeIn(500);
        });
    });

    $('#topNav').onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 800
    });

    $(".works-item").hover(
        function () {
            $(".contenthover", this).fadeIn();
            $("img", this).fadeTo(500, 0.3);
        },
        function () {
            $(".contenthover", this).fadeOut();
            $("img", this).fadeTo(500, 1);
        });

    $(".works-item").click(
        function(){
            window.open($("a", this).attr('href'),"_self",true);
        }
    )

});


