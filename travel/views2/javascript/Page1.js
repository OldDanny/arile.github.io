// -------------------進入網頁1100毫秒內畫面固定--------------------------------------------------

        const docStyle = document.documentElement.style;

        setTimeout(function(){

            $(".container-fluid").css({"overflow": "auto","overflow-x":"hidden"});

        },1100);



// -------------------輸出網頁的寬--------------------------------------------------

        console.log(window.innerWidth);

        console.log(window.innerHeight);

        $(window).resize(function(){

            console.log("調整螢幕寬為:" + window.innerWidth);

            console.log("調整螢幕高為:" + window.innerHeight);
            
        });



// -------------------nav從上方由下出現--------------------------------------------------
        
        $("#nav2").animate({top: 0}, 600,function(){

            $("#nav2").css({"position": "fixed","top":"0","left":"0"});

        });

        function AddMailAndProjects(){

            if($("#projects").html() == "" || $("#projects").html() == null ){
                
                $("#projects").append("PROJECTS");
                
                $("#mail").append("MAIL");
            }
        }

        function removeMailAndProjects(){
                
                $("#projects").empty();
                
                $("#mail").empty();
        }

        function navLi5(){

            $("#navBox1").css("width","3.7%");

            $("#navBox5").css("width","3.7%");

            $("#navBox2").css("width","16.3%");

            $("#navBox4").css("width","16.3%");
        }

        function navLi4(){

            $("#navBox1").css("width","5%");

            $("#navBox5").css("width","5%");

            $("#navBox2").css("width","15%");

            $("#navBox4").css("width","15%");
        }


        function navLi3(){

            $("#navBox1").css("width","7%");

            $("#navBox5").css("width","7%");

            $("#navBox2").css("width","12%");

            $("#navBox4").css("width","12%");
        }




        if( document.body.clientWidth >= 1801 ){

            AddMailAndProjects();

            navLi5();

            containerHeight5V();

            addRightContent();

            containerHeight5V();

            $("#aboutUs2-2").css("display","block"); 

        }else if( 1401 <= document.body.clientWidth && document.body.clientWidth <= 1800 ){

            AddMailAndProjects();

            navLi4();

            containerHeight5V();

            addRightContent();

            containerHeight5V();

            $("#aboutUs2-2").css("display","block"); 

        }else if( 1151 <= document.body.clientWidth && document.body.clientWidth <= 1400 ){

            removeMailAndProjects();

            navLi3();

            containerHeight5V();

            removeRightContent();

            containerHeight5VDown();

            $("#aboutUs2-2").css("display","block"); 

        }else if( 601 <= document.body.clientWidth && document.body.clientWidth <= 1150 ){

            removeMailAndProjects();

            containerHeight5V();

            removeRightContent();

            containerHeight5VDown();

            $("#aboutUs2-2").css("display","block"); 

        }else{

            removeMailAndProjects();

            containerHeight5V();

            removeRightContent();

            containerHeight5VDownSmaill();

            $("#aboutUs2-2").css("display","none");                          
        }


// -------------------調整螢幕大小觸發事件--------------------------------------------------

        $(window).resize(function(){

            $("#content").empty();

            if( document.body.clientWidth >= 1801 ){

                AddMailAndProjects();

                navLi5();

                containerHeight5V();

                addRightContent();

                containerHeight5V();

                $("#aboutUs2-2").css("display","block"); 

            }else if( 1401 <= document.body.clientWidth && document.body.clientWidth <= 1800 ){

                AddMailAndProjects();

                navLi4();

                containerHeight5V();

                addRightContent();

                containerHeight5V();

                $("#aboutUs2-2").css("display","block"); 

            }else if( 1151 <= document.body.clientWidth && document.body.clientWidth <= 1400 ){

                removeMailAndProjects();

                navLi3();

                containerHeight5V();

                removeRightContent();

                containerHeight5VDown();

                $("#aboutUs2-2").css("display","block"); 

            }else if( 601 <= document.body.clientWidth && document.body.clientWidth <= 1150 ){

                removeMailAndProjects();

                containerHeight5V();

                removeRightContent();

                containerHeight5VDown();

                $("#aboutUs2-2").css("display","block"); 

            }else{

                removeMailAndProjects();

                containerHeight5V();

                removeRightContent();

                containerHeight5VDownSmaill();

                $("#aboutUs2-2").css("display","none");  
            }
        });



// -------------------nav漢堡與mail滑入滑出動畫--------------------------------------------------

        var gifUp = "#gif1-1";

        var gifDowan = "#gif1-1-slideDown";

        var mailUp = "#mail1";

        var mailDown = "#mail2";

        function NavAnimation(up,down){
 
                $(up).on('mouseenter', function() {

                    $(up).stop(true,false).animate({opacity:"0",top:"-20px"},500,function(){

                    	$(up).css("top","-60px");

                    });

                    $(down).stop(true,false).animate({opacity:"1",top:"0px"},500);

                });        

                $(down).on('mouseleave', function() {

                    $(down).stop(true,false).animate({opacity:"0",top:"30px"},500,function(){

                        $(down).css("top", "60px");

                    });

                    $(up).stop(true,false).animate({top:"0",opacity:"1"},500);
                });
            }   

        NavAnimation(gifUp,gifDowan);

        NavAnimation(mailUp,mailDown);



// -------------------nav漢堡click動畫--------------------------------------------------
        
        // x為漢堡click動畫的節流閥
        var x = 0;
            
        function gifClick(){

            $("#gif2-2").css("display","block").siblings().css("display","none");

            $("#menu").stop(true,false).animate({left:"-220px"},600);

            setTimeout(function(){

                $("#cover").css("display","none");

            },300);

            setTimeout(function(){

                $("#gif2-2").css("display","none");

                $("#gif1-1").css({"top":"-60px","display":"block","opacity":"1"});
                    
                $("#gif1-1-slideDown").css({"top":"0px","display":"block","opacity":"1"});

            },1000);
        }

        $("#gif1-1-slideDown").on('click', function() {

            x = 1;

            $("#gif1-2").css("display","block").siblings().css("display","none");

            $("#menu").stop(true,false).animate({left:"0"},600);

            $("#cover").css("display","block");

            setTimeout(function(){

                $("#gif1-2").css("display","none");

                $("#gif2-1").css("display","block");
                    
            },2000);
        });

        $("#gif2-1").on('click',function(){

            x = 0;

            gifClick();

            if(y == 1){

                $("#mail3").trigger("click");

                $("#mail2").trigger("mouseleave");           
            }
        });



// -------------------nav信件click動畫--------------------------------------------------

        // y為信件click動畫的節流閥
        var y = 0;

        function mailClick(){

            $("#mail2-1").css({"top":"0px","display":"block"});

            $("#mail3").css({"top":"0px","display":"none"});

            $("#sentMail").stop(true,false).animate({right:"-220px"},600);

            $("#cover").css("display","none");

            setTimeout(function(){

                $("#mail2-1").css({"top":"0px","display":"none"});

                $("#mail2").css({"top":"0px","display":"block","opacity":"1"});

                $("#mail1").css({"top":"-60px","display":"block","opacity":"0"});
             
            },600) 
        }

        $("#mail2").on('click', function() {

            y = 1;

            $("#sentMail").stop(true,false).animate({right:"0"},600);

            $("#mail2-1").css("display","block").siblings().css("display","none");

            $("#cover").css("display","block");

            setTimeout(function(){

                $("#mail3").css("display","block").siblings().css("display","none");
                
            },600);
        });

        $("#mail3").on('click', function() {

            y = 0; 

            mailClick();

            if(x == 1){

                $("#gif2-1").trigger("click");

                $("#gif1-1-slideDown").trigger("mouseleave");
            }
        });

// -------------------nav上的logo動畫(移入)--------------------------------------------------

        // i為logo刪除線動畫的節流閥
        var i =0;

        function LogoStrikethrough(){

            if(i == 0){

            i = 1; 

            $("#logo").empty().append("<del>S</del>HENGHUI&nbsp;&&nbsp;ARILE");

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del>ENGHUI&nbsp;&&nbsp;ARILE");
                }
            ,20);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del>NGHUI&nbsp;&&nbsp;ARILE");
                }
            ,40);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del>GHUI&nbsp;&&nbsp;ARILE");
                }
            ,60);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del>HUI&nbsp;&&nbsp;ARILE");
                }
            ,80);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del>UI&nbsp;&&nbsp;ARILE");
                }
            ,100);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del>I&nbsp;&&nbsp;ARILE");
                }
            ,120);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del>&nbsp;&&nbsp;ARILE");
                }
            ,140);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del>&&nbsp;ARILE");
                }
            ,160);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del>&nbsp;ARILE");
                }
            ,180); 

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del>ARILE");
                }
            ,200);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del>RILE");
                }
            ,220);    

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del>ILE");
                }
            ,240); 

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del>LE");
                }
            ,260); 

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del>E");
                }
            ,280);

            setTimeout(

                function(){
                    $("#logo").empty().append("<del>S</del><del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,300); 
            }
        }

        $(".logo").on('mouseenter', function() {

            LogoStrikethrough();
        });



// -------------------nav上的logo動畫(移出)--------------------------------------------------

        function removeLogoStrikethrough(){

            if(i == 1){

            i = 0; 

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHUI&nbsp;&&nbsp;ARILE");
                }
            ,320);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHUI&nbsp;&&nbsp;ARIL<del>E</del>");
                }
            ,300);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHUI&nbsp;&&nbsp;ARI<del>L</del><del>E</del>");
                }
            ,280);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHUI&nbsp;&&nbsp;AR<del>I</del><del>L</del><del>E</del>");
                }
            ,260);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHUI&nbsp;&&nbsp;A<del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,240);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHUI&nbsp;&&nbsp;<del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,220);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHUI&nbsp;&<del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,200);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHUI&nbsp;<del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,180);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHUI<del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,160);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGHU<del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,140); 

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENGH<del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,120);

            setTimeout(

                function(){

                    $("#logo").empty().append("SHENG<del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,100);    

            setTimeout(

                function(){

                    $("#logo").empty().append("SHEN<del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,80); 

            setTimeout(

                function(){

                    $("#logo").empty().append("SHE<del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,60); 

            setTimeout(

                function(){

                    $("#logo").empty().append("SH<del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,40);

            setTimeout(

                function(){
                    
                    $("#logo").empty().append("S<del>H</del><del>E</del><del>N</del><del>G</del><del>H</del><del>U</del><del>I</del><del>&nbsp;</del><del>&</del><del>&nbsp;</del><del>A</del><del>R</del><del>I</del><del>L</del><del>E</del>");
                }
            ,20); 
            }
        }


 
        $("#logo").on('mouseleave', function() {

            removeLogoStrikethrough();

            $("#logo").empty().append("SHENGHUI&nbsp;&&nbsp;ARILE");

            i = 0;
        });



// -------------------menu上的選項動畫(移入)--------------------------------------------------

        function MenuStrikethrough(length,number){

            for(var wordsCount = 0; wordsCount < length; wordsCount++){

                var menuText = $("#menuA" + number + ">p").eq(wordsCount).html();
 
                (function(index) {

                    setTimeout(function(){

                        menuText = $("#menuA" + number + ">p").eq(index).html();

                        menuText = "<del>" + menuText + "</del>";

                        $("#menuA" + number + ">p").eq(index).html(menuText);

                    }, 40 * index);

                })(wordsCount);
            }
        }

        $("#menuLi1").on('mouseenter', function() {
        
            MenuStrikethrough(7,1)
        });

        $("#menuLi2").on('mouseenter', function() {
        
            MenuStrikethrough(6,2)
        });

        $("#menuLi3").on('mouseenter', function() {
        
            MenuStrikethrough(6,3)
        });

        $("#menuLi4").on('mouseenter', function() {
        
            MenuStrikethrough(10,4)
        });

        $("#menuLi5").on('mouseenter', function() {
        
            MenuStrikethrough(7,5)
        });



// -------------------menu上的選項動畫(移出)--------------------------------------------------

        function removeMenuStrikethrough(length,number){

            for(var wordsCount = 0; wordsCount < length; wordsCount++){

                var menuText = $("#menuA" + number + "-1>p").eq(wordsCount).html();

                (function(index) {

                    setTimeout(function(){

                        menuText = $("#menuA" + number + "-1>p").eq(index).html();

                        $("#menuA" + number + ">p").eq(index).html(menuText);

                    }, 80 * index);

                })(wordsCount);
            }
        }

        $("#menuLi1").on('mouseleave', function() {
        
            removeMenuStrikethrough(7,1)
        });

        $("#menuLi2").on('mouseleave', function() {
        
            removeMenuStrikethrough(6,2)
        });

        $("#menuLi3").on('mouseleave', function() {
        
            removeMenuStrikethrough(6,3)
        });

        $("#menuLi4").on('mouseleave', function() {
        
            removeMenuStrikethrough(10,4)
        });

        $("#menuLi5").on('mouseleave', function() {
        
            removeMenuStrikethrough(7,5)
        });



// -------------------menu上的about的點擊設定--------------------------------------------------

        $("#menuLi1").on('click',function(){

            $("#news").css("display","none");

            $("#newsSmaill").css("display","none");

            $("#aboutUs").css({"display":"block","top":"0px"});

            $("#cover").css("opacity","0.8");

            $("#aboutWords").css("display","block");

            $("#aboutWords").css("opacity","1");

            $("#aboutUs2").css("opacity","1");

            $("#menu").stop(true,false).animate({left:"-220px"},600);

            $("#sentMail").stop(true,false).animate({right: "-220px"},600);
        });

        $("#aboutUs").on('click',function(){

            $("#news").css("display","block");

            $("#newsSmaill").css("display","block");

            $("#cover").css({"display":"none","opacity":"0.7"});

            $("#gif2-1").trigger('click');

            $("#aboutWords").css("opacity","0");

            $("#aboutUs2").css("opacity","0");

            $("#aboutUs").css({"display":"none","top":"100%"});
        });



// -------------------menu上的news的點擊設定--------------------------------------------------

        $("#menuLi2").on('click',function(){

                $("#aboutUs").css({"display":"block","top":"0px"});

                $("#cover").css("opacity","0.8");

                $("#menu").stop(true,false).animate({left:"-220px"},600);

                $("#sentMail").stop(true,false).animate({right: "-220px"},600);

                if(document.body.clientWidth >= 1400){

                    $("#news").css("display","block");

                }else{

                    $("#newsSmaill").css("display","block");
                }
            

            $(window).resize(function(){

                if(document.body.clientWidth >= 1401 && $("#aboutUs2").css("opacity") == 0){

                    $("#news").css("display","block");

                    $("#newsSmaill").css("display","none");
                }

                if(document.body.clientWidth <= 1400 && $("#aboutUs2").css("opacity") == 0){

                    $("#news").css("display","none");

                    $("#newsSmaill").css("display","block");
                }
            });
        });

        $("#aboutUs").on('click',function(){

            $("#cover").css({"display":"none","opacity":"0.7"});

            $("#gif2-1").trigger('click');

            $("#news").css("display","none");

        });



// -------------------menu上的mail的點擊設定--------------------------------------------------

        $("#menuLi3").on('click', function() {

            $("#mail1").trigger('mouseenter');

            setTimeout(function(){

                $("#mail2").trigger('click');

            },600);
        });

// -------------------cover的長度--------------------------------------------------

        function containerHeight5V(){

            var totalHeight = 0;

            totalHeight = totalHeight + $("#img0"). innerHeight() + $("#img1"). innerHeight() + $("#img2"). innerHeight() + $("#img3"). innerHeight() + $("#img4"). innerHeight();

            totalHeight = totalHeight/1.03;

            docStyle.setProperty("--totalHeight",totalHeight);

            requestAnimationFrame(containerHeight5V);
        }

        function containerHeight5VDown(){

            var totalHeight = 0;

            totalHeight = totalHeight + $("#img0"). innerHeight() + $("#img1"). innerHeight() + $("#img2"). innerHeight() + $("#img3"). innerHeight() + $("#img4"). innerHeight();

            totalHeight = (totalHeight/1.03) + 310;

            docStyle.setProperty("--totalHeight",totalHeight);

            requestAnimationFrame(containerHeight5VDown);
        }

        function containerHeight5VDownSmaill(){

            var totalHeight = 0;

            totalHeight = totalHeight + $("#img0"). innerHeight() + $("#img1"). innerHeight() + $("#img2"). innerHeight() + $("#img3"). innerHeight() + $("#img4"). innerHeight();

            totalHeight = (totalHeight/1.03) + 340;

            docStyle.setProperty("--totalHeight",totalHeight);

            requestAnimationFrame(containerHeight5VDownSmaill);
        }



// -------------------news的滑入滑出寬的動畫--------------------------------------------------

        var $li = $("#news>ul>a>li");

        $("#news>ul>a>li").mouseenter(function(){

            $(this).stop().animate({width:"400px"}).siblings().stop().animate({width:"150px"});}).mouseleave(function(){$li.stop().animate({width:"200px"});
        });
       


// -------------------contentRightSide上icon的滑入滑出動畫--------------------------------------------------

        $(".title1").on("mouseenter",function(){

            $(this).css("opacity","1");

        }).on("mouseleave",function(){

            $(this).css("opacity","0.5");
        });

        $(".title2").on("mouseenter",function(){

            $(this).css("opacity","1");

        }).on("mouseleave",function(){

            $(this).css("opacity","0.5");
        });

        $(".title3").on("mouseenter",function(){

            $(this).css("opacity","1");

        }).on("mouseleave",function(){

            $(this).css("opacity","0.5");
        });



// -------------------contentRightSide上icon的點擊動畫--------------------------------------------------
         
         $(".title1").on("click",function(){

            var page = $(this).attr("id");

            $(".container-fluid").stop().animate({

                scrollTop:0

            },600,function(){

                $("#contentLeftSide0").css("display","block");

                $("#contentLeftSide1").animate({left:"100%"},600);

                $("#contentLeftSide3").css("display","block").animate({left:"0%"},600);

                $("#contentRightSide1").animate({left:"100%"},600);

                $("#contentRightSide0").css("display","block").animate({left:"100%"},600);

                $("#contentRightSide2").animate({left:"0%"},600);

                setTimeout(function(){

                    window.location.assign(page + ".html")},600);  
            });
        });

        $(".title2").on("click",function(){

            window.location.href='../Page1.html';
        });

        $(".title3").on("click",function(){

            var page = $(this).attr("id");

            $(".container-fluid").stop().animate({

                scrollTop:0

            },600,function(){

                $("#contentLeftSide0").css("display","block");

                $("#contentLeftSide1").animate({left:"-100%"},600);

                $("#contentLeftSide2").css("display","block").animate({left:"0%"},600);

                $("#contentRightSide1").animate({left:"-100%"},600);

                $("#contentRightSide0").css("display","block").animate({left:"-100%"},600);

                $("#contentRightSide3").animate({left:"0%"},600);

                setTimeout(function(){

             window.location.assign(page + ".html")},600);  
            });
        });


        function addRightContent(){

            $("#contentRightSide").css("display","block");

            $("#contentLeftSide0").css("width","80%");

            $("#contentLeftSide1").css("width","80%");

            $("#contentLeftSide2").css("width","80%");

            $("#contentLeftSide3").css("width","80%");

            $("#contentDownTitle").css({"opacity":"0","height":"0%"});

            $("#contentDownArticle").css("display","none");
        }


        function removeRightContent(){

            $("#contentRightSide").css("display","none");

            $("#contentLeftSide0").css("width","100%");

            $("#contentLeftSide1").css("width","100%");

            $("#contentLeftSide2").css("width","100%");

            $("#contentLeftSide3").css("width","100%");

            $("#contentDownTitle").css({"opacity":"1","height":"10%"});

            $("#contentDownArticle").css("display","block");
        }


        function contentDownTop(){

            if( 1101 <= document.body.clientWidth && document.body.clientWidth <= 1400 ){

                $("#contentDownH").css("top","40%");

                $("#contentDownP").css("top","30%");

            }else if( 801 <= document.body.clientWidth && document.body.clientWidth <= 1100 ){

                $("#contentDownH").css("top","35%");

                $("#contentDownP").css("top","30%");

            }else if( 499 <= document.body.clientWidth && document.body.clientWidth <= 800 ){

                $("#contentDownH").css("top","35%");

                $("#contentDownP").css("top","32%");

            }else{

                $("#contentDownH").css("top","28%");

                $("#contentDownP").css("top","25%");
            }
        }

        contentDownTop();

        $(window).resize(function(){

            contentDownTop();
        });
