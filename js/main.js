$(function(){
    let upH = $(".upper-bar").innerHeight(),
    navH  = $(".navbar").innerHeight(),
    winH = $(window).height();

$(".slider , .carousel-item").height(winH - (upH + navH));
// Featured    work Shuffle 
$(".feature-work ul li").on("click" , function (){
    $(this).addClass("active").siblings().removeClass("active");
    if($(this).data('class') === "all") {
        $(".shuffle-imgs .col-3").css("opacity" ,1);
    }
    else {
        $(".shuffle-imgs .col-3").css("opacity" ,".07");
        $($(this).data('class')).parent().css("opacity", 1)
    }
});
});
