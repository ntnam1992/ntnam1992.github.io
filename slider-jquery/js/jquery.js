$(document).ready(function(){
	var btnPre = $(".js-pre");
	var btnNext = $(".js-next")
	var maxImg = 4;
	
	var list; 
	var minImg = 0;
	var count = 0;
	var temp = 0
	var widthImg = $('.slider__item-info img').width();
	var positionItem;
	setInterval(function() {
		// var listImg = $("slider__item-info ").eq;
		// for( var i = 0; i < maxImg +1 ;i++)
		// 	if(listImg(i) == 4){
		// 		i = 0
		// 		listImg(4).style.dislay = "none";
		// 		listImg(i).style.dislay = "block";
		// 	}
		// 	listImg(i).style.dislay = "none";
		// 	listImg(i+1).style.dislay = "block";


	});
	$(".slider").on("click",".js-next",function(){
		count++;
		if( count > maxImg ){
			count = 0;
			// $(".slider__item-info li ").eq(maxImg).css('display','none');
			// $(".slider__item-info li ").eq(count).css('display','block');
			// $(".slider__item-nav li ").css('opacity',1);
			// $(".slider__item-nav li ").eq(count).css('opacity',0.5);
			animate(count);
			$(".slider__item-info").animate({right:widthImg*(count)},600);

			
			 
		}else{
			// $(".slider__item-info li ").eq(count).css('display','none');
			// $(".slider__item-info li ").eq(count+1).css('display','block');
			// $(".slider__item-nav li ").css('opacity',1);
			// $(".slider__item-nav li ").eq(count +1).css('opacity',0.5);
			animate(count);
			$(".slider__item-info").animate({right:widthImg*(count)},600);
			
			
		}	
		

	});
	$(".slider").on("click",".js-pre",function(){
		count--;
		var temp = 4
		if( count < 0 ){
			count = maxImg
			// $(".slider__item-info li ").eq(minImg).css('display','none');
			// $(".slider__item-info li ").eq(count).css('display','block');
			// $(".slider__item-nav li ").css('opacity',1);
			// $(".slider__item-nav li ").eq(count).css('opacity',0.5);
			

		}

			// $(".slider__item-info li ").eq(count).css('display','none');
			// $(".slider__item-info li ").eq(count -1).css('display','block');
			// $(".slider__item-nav li ").css('opacity',1);
			// $(".slider__item-nav li ").eq(count -1).css('opacity',0.5);
			animate(count)
			$(".slider__item-info").animate({right:widthImg*(count)},600);
		
			
	});
	$(".slider__item-nav li").click(function(){
		var positionItem = $(this).index();
		animate(positionItem);
		count = positionItem;
		$(".slider__item-info").animate({right:widthImg*(count)},600);		
		// $(".slider__item-info li ").css('display','none');
		// $(".slider__item-info li").eq(positionItem).css('display','block');
		// $(".slider__item-nav li").css('opacity',1);
		// $(".slider__item-nav li").eq(positionItem).css('opacity',0.5);
		

	});	
	function animate(count){
			
	    // $(".slider__item-info li ").css('display','none');
	    // $(".slider__item-info li ").eq(count).css('display','block');
		$(".slider__item-nav li ").css('opacity',1);
		$(".slider__item-nav li ").eq(count).css('opacity',0.5);
		


	}
});