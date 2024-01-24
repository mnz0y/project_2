



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
        $('.menu').slideToggle();
        if($('.menu').css("display")=="block"){
            $('.menu').css("display","flex")
        }
    });

    $('.menu1').click(function(){
        $('.menu').slideToggle();
        if($('.menu').css("display")=="block"){
            $('.menu').css("display","flex")
        }
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


//문단2
$(function(){
    $('.click1').click(function(){
        $('.clickbox1').show();
        $('.click1').addClass('show1',400);
        $('.click2').addClass('show2',400);
        $('.click2').removeClass('show1',400);
        $('.click1').removeClass('show2',400);
        $('.clickbox2').hide();

    });

    $('.click2').click(function(){
        $('.clickbox1').hide();
        $('.click1').removeClass('show1',400);
        $('.click2').removeClass('show2',400);
        $('.click2').addClass('show1',400);
        $('.click1').addClass('show2',400);
        $('.clickbox2').show();
        
    });
});



//문단6
$(function(){
    $('.leftbox ul li:nth-of-type(1)').click(function(){
        $('.rightbox:nth-of-type(2)').fadeIn().css('display','flex');
        $('.rightbox:nth-of-type(3)').hide();
    });

    $('.leftbox ul li:nth-of-type(2)').click(function(){
        $('.rightbox:nth-of-type(3)').fadeIn().css('display','flex');
        $('.rightbox:nth-of-type(2)').hide();
    });
});