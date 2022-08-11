// -------------------輪播圖---------------------------------------------------------

    var count = 0;
        
        $(".arrow-left").click(function() {
            count++;
            
            //因為數組是從0開始，長度是從1開始；所以當數組等於長度時(也就是第0張圖)讓count = 0;
            if(count == $(".slider li").length){

                count = 0;
            }

        $("li").eq(count).fadeIn(2500).siblings("li").fadeOut(2500);
    });
    
    // 自動輪播的效果
    function autoClick(){

        $(".arrow-left").trigger("click");
    }

    setInterval('autoClick()',12000);   



// -------------------進入按鈕---------------------------------------------------------

    //按鈕上升
    var infoTop = function(){

    $("#info").stop().animate({

        opacity: 1,

        },3000);
    }

    setTimeout(

            'infoTop()',1000);



    //自動右移黑線    
    var autoLine = function(){

        $("#black-line").stop()

        .animate({

            left: 120

        },2500).animate({left:-200},0)}

    setInterval(

        'autoLine()',2500);



// -------------------第一張圖css移除class--------------------------------------------------

    // 進入後八秒移除class
    var removeFirstLiClass = function(){

        $(".slider>ul>li").eq(0).removeClass('FirstLiClass')
        }

    setTimeout(

        'removeFirstLiClass()',8000);



// -------------------過場畫面--------------------------------------------------

    $("#info").on("click",function(){

        $("#container2").addClass('ToPag1');

        $("#TransitionsWhite").slideUp(2300);
   
        $("#container1").slideUp(600),5500;

        setTimeout(function(){

             window.location.assign("Page1.html")},600);           
    });