$(document).ready(function(){
	var h1,h2;
	var h0 = 0;
	var itemWidth = $('.js-process').width();
	itemWidth = itemWidth/2;
		$('.triangle2-sp').css({borderLeft: itemWidth +'px'});
		$('.triangle2-sp').css({borderRight: itemWidth +'px'});
		$('.triangle2-sp').css({borderStyle: "solid"});
		$('.triangle2-sp').css({borderLeftColor: "transparent"});
		$('.triangle2-sp').css({borderRightColor: "transparent"});

		$('.triangle1-sp').css({borderLeft: itemWidth +'px'});
		$('.triangle1-sp').css({borderRight: itemWidth +'px'});
		$('.triangle1-sp').css({borderStyle: "solid"});
		$('.triangle1-sp').css({borderLeftColor: "transparent"});
		$('.triangle1-sp').css({borderRightColor: "transparent"});
	$( window ).resize(function() {
	  	itemWidth = $('.js-process').width();
		itemWidth = itemWidth/2;
		console.log(itemWidth);
		// $('.triangle2-sp').css({borderLeft: itemWidth+'px solid transparent'});
		// $('.triangle2-sp').css({borderRight: itemWidth+'px solid transparent'});
		// $('.triangle1-sp').css({borderLeft: itemWidth+'px solid transparent'});
		// $('.triangle1-sp').css({borderRight: itemWidth+'px solid transparent'});
		$('.triangle2-sp').css({borderLeft: itemWidth +'px'});
		$('.triangle2-sp').css({borderRight: itemWidth +'px'});
		$('.triangle2-sp').css({borderStyle: "solid"});
		$('.triangle2-sp').css({borderLeftColor: "transparent"});
		$('.triangle2-sp').css({borderRightColor: "transparent"});

		$('.triangle1-sp').css({borderLeft: itemWidth +'px'});
		$('.triangle1-sp').css({borderRight: itemWidth +'px'});
		$('.triangle1-sp').css({borderStyle: "solid"});
		$('.triangle1-sp').css({borderLeftColor: "transparent"});
		$('.triangle1-sp').css({borderRightColor: "transparent"});

	});
		
	$(".js-ckeck").click(function(){
		var test = $(this).hasClass("check-act");
		if(test == false){
			$(".js-ckeck").removeClass('check-act');
			$(this).addClass('check-act');
		}
	});

	// $(".mean-nav li").click(function(){
	// 	//if( $(this).find(".subNav").length > 0){
	// 		console.log("aaaaaa");
	// 	// }
	// });
	$(document).on("click",".mean-nav li",function(){
		var l = $(this).find(".subNav").length;
		console.log(l);
		if( $(this).find(".subNav").length > 0 & !$(this).hasClass("active")){
			$(this).addClass("active")
		}
		else{

				$(this).removeClass("active");
			
		}
	});
	$('.js-sub').click(function(){
		var test = $(this).hasClass('btn-change');
		var subBtn = $(this).hasClass('btn-sub');
		var addBtn = $(this).hasClass('btn-add');
		var objAnimate;
		if (subBtn== true & test == false) {
			$(this).parent().find(".btn-change").removeClass("btn-change");
			$(this).addClass("btn-change");
			objAnimate = $(this).parent().parent().parent().parent().find(".content-1")
			console.log(objAnimate);
			objAnimate.hide()

		}
		if (addBtn== true & test == false) {
			$(this).parent().find(".btn-change").removeClass("btn-change");
			$(this).addClass("btn-change");
			objAnimate = $(this).parent().parent().parent().parent().find(".content-1")
			objAnimate.show()

		}
	});
	function animate(obj,height){
		$("obj").animate({height : h0},500);
	}
});