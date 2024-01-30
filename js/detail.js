



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

   
    function detectMediaSize() {
        if (window.matchMedia('(max-width:749px)').matches) {
            console.log("mobile")
            $('.left').click(function () {
                $('.tour li:last').prependTo('.tour');
                $('.tour').css('margin-left', '-100%');
                $('.tour').stop().animate({ marginLeft: 0 }, -500);
            });
            $('.right').click(function () {
                $('.tour').stop().animate({ marginLeft: '-100%' }, -500, function () {
                    $('.tour li:first').appendTo('.tour');
                    $('.tour').css({ marginLeft: 0 });
                });
            });

        } else if (window.matchMedia('(min-width:750px) and (max-width:1216px)').matches) {
            console.log("tablet")
            $('.left').click(function () {
                $('.tour li:last').prependTo('.tour');
                $('.tour').css('margin-left', '-50%');
                $('.tour').stop().animate({ marginLeft: 0 }, 800);
            });
            $('.right').click(function () {
                $('.tour').stop().animate({ marginLeft: '-50%' }, 800, function () {
                    $('.tour li:first').appendTo('.tour');
                    $('.tour').css({ marginLeft: 0 });
                });
            });


        } else {
            console.log("pc")

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
        }
    };
    
    window.addEventListener('resize', detectMediaSize, false);
    detectMediaSize();






    //문단2
    $(function () {
        $('.click1').click(function () {
            $('.clickbox1').show();
            $('.click1').addClass('show1', 400);
            $('.click2').addClass('show2', 400);
            $('.click2').removeClass('show1', 400);
            $('.click1').removeClass('show2', 400);
            $('.clickbox2').hide();

        });

        $('.click2').click(function () {
            $('.clickbox1').hide();
            $('.click1').removeClass('show1', 400);
            $('.click2').removeClass('show2', 400);
            $('.click2').addClass('show1', 400);
            $('.click1').addClass('show2', 400);
            $('.clickbox2').show();

        });
    });



    //문단6
    $(function () {
        $('.leftbox ul li').click(function () {
            let idx =$(this).index();
            console.log($('.rightbox').eq(idx))
 
            $('.rightbox').eq(idx).fadeIn().css('display', 'flex');            
            $('.rightbox').eq(idx-1).hide();
            $('.leftbox ul li').removeClass('yellow', 400);
            $(this).addClass('yellow', 400);
        });
    });