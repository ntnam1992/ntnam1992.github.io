$(document).ready(function() {
	setTimeout(function(){$(".js-loader").css({display:"none"});}, 5000);
	var heightObj1 = $('.content-1').offset().top;
	var heightObj2 = $('.content-2').offset().top;
	var heightObj3 = $('.content-3').offset().top;
	var heightObj4 = $('.content-4').offset().top;
	var heightObj5 = $('.content-5').offset().top;
	var flag = 0
	 var delay = 300;
	// console.log(heightObj1,heightObj2,heightObj3,heightObj4,heightObj5);
	
	/**function click img animation */
	$('.list-page li a').click(function(){
		$('.list-page li a').find('img').attr('src','images/scroll-off.png');
		var position = $(this).parent().index();
		$(this).find('img').attr('src','images/scroll-on.png'); //change img when click
		
		console.log(this);
		position = position + 1; //get position div animate
		var height = $('.content-'+ position).offset().top; //get offset top of div to animate
		$("body, html").animate({
			scrollTop: height
		});
	});
		var windowWidth = $(window).width();

	/** if window > 1366 animation img off page
	img-animate("class","action","value animate")
	*/	
		if(windowWidth > 1366){
			imgOpacity(0);
			$(document).scroll(function(){
			// console.log($(window).scrollTop());
			
				if($(window).scrollTop()< heightObj2 - 200){
					
					list_scroll(0);
				}
				if($(window).scrollTop()>= heightObj2 - 200){
					list_scroll(1);
					if(flag <= 0){
						flag = 1;
						list_scroll(1);
						img_animate(".js-animate-1","top",50);
						img_animate(".js-animate-2","left",-354);
					}
				}
				if($(window).scrollTop()>= heightObj3 - 200){
					list_scroll(2);
					if(flag<=1){
						flag=2;
						img_animate(".js-animate-3","top",269);
						img_animate(".js-animate-4","bot",-120);	
					}
				}
				if($(window).scrollTop()>= heightObj4 - 200){
					list_scroll(3);
					if(flag<=2){
						flag=3;
						img_animate(".js-animate-5","top",113);
						img_animate(".js-animate-6","right",-339);	
					}
				}
				if($(window).scrollTop()>= heightObj5 - 200){
					list_scroll(4);
					if(flag<=3){
						flag=4;
						img_animate(".js-animate-11","left",-358);
						img_animate(".js-animate-7","fly",20);
						img_animate(".js-animate-8","fly",345);
						img_animate(".js-animate-9","fly",580);
						img_animate(".js-animate-10","fly",820);
					}
				}
			});
		}else{
			imgOpacity(1);
			$(document).scroll(function(){
			// console.log($(window).scrollTop());
			
				if($(window).scrollTop()< heightObj2 - 200){
					
					list_scroll(0);
				}
				if($(window).scrollTop()>= heightObj2 - 200){
					list_scroll(1);
					
				}
				if($(window).scrollTop()>= heightObj3 - 200){
					list_scroll(2); 
					
				}
				if($(window).scrollTop()>= heightObj4 - 200){
					list_scroll(3);
					
				}
				if($(window).scrollTop()>= heightObj5 - 200){
					list_scroll(4);
					
				}
			});
		}
	/**function change img when scroll*/

	function list_scroll(x)
	{
		$(".list-page li a").find('img').attr('src','images/scroll-off.png');
		$(".list-page li").eq(x).find('a').find('img').attr('src','images/scroll-on.png');
	}
	/**function set img opacity*/
	function imgOpacity(value){
		$('.js-animate-1,.js-animate-2,.js-animate-3,.js-animate-4,.js-animate-5,.js-animate-6,.js-animate-7,.js-animate-8,.js-animate-9,.js-animate-10,.js-animate-11').css({opacity : value})
	}
	function img_animate (js_class,action,value) {
		if(action=="top")
		{
			$(js_class).css({top:"-500px"}); //set top = -500px;
			$(js_class).animate({top:value+50,opacity:1},500); //animate top and opacity 
			$(js_class).animate({top:"-=50px"},200); //animate top and opacity 
		}
		else if(action=="left")
		{
			$(js_class).css({left:"-1000px"});  //set left = -1000px;
			$(js_class).animate({left:value+50,opacity:1},500); //animate left and opacity 
			$(js_class).animate({left:"-=50px"},200);//animate left and opacity
		}
		else if(action=="bot")
		{
			$(js_class).css({top:"1000px"}); //set top = 1000px;
			$(js_class).animate({top:value-50,opacity:1},500);//animate bttom to top and opacity
			$(js_class).animate({top:"+=50px"},200);//animate bttom to top and opacity
		}
		else if(action=="right")
		{
			$(js_class).css({right:"-1000px"});//set right = -1000px;
			$(js_class).animate({right:value+50,opacity:1},500);//animate right and opacity 
			$(js_class).animate({right:"-=50px"},500);//animate right and opacity 
		}
		else if(action=="fly")
		{
			$(js_class).css({left:"-1000px",top:"1000px",position:"absolute"}); //set left = -1000px & top = 1000px
			$(js_class).animate({left:value+50,top:175,opacity:1},delay);//animate left ,top and opacity
			$(js_class).animate({left:"-=50px",top:"-=10px"},200);//animate left ,top and opacity
			delay += 300;
		}
	}
});