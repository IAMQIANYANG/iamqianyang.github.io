$(document).ready(function(){
    $(".small-images").click(function(){
        var url = $(this).children("img").attr("src");
        $("#previewWindow").children("img").attr("src",url);
//        console.log();

    });
});


$('.alert').on('closed.bs.alert', function () {
})



function changeTag(str) {
    $('#addTag').val(str);

    //if (a.placeholder.match("tag01")) {
    //    a.placehoder = "tag01";
    //} else {
    //    image.src = "tag01";
    //}
}


