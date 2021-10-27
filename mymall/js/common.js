var animationflg = true;
function animationstop(){
    animationflg = true;
}
$(function(){
    $(".downimga").mouseover(function(){
        if(animationflg){
            animationflg = false;
            $(".downimg").slideDown(500, animationstop);
        }

    });
     $(".downimga").mouseout(function(){
        if(animationflg){
            animationflg = false;
            $(".downimg").slideUp(500, animationstop);
        }
    });

    $(".navbar_one").mouseover(function(){
        $(".hidediv").slideDown();
    });
    $(".navbar_one").mouseout(function(){
        $(".hidediv").slideUp();
    });

    $(".sitemenu li").mouseover(function(){
        $(".menudiv").show();
    });

     $(".sitemenu li").mouseout(function(){
        $(".menudiv").hide();
    });

});


var banners = ['banner2.webp', 'banner3.jpg','banner1.webp'];
var counter = 0;
/*启动一个周期性计时任务
方法有两个参数，分别是任务和计时周期*/
setInterval(function(){
    if(counter == 3){
        counter = 0;
    }
    $(".sitebanner .container").css("background-image", "url(/image/"+banners[counter]+")");
    counter++;
}, 1000);