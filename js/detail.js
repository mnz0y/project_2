
// 네비게이션
$(function () {
    $('nav .container img').click(function () {
        $('.menu').slideToggle();
        if ($('.menu').css("display") == "block") {
            $('.menu').css("display", "flex")
        }
    });

    $('.menu1').click(function () {
        $('.menu').slideToggle();
        if ($('.menu').css("display") == "block") {
            $('.menu').css("display", "flex")
        }
    });

    $('.hide').click(function () {
        $('nav .container').slideToggle();
    });

    $(window).resize(function () {
        if (window.innerWidth >= 1216) {
            $('nav .container').show().css("display", "flex");
        }else{
            $('nav .container').hide();
        };

    });

});



// 문단1

let i = 0;
function slide(){
    i++;
    if(i>$('.slide li:last').index()){
        i=0;
    }
    $('.slide li').eq(i).stop().fadeIn('slow');
    $('.slide li').eq(i-1).stop().fadeOut('slow');
}
setInterval(slide,5000);

