
$(document).ready(function(){
	var flag = 0;
	var oldPosition,position;

	$(".js-nav li p").hide();

	/**event click menu show menu*/
	$(".js-nav li").on("click",".js-img",function(){
		animteMenu(this);
	});

	/**event button about show popup*/
	$(".js-about").click(function(){
		animatePopup(this);
	});
	/**event button close ,close pop up*/
	$(".js-close").click(function(){
		closeBtn();
	});
	

	 function animteMenu(element){
		var position = $(element).parent().index();
		var src = $(element).attr("src");

		if(flag == 0){
			$(element).attr("src", src.replace(".jpg", "_hover.jpg")); //change images when active
			oldPosition = position;
			$(element).parent().find("p").show(); //show menu
			$(element).parent().find("p").animate({height: "270px"},1000); // effect animate when click menu
			timeOut();
			flag = 1;

		}else if(flag == 1){
			if(oldPosition == position){
				$(element).attr("src", src.replace( "_hover.jpg",".jpg")); //change images when active
				$(element).parent().find("p").animate({height:"0"},1000); // effect close menu
				timeOut(); // time out pointer-events
				setTimeout(function() {$(".js-nav li p").eq(position).hide();},1000); //hide menu
				
				
				flag = 0;
			}else{
				$(".js-nav li").eq(oldPosition).children().attr("src", $(".js-nav li").eq(oldPosition).children().attr("src").replace( "_hover.jpg",".jpg"));
				// change image menu old
				$(element).attr("src", src.replace(".jpg", "_hover.jpg"));//change new images menu
				$(element).parent().find("p").show(); //show menu
				$(element).parent().find("p").animate({height:"270px"},1000);//effect animate
				timeOut();// time out pointer-events
				$(".js-nav li").eq(oldPosition).find("p").hide();//hide old menu
				$(".js-nav li").eq(oldPosition).find("p").animate({height:"0"},1000);//effect close menu


				oldPosition = position;
				flag = 1;
			}
		}
				
	}
	function timeOut() {
    	$(".js-event").css({pointerEvents:'none'});
    	setTimeout(function(){
	     $(".js-event").css({pointerEvents:'auto'})
	 	},1010 );
	}

	function animatePopup(element){
		var btnIndex = $(element).parent().parent().index();
		if(btnIndex == 0 || btnIndex == 2 || btnIndex == 4 ){
			$(".js-popup-1").animate({top : "100px"},900);
		}else{
			$(".js-popup-2").animate({top : "100px"},900);
		}
	}
	function closeBtn(){
		$(".js-popup-1").hide();
		$(".js-popup-2").hide();
		$(".js-popup-1").animate({top : "-380px"},900);
		$(".js-popup-2").animate({top : "-380px"},900);
		setTimeout(function() {$(".js-popup-1").show();},950);
		setTimeout(function() {$(".js-popup-2").show();},950);
	}
});