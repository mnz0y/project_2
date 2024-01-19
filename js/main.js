function slide() {
    var w = window.innerWidth - 17;
    console.log(w)
    $('.move').stop().animate({ marginLeft: -w }, 2000, function () {
        $('.move li:first').appendTo('.move');
        $('.move').css({ marginLeft: 0 });
    });
}
setInterval(slide, 4500);

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