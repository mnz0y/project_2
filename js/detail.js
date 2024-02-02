
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
        } else {
            $('nav .container').hide();
        };

    });

});



// 문단1

let i = 0;
function slide() {
    i++;
    if (i > $('.slide li:last').index()) {
        i = 0;
    }
    $('.slide li').eq(i).stop().fadeIn('slow');
    $('.slide li').eq(i - 1).stop().fadeOut('slow');
}
setInterval(slide, 5000);

//선택박스
let priceSum = 749000;

$('#total_count').append('<span><b>' + priceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</b>원 </span>');

$(function () {
    $('.plus').click(function () {
        $(this).prev().val(parseInt($(this).prev().val()) + 1);
        let sum = parseInt($(this).prev().val() * priceSum);

        $('#total_count span').html('<span><b>' + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</b> 원 </span>');

    });

    $('.minus').click(function () {
        if ($(this).next().val() > 0) {
            $(this).next().val(parseInt($(this).next().val()) - 1);
            let sum = parseInt($(this).next().val() * priceSum);
            console.log(sum);
            $('#total_count').html('<span><b>' + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</b>원 </span>')
        }
    });
});

// 문단2
$(function(){
    $('#subNav li:eq(0)').click(function(){
        
        $(this).css({borderBottom : '2px solid #555', fontWeight :'bold'});
        $('.intro').toggle();
    });
    $('#subNav li:eq(1)').click(function(){
        $(this).css({borderBottom : '2px solid #555', fontWeight :'bold'});
        $('.schedule').toggle();
    });
    $('#subNav li:eq(2)').click(function(){
        $(this).css({borderBottom : '2px solid #555', fontWeight :'bold'});
        $('.detail').toggle();
    });
    $('#subNav li:eq(3)').click(function(){
        $(this).css({borderBottom : '2px solid #555', fontWeight :'bold'});
        $('.review').toggle();
    });

});


// 상세정보
$(function(){
    $('.detail button').click(function(){
        $('.dt_hide').toggle('1000',function(){
            if($(this).css('display')=="block"){
                $('.detail button').text('접기 △')
            }else{
                $('.detail button').text('자세히 보기 ▽')
            }
        
        });
        
    });
});

// 리뷰
$(function(){
    $('.re_vis').click(function(){
        $(this).next().toggle();
    });
});