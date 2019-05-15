$(function () {
   $(".toggle").click(function () {
        $(".answer").slideToggle();
    });
    $(".toggle_2").click(function () {
        $(".answer_2").slideToggle();
    });
    $(".toggle_3").click(function () {
        $(".answer_3").slideToggle();
    });
    $(".toggle_4").click(function () {
        $(".answer_4").slideToggle();
    });

    // =========scrollTop=====================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html ,body').animate({
            scrollTop: 0
        }, 1000);
    });
});