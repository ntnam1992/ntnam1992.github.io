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
	/** Event click button next */
	$(".js-slider").on("click",".js-next",function(){
		count++;
		if( count > maxImg ){
			count = 0;
		}
			animate(count);

	});
	/** Event click button pre */
	$(".js-slider").on("click",".js-pre",function(){
		count--;
		if( count < 0 ){
			count = maxImg;
		}
			animate(count);		
			
	});
	/** Event click list img  */
	$(".js-nav li").click(function(){
		var positionItem = $(this).index();
		animate(positionItem);
		count = positionItem;
	});	
	function animate(count){
		$(".js-nav li ").css('opacity',1); //reset opacity list item
		$(".js-nav li ").eq(count).css('opacity',0.5); // add opacity at position count
		$(".js-item").animate({right:widthImg*(count)},600);
		timeOut();	

	}
	/**click after animate*/
	function timeOut() {
    $(".js-event").css({pointerEvents:'none'});
    setTimeout(function(){
     $(".js-event").css({pointerEvents:'auto'})
 	},1000 );
}
});