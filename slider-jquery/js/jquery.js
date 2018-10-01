$(document).ready(function(){
	var btnPre = $(".js-pre");
	var btnNext = $(".js-next")
	var maxImg = 4
	var list; 
	var minImg = 0;
	var count = 0;
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
		
		if( count == maxImg ){
			count = 0
			$(".slider__item-info li ").eq(maxImg).css('display','none');
			$(".slider__item-info li ").eq(count).css('display','block');
			$(".slider__item-nav li ").css('opacity',1);
			$(".slider__item-nav li ").eq(count).css('opacity',0.5);
			
			 
		}else{
			$(".slider__item-info li ").eq(count).css('display','none');
			$(".slider__item-info li ").eq(count+1).css('display','block');
			$(".slider__item-nav li ").css('opacity',1);
			$(".slider__item-nav li ").eq(count +1).css('opacity',0.5);
			
			
			count++;
		}	

	});
	$(".slider").on("click",".js-pre",function(){
		
		if( count == minImg ){
			count = 4
			$(".slider__item-info li ").eq(minImg).css('display','none');
			$(".slider__item-info li ").eq(count).css('display','block');
			$(".slider__item-nav li ").css('opacity',1);
			$(".slider__item-nav li ").eq(count).css('opacity',0.5);
		}else{
			$(".slider__item-info li ").eq(count).css('display','none');
			$(".slider__item-info li ").eq(count -1).css('display','block');
			$(".slider__item-nav li ").css('opacity',1);
			$(".slider__item-nav li ").eq(count -1).css('opacity',0.5);
			count--;
		}	
	});
	$(".slider__item-nav li").click(function(){
		var positionItem = $(this).index();		
		$(".slider__item-info li ").css('display','none');
		$(".slider__item-info li").eq(positionItem).css('display','block');
		$(".slider__item-nav li").css('opacity',1);
		$(".slider__item-nav li").eq(positionItem).css('opacity',0.5);

	});	
});