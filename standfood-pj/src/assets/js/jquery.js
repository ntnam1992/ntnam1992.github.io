$(document).ready(function(){
	$(".js-extend").hide();

	// var h1,h2;
	// var h0 = 0;
	// var itemWidth = $('.js-process').width();
	// itemWidth = itemWidth/2;
	// 	$('.triangle2-sp').css({borderLeft: itemWidth +'px'});
	// 	$('.triangle2-sp').css({borderRight: itemWidth +'px'});
	// 	$('.triangle2-sp').css({borderStyle: "solid"});
	// 	$('.triangle2-sp').css({borderLeftColor: "transparent"});
	// 	$('.triangle2-sp').css({borderRightColor: "transparent"});

	// 	$('.triangle1-sp').css({borderLeft: itemWidth +'px'});
	// 	$('.triangle1-sp').css({borderRight: itemWidth +'px'});
	// 	$('.triangle1-sp').css({borderStyle: "solid"});
	// 	$('.triangle1-sp').css({borderLeftColor: "transparent"});
	// 	$('.triangle1-sp').css({borderRightColor: "transparent"});
	// $( window ).resize(function() {
	//   	itemWidth = $('.js-process').width();
	// 	itemWidth = itemWidth/2;
	// 	console.log(itemWidth);
	// 	// $('.triangle2-sp').css({borderLeft: itemWidth+'px solid transparent'});
	// 	// $('.triangle2-sp').css({borderRight: itemWidth+'px solid transparent'});
	// 	// $('.triangle1-sp').css({borderLeft: itemWidth+'px solid transparent'});
	// 	// $('.triangle1-sp').css({borderRight: itemWidth+'px solid transparent'});
	// 	$('.triangle2-sp').css({borderLeft: itemWidth +'px'});
	// 	$('.triangle2-sp').css({borderRight: itemWidth +'px'});
	// 	$('.triangle2-sp').css({borderStyle: "solid"});
	// 	$('.triangle2-sp').css({borderLeftColor: "transparent"});
	// 	$('.triangle2-sp').css({borderRightColor: "transparent"});

	// 	$('.triangle1-sp').css({borderLeft: itemWidth +'px'});
	// 	$('.triangle1-sp').css({borderRight: itemWidth +'px'});
	// 	$('.triangle1-sp').css({borderStyle: "solid"});
	// 	$('.triangle1-sp').css({borderLeftColor: "transparent"});
	// 	$('.triangle1-sp').css({borderRightColor: "transparent"});

	// });
		



		$('.js-check').click(function(){
			var subBtn = $(this).hasClass('btn__sub');
			var addBtn = $(this).hasClass('btn__add');
			var test = $(this).hasClass('active');
			$(".js-check").css({'pointer-events':'none'});
			if (subBtn== true & test == true) {
				$(this).removeClass('active');
				$(this).parent().parent().find('.js-add').addClass('active');
				var tadShow = $(this).attr('data-show');
				$("#" + tadShow).slideUp(500);
			}
			if (addBtn== true & test == true) {
				$(this).removeClass('active');
				$(this).parent().parent().find('.js-sub').addClass('active');
				var tadShow = $(this).attr('data-show');
				$("#" + tadShow).slideDown(500);
			}
			setTimeout(function(){ $(".js-check").css({'pointer-events':'auto'}); }, 400);
		});
	});
