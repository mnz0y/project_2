



// 슬라이더

function slide() {
    var w = window.innerWidth - 17;
    console.log(w)
    $('.move').stop().animate({ marginLeft: -w }, 2000, function () {
        $('.move li:first').appendTo('.move');
        $('.move').css({ marginLeft: 0 });
    });
}
setInterval(slide, 4500);

// 네비게이션
$(function(){
    $('nav .container img').click(function(){
        $('.menu').slideToggl();
    });
});
$(function(){
    $('nav>.container>ul>li>a').hover(function(){
        $('.menu').slideToggl();
    });
});




// 문단1

$(function () {
    $('.left').click(function () {
        $('.tour li:last').prependTo('.tour');
        $('.tour').css('margin-left', '-33.33%');
        $('.tour').stop().animate({ marginLeft: 0 }, 800);
    });
    $('.right').click(function () {
        $('.tour').stop().animate({ marginLeft: '-33.33%' }, 800, function () {
            $('.tour li:first').appendTo('.tour');
            $('.tour').css({ marginLeft: 0 });
        });
    });
});