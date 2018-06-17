// //	top button
// $('.top').click(function(){
//     $('html,body').animate({scrollTop:0},1000,'easeOutBounce');
//     return false;
// });

// //	文件捲動向下，顯示top鈕，向上則隱藏
// $(document).scroll(function(){
//     var scrollnum=$(window).scrollTop();
//     if(scrollnum>200){
//        $('.top').stop().animate({opacity:'1'},500);
//     }else{
//        $('.top').stop().animate({opacity:'0'},500);
//        }
// });
$(document).ready(function(){
    // top button
    $('.top,.logo').click(function(){
        $('html,body').animate({scrollTop:0},1000,'easeOutBounce');
        return false;
    });
    // 頁內超連結
    $('.about-btn').click(function(){
        $('html,body').animate({scrollTop:$('#about').offset().top-80},1000,'easeOutBack');
        return false;
    });
    $('.skill-btn').click(function(){
        $('html,body').animate({scrollTop:$('#skill').offset().top-80},1000,'easeOutBack');
        return false;
    });
    $('.work-btn').click(function(){
        $('html,body').animate({scrollTop:$('#work').offset().top-80},1000,'easeOutBack');
        return false;
    });
    $('.contact-btn').click(function(){
        $('html,body').animate({scrollTop:$('#contact').offset().top-80},1000,'easeOutBack');
        return false;
    });
    // 文件捲動向下，顯示top鈕，向上則隱藏
    $(document).scroll(function(){
        var scrollnum = $(window).scrollTop();
        if(scrollnum>2000){
            $('#contact').stop().animate({opacity:'1'},1000);
        }
        else if(scrollnum>1400){
            $('#work').stop().animate({opacity:'1'},1000);
        }
        else if(scrollnum>800){
            $('#skill').stop().animate({opacity:'1'},1000);
        }
        else if(scrollnum>300){
            $('.top').stop().animate({opacity:'1'},500);
            $('.navbar').stop().animate({opacity:'1'},500);
            $('#about').stop().animate({opacity:'1'},1000);
        }
        else{
            $('.top').stop().animate({opacity:'0'},500);
            $('.navbar').stop().animate({opacity:'0'},500);
        }
    });
});