// -------------------進入網頁1100毫秒內畫面固定--------------------------------------------------

        const docStyle = document.documentElement.style;

        setTimeout(function(){

            $(".container-fluid").css("overflow-y","auto");

        },1100);



// -------------------輸出網頁的寬--------------------------------------------------

        console.log(window.innerWidth);

        console.log(window.innerHeight);

        $(window).resize(function(){

            console.log("調整螢幕寬為:" + window.innerWidth);

            console.log("調整螢幕高為:" + window.innerHeight);
            
        });



// -------------------nav從上方由下出現--------------------------------------------------
        
        $("#nav").animate({top: 0}, 600,function(){

            $("#nav").css({"position": "fixed","top":"0","left":"0"});

        });



// -------------------Page1圖片上升與nav圖示大小調整--------------------------------------------------

        function li5(){

            $("#content").append(

                '<ul><li class="li5"><a class="aSmall5-1" href="./views2/page0-1.html"><img id="img0" src="page1-images/0.jpg" alt="0" class="imgSmall5-1"></a><a class="aSmall5" href="./views2/page1-1.html"><img id="img1" src="page1-images/1.jpg" alt="1" class="imgSmall5"></a><a class="aSmall5" href="./views2/page2-1.html"><img id="img2" src="page1-images/2.jpg" alt="2" class="imgSmall5"></a><a class="aSmall5" href="./views2/page3-1.html"><img id="img3" src="page1-images/3.jpg" alt="3" class="imgSmall5"></a></li><li class="li5"><a class="aSmall5" href="./views2/page4-1.html"><img id="img4" src="page1-images/4.jpg" alt="4" class="imgSmall5"></a><a class="aSmall5" href="./views2/page5-1.html"><img id="img5" src="page1-images/5.jpg" alt="5" class="imgSmall5"></a><a class="aSmall5" href="./views2/page6-1.html"><img id="img6" src="page1-images/6.jpg" alt="6" class="imgSmall5"></a><a class="aSmall5-1" href="./views2/page7-1.html"><img id="img7" src="page1-images/7.jpg" alt="7" class="imgSmall5-1"></a></li><li class="li5"><a class="aBig5" href="./views2/page8-1.html"><img id="img8" src="page1-images/8.jpg" alt="8" class="imgBig5"></a><a class="aSmall5" href="./views2/page9-1.html"><img id="img9" src="page1-images/9.jpg" alt="9" class="imgSmall5"></a><a class="aSmall5-1" href="./views2/page10-1.html"><img id="img10" src="page1-images/10.jpg" alt="10" class="imgSmall5-1"></a></li><li class="li5"><a class="aSmall5" href="./views2/page11-1.html"><img id="img11" src="page1-images/11.jpg" alt="11" class="imgSmall5"></a><a class="aBig5" href="./views2/page12-1.html"><img id="img12" src="page1-images/12.jpg" alt="12" class="imgBig5"></a><a class="aSmall5-1" href="./views2/page13-1.html"><img id="img13" src="page1-images/13.jpg" alt="13" class="imgSmall5-1"></a></li><li class="li5"><a class="aSmall5-1" href="./views2/page14-1.html"><img id="img14" src="page1-images/14.jpg" alt="14" class="imgSmall5-1"></a><a class="aSmall5" href="./views2/page15-1.html"><img id="img15" src="page1-images/15.jpg" alt="15" class="imgSmall5"></a><a class="aSmall5" href="./views2/page16-1.html"><img id="img16" src="page1-images/16.jpg" alt="16" class="imgSmall5"></a><a class="aSmall5" href="./views2/page17-1.html"><img id="img17" src="page1-images/17.jpg" alt="17" class="imgSmall5"></a></li></ul>');
        }

        function li4(){

            $("#content").append(

                   '<ul><li class="li4"><a class="aSmall5" href="#4-0" style="height: 16.5vmax !important;"><img id="img0" src="page1-images/0.jpg" alt="0" class="imgSmall4"></a><a class="aSmall5-1" href="./views2/page1-1.html" style="height: 17.5vmax !important;"><img id="img1" src="page1-images/1.jpg" alt="1" class="imgSmall4-1"></a><a class="aSmall5" href="./views2/page2-1.html" style="height: 16.5vmax !important;"><img id="img2" src="page1-images/2.jpg" alt="2" class="imgSmall4"></a><a class="aSmall5" href="./views2/page3-1.html" style="height: 16.5vmax !important;"><img id="img3" src="page1-images/3.jpg" alt="3" class="imgSmall4"></a><a class="aSmall5" href="./views2/page4-1.html" style="height: 16.5vmax !important;"><img id="img4" src="page1-images/4.jpg" alt="4" class="imgSmall4"></a></li><li class="li4"><a class="aBig5" href="./views2/page5-1.html" style="height: 33vmax !important;"><img id="img8" src="page1-images/8.jpg" alt="8" class="imgBig4"></a><a class="aSmall5" href="./views2/page6-1.html" style="height: 16.5vmax !important;"><img id="img6" src="page1-images/6.jpg" alt="6" class="imgSmall4"></a><a class="aSmall5-1" href="./views2/page7-1.html" style="height: 17.5vmax !important;"><img id="img7" src="page1-images/7.jpg" alt="7" class="imgSmall4-1"></a><a class="aSmall5" href="./views2/page8-1.html" style="height: 16.5vmax !important;"><img id="img5" src="page1-images/5.jpg" alt="5" class="imgSmall4"></a></li><li class="li4"><a class="aSmall5-1" href="./views2/page9-1.html" style="height: 17.5vmax !important;"><img id="img9" src="page1-images/9.jpg" alt="9" class="imgSmall4-1"></a><a class="aBig5" href="./views2/page10-1.html" style="height: 33vmax !important;"><img id="img12" src="page1-images/12.jpg" alt="12" class="imgBig4"></a><a class="aSmall5" href="./views2/page11-1.html" style="height: 16.5vmax !important;"><img id="img11" src="page1-images/11.jpg" alt="11" class="imgSmall4"></a><a class="aSmall5" href="./views2/page12-1.html" style="height: 16.5vmax !important;"><img id="img10" src="page1-images/10.jpg" alt="10" class="imgSmall4"></a></li><li class="li4"><a class="aSmall5" href="./views2/page13-1.html" style="height: 16.5vmax !important;"><img id="img13" src="page1-images/13.jpg" alt="13" class="imgSmall4"></a><a class="aSmall5" href="./views2/page14-1.html" style="height: 16.5vmax !important;"><img id="img14" src="page1-images/14.jpg" alt="14" class="imgSmall4"></a><a class="aSmall5" href="./views2/page15-1.html" style="height: 16.5vmax !important;"><img id="img15" src="page1-images/15.jpg" alt="15" class="imgSmall4"></a><a class="aSmall5" href="./views2/page16-1.html" style="height: 16.5vmax !important;"><img id="img16" src="page1-images/16.jpg" alt="16" class="imgSmall4"></a><a class="aSmall5-1" href="./views2/page17-1.html" style="height: 17.5vmax !important;"><img src="page1-images/17.jpg" alt="17" class="imgSmall4-1"></a></li></ul>');
        }

        function li3(){

            $("#content").append(

                '<ul><li class="li3"><a class="aSmall5" href="./views2/page0-1.html" style="height: 22vmax !important;"><img id="img0" src="page1-images/0.jpg" alt="0" class="imgSmall3"></a><a class="aSmall5" href="./views2/page1-1.html" style="height: 22vmax !important;"><img id="img1" src="page1-images/1.jpg" alt="1" class="imgSmall3"></a><a class="aSmall5" href="./views2/page2-1.html" style="height: 22vmax !important;"><img id="img2" src="page1-images/2.jpg" alt="2" class="imgSmall3"></a><a class="aSmall5-1" href="./views2/page3-1.html" style="height: 23vmax !important;"><img id="img3" src="page1-images/3.jpg" alt="3" class="imgSmall3-1"></a><a class="aSmall5" href="./views2/page4-1.html" style="height: 22vmax !important;"><img id="img4" src="page1-images/4.jpg" alt="4" class="imgSmall3"></a><a class="aSmall5-1" href="./views2/page5-1.html" style="height: 23vmax !important;"><img id="img5" src="page1-images/5.jpg" alt="5" class="imgSmall3-1"></a><a class="aSmall5" href="./views2/page6-1.html" style="height: 22vmax !important;"><img id="img6" src="page1-images/6.jpg" alt="6" class="imgSmall3"></a></li><li class="li3"><a class="aSmall5-1" href="./views2/page7-1.html" style="height: 23vmax !important;"><img id="img7" src="page1-images/7.jpg" alt="7" class="imgSmall3-1"></a><a class="aBig5" href="./views2/page8-1.html" style="height: 44vmax !important;"><img id="img8" src="page1-images/8.jpg" alt="8" class="imgBig3"></a><a class="aSmall5" href="./views2/page9-1.html" style="height: 22vmax !important;"><img id="img9" src="page1-images/9.jpg" alt="9" class="imgSmall3"></a><a class="aSmall5-1" href="./views2/page10-1.html" style="height: 23vmax !important;"><img id="img10" src="page1-images/10.jpg" alt="10" class="imgSmall3-1"></a><a class="aSmall5" href="./views2/page11-1.html" style="height: 22vmax !important;"><img id="img11" src="page1-images/11.jpg" alt="11" class="imgSmall3"></a><a class="aSmall5" href="./views2/page18-1.html" style="height: 22vmax !important;"><img src="page1-images/18.jpg" alt="18" class="imgSmall3"></a></li><li class="li3"><a class="aBig5" href="./views2/page12-1.html" style="height: 44vmax !important;"><img id="img12" src="page1-images/12.jpg" alt="12" class="imgBig3"></a><a class="aSmall5" href="./views2/page13-1.html" style="height: 22vmax !important;"><img id="img13" src="page1-images/13.jpg" alt="13" class="imgSmall3"></a><a class="aSmall5" href="./views2/page14-1.html" style="height: 22vmax !important;"><img id="img14" src="page1-images/14.jpg" alt="14" class="imgSmall3"></a><a class="aSmall5" href="./views2/page15-1.html" style="height: 22vmax !important;"><img id="img15" src="page1-images/15.jpg" alt="15" class="imgSmall3"></a><a class="aSmall5-1" href="./views2/page16-1.html" style="height: 23vmax !important;"><img id="img16" src="page1-images/16.jpg" alt="16" class="imgSmall3-1"></a><a class="aSmall5" href="./views2/page17-1.html" style="height: 23vmax !important;"><img src="page1-images/17.jpg" alt="17" class="imgSmall3-1"></a></li></ul>');
        }

        function li2(){

            $("#content").append(

                '<ul><li class="li2"><a class="aSmall5" href="./views2/page0-1.html" style="height: 33.3vmax !important;"><img id="img0" src="page1-images/0.jpg" alt="0" class="imgSmall2"></a><a class="aSmall5" href="./views2/page1-1.html" style="height: 33.3vmax !important;"><img id="img1" src="page1-images/1.jpg" alt="1" class="imgSmall2"></a><a class="aSmall5" href="./views2/page2-1.html" style="height: 33.3vmax !important;"><img id="img2" src="page1-images/2.jpg" alt="2" class="imgSmall2"></a><a class="aSmall5" href="./views2/page3-1.html" style="height: 33.3vmax !important;"><img id="img3" src="page1-images/3.jpg" alt="3" class="imgSmall2"></a><a class="aSmall5" href="./views2/page4-1.html" style="height: 33.3vmax !important;"><img id="img4" src="page1-images/4.jpg" alt="4" class="imgSmall2"></a><a class="aSmall5" href="./views2/page5-1.html" style="height: 33.3vmax !important;"><img id="img5" src="page1-images/5.jpg" alt="5" class="imgSmall2"></a><a class="aSmall5" href="./views2/page6-1.html" style="height: 33.3vmax !important;"><img id="img6" src="page1-images/6.jpg" alt="6" class="imgSmall2"></a><a class="aSmall5" href="./views2/page7-1.html" style="height: 33.3vmax !important;"><img id="img7" src="page1-images/7.jpg" alt="7" class="imgSmall2"></a><a class="aBig5" href="./views2/page8-1.html" style="height: 66vmax !important;"><img id="img8" src="page1-images/8.jpg" alt="8" class="imgBig2"></a></li><li class="li2"><a class="aSmall5" href="./views2/page9-1.html" style="height: 33.3vmax !important;"><img id="img9" src="page1-images/9.jpg" alt="9" class="imgSmall2"></a><a class="aSmall5" href="./views2/page10-1.html" style="height: 33.3vmax !important;"><img id="img10" src="page1-images/10.jpg" alt="10" class="imgSmall2"></a><a class="aSmall5" href="./views2/page11-1.html" style="height: 33.3vmax !important;"><img id="img11" src="page1-images/11.jpg" alt="11" class="imgSmall2"></a><a class="aBig5" href="./views2/page12-1.html" style="height: 66vmax !important;"><img id="img12" src="page1-images/12.jpg" alt="12" class="imgBig2"></a><a class="aSmall5" href="./views2/page13-1.html" style="height: 33.3vmax !important;"><img id="img13" src="page1-images/13.jpg" alt="13" class="imgSmall2"></a><a class="aSmall5" href="./views2/page14-1.html" style="height: 33.3vmax !important;"><img id="img14" src="page1-images/14.jpg" alt="14" class="imgSmall2"></a><a class="aSmall5" href="./views2/page15-1.html" style="height: 33.3vmax !important;"><img id="img15" src="page1-images/15.jpg" alt="15" class="imgSmall2"></a><a class="aSmall5" href="./views2/page16-1.html" style="height: 33.3vmax !important;"><img id="img16" src="page1-images/16.jpg" alt="16" class="imgSmall2"></a><a class="aSmall5" href="./views2/page17-1.html" style="height: 33.3vmax !important;"><img id="img17" src="page1-images/17.jpg" alt="17" class="imgSmall2"></a></li></ul>');
        }

        function li1(){

            $("#content").append(

                '<ul><li class="li1"><a href="./views2/page0-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img0" src="page1-images/0.jpg" alt="0" class="imgSmall1"></a><a href="./views2/page1-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img1" src="page1-images/1.jpg" alt="1" class="imgSmall1"></a><a href="./views2/page2-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img2" src="page1-images/2.jpg" alt="2" class="imgSmall1"></a><a href="./views2/page3-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img3" src="page1-images/3.jpg" alt="3" class="imgSmall1"></a><a href="./views2/page4-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img4" src="page1-images/4.jpg" alt="4" class="imgSmall1"></a><a href="./views2/page5-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img5" src="page1-images/5.jpg" alt="5" class="imgSmall1"></a><a href="./views2/page6-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img6" src="page1-images/6.jpg" alt="6" class="imgSmall1"></a><a href="./views2/page7-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img7" src="page1-images/7.jpg" alt="7" class="imgSmall1"></a><a href="./views2/page8-1.html" class="aBig5" style="height: 92vmax !important;"><img id="img8" src="page1-images/8.jpg" alt="8" class="imgBig1"></a><a href="./views2/page9-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img9" src="page1-images/9.jpg" alt="9" class="imgSmall1"></a><a href="./views2/page10-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img10" src="page1-images/10.jpg" alt="10" class="imgSmall1"></a><a href="./views2/page11-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img11" src="page1-images/11.jpg" alt="11" class="imgSmall1"></a><a href="./views2/page12-1.html" class="aBig5" style="height: 92vmax !important;"><img id="img12" src="page1-images/12.jpg" alt="12" class="imgBig1"></a><a href="./views2/page13-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img13" src="page1-images/13.jpg" alt="13" class="imgSmall1"></a><a href="./views2/page14-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img14" src="page1-images/14.jpg" alt="14" class="imgSmall1"></a><a href="./views2/page15-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img15" src="page1-images/15.jpg" alt="15" class="imgSmall1"></a><a href="./views2/page16-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img16" src="page1-images/16.jpg" alt="16" class="imgSmall1"></a><a href="./views2/page17-1.html" class="aSmall5" style="height: 66.6vmax !important;"><img id="img17" src="page1-images/17.jpg" alt="17" class="imgSmall1"></a></li></ul>');
        }

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
            
            li5();

            $(".li5").eq(0).delay(0).animate({paddingTop: 0}, 1000);

            $(".li5").eq(1).delay(200).animate({paddingTop: 0}, 1000);

            $(".li5").eq(2).delay(400).animate({paddingTop: 0}, 1000);

            $(".li5").eq(3).delay(600).animate({paddingTop: 0}, 1000);

            $(".li5").eq(4).delay(800).animate({paddingTop: 0}, 1000);

            AddMailAndProjects();

            navLi5();

            contentMouseenter();

            contentMouseleave();

            containerHeight5();

            $("#aboutUs2-2").css("display","block"); 

        }else if( 1401 <= document.body.clientWidth && document.body.clientWidth <= 1800 ){

            li4();

            $(".li4").eq(0).delay(0).animate({paddingTop: 0}, 1000);

            $(".li4").eq(1).delay(200).animate({paddingTop: 0}, 1000);

            $(".li4").eq(2).delay(400).animate({paddingTop: 0}, 1000);

            $(".li4").eq(3).delay(600).animate({paddingTop: 0}, 1000);

            AddMailAndProjects();

            navLi4();

            contentMouseenter();

            contentMouseleave();

            containerHeight4();

            $("#aboutUs2-2").css("display","block"); 

        }else if( 1001 <= document.body.clientWidth && document.body.clientWidth <= 1400 ){

            li3();

            $(".li3").eq(0).delay(0).animate({paddingTop: 0}, 1000);

            $(".li3").eq(1).delay(200).animate({paddingTop: 0}, 1000);

            $(".li3").eq(2).delay(400).animate({paddingTop: 0}, 1000);

            removeMailAndProjects();

            navLi3();

            contentMouseenter();

            contentMouseleave();

            containerHeight3();

            $("#aboutUs2-2").css("display","block"); 

        }else if( 601 <= document.body.clientWidth && document.body.clientWidth <= 1000 ){

            li2();

            $(".li2").eq(0).delay(0).animate({paddingTop: 0}, 1000);

            $(".li2").eq(1).delay(200).animate({paddingTop: 0}, 1000);

            removeMailAndProjects();

            contentMouseenter();

            contentMouseleave();

            containerHeight2();

            $("#aboutUs2-2").css("display","block"); 

        }else{

            li1();

            $(".li1").eq(0).delay(0).animate({paddingTop: 0}, 1000);

            removeMailAndProjects();

            contentMouseenter();

            contentMouseleave();

            containerHeight1();

            $("#aboutUs2-2").css("display","none");                          
        }


// -------------------調整螢幕大小觸發事件--------------------------------------------------

        $(window).resize(function(){

            $("#content").empty();

            if( document.body.clientWidth >= 1801 ){
            
                li5();

                $(".li5").eq(0).addClass('liPaddingTop0');

                $(".li5").eq(1).addClass('liPaddingTop0');

                $(".li5").eq(2).addClass('liPaddingTop0');

                $(".li5").eq(3).addClass('liPaddingTop0');

                $(".li5").eq(4).addClass('liPaddingTop0');

                AddMailAndProjects();

                navLi5();

                contentMouseenter();

                contentMouseleave();

                containerHeight5();

                $("#aboutUs2-2").css("display","block"); 

            }else if( 1401 <= document.body.clientWidth && document.body.clientWidth <= 1800 ){

                li4();

                $(".li4").eq(0).addClass('liPaddingTop0');

                $(".li4").eq(1).addClass('liPaddingTop0');

                $(".li4").eq(2).addClass('liPaddingTop0');

                $(".li4").eq(3).addClass('liPaddingTop0');

                AddMailAndProjects();

                navLi4();

                contentMouseenter();

                contentMouseleave();

                containerHeight4();

                $("#aboutUs2-2").css("display","block"); 

            }else if( 1001 <= document.body.clientWidth && document.body.clientWidth <= 1400 ){

                li3();

                $(".li3").eq(0).addClass('liPaddingTop0');

                $(".li3").eq(1).addClass('liPaddingTop0');

                $(".li3").eq(2).addClass('liPaddingTop0');

                removeMailAndProjects();

                navLi3();

                contentMouseenter();

                contentMouseleave();

                containerHeight3();

                $("#aboutUs2-2").css("display","block"); 

            }else if( 601 <= document.body.clientWidth && document.body.clientWidth <= 1000 ){

                li2();

                $(".li2").eq(0).addClass('liPaddingTop0');

                $(".li2").eq(1).addClass('liPaddingTop0');

                removeMailAndProjects();

                contentMouseenter();

                contentMouseleave();

                containerHeight2();

                $("#aboutUs2-2").css("display","block"); 

            }else{

                li1();

                $(".li1").eq(0).addClass('liPaddingTop0');

                removeMailAndProjects();

                contentMouseenter();

                contentMouseleave();

                containerHeight1();

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

        // $("#cover").on('click', function() {

        //     $("#cover").css("display","none");

        //     if(x == 1){
        //         gifClick();

        //         $("#gif1-1-slideDown").trigger("mouseleave");
        //     }

        //     if(y == 1){
        //         mailClick();

        //         $("#mail2").trigger("mouseleave");
        //     }

        // });



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



// -------------------content圖片動畫(滑入)--------------------------------------------------

        function contentMouseenter(){

            $("#content img").on("mouseenter",function(){

                var altNumber1 = $(this).attr("alt");

                $(this).attr("src","page1-images/"+altNumber1+"-1.jpg");
            });
        }



// -------------------content圖片動畫(離開)--------------------------------------------------

        function contentMouseleave(){

            $("#content img").on("mouseleave",function(){

                var altNumber2 = $(this).attr("alt");

                $(this).attr("src","page1-images/"+altNumber2+".jpg");
            });
        }



// -------------------cover的長度--------------------------------------------------

        function containerHeight5(){

            var totalHeight = 0;

            for(var i = 0; i < 4; i++){

                totalHeight = totalHeight + $("#img" + i).height();
            }

            docStyle.setProperty("--totalHeight",totalHeight);

            requestAnimationFrame(containerHeight5);
        }

        function containerHeight4(){

            var totalHeight = 0;

            for(var i = 0; i < 5; i++){

                totalHeight = totalHeight + $("#img" + i).height();
            }

            docStyle.setProperty("--totalHeight",totalHeight);

            requestAnimationFrame(containerHeight4);
        }

        function containerHeight3(){

            var totalHeight = 0;

            for(var i = 0; i < 7; i++){

                totalHeight = totalHeight + $("#img" + i).height();
            }

            docStyle.setProperty("--totalHeight",totalHeight);

            requestAnimationFrame(containerHeight3);
        }

        function containerHeight2(){

            var totalHeight = 0;

            for(var i = 0; i < 9; i++){

                totalHeight = totalHeight + $("#img" + i).height();
            }

            docStyle.setProperty("--totalHeight",totalHeight);

            requestAnimationFrame(containerHeight2);
        }

        function containerHeight1(){

            var totalHeight = 0;

            for(var i = 0; i < 18; i++){

                totalHeight = totalHeight + $("#img" + i).height();
            }

            docStyle.setProperty("--totalHeight",totalHeight);

            requestAnimationFrame(containerHeight1);
        }



// -------------------news的滑入滑出寬的動畫--------------------------------------------------

        var $li = $("#news>ul>a>li");

        $("#news>ul>a>li").mouseenter(function(){

            $(this).stop().animate({width:"400px"}).siblings().stop().animate({width:"150px"});}).mouseleave(function(){$li.stop().animate({width:"200px"});
        });

       
        



