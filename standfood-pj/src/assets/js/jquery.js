$(document).ready(function(){
	$(".js-extend").hide();
	$(".js-check").click(function(){
		var subBtn = $(this).hasClass("btn__sub");
		var addBtn = $(this).hasClass("btn__add");
		var test = $(this).hasClass("active");
		$(".js-check").css({"pointer-events":"none"});
		if (subBtn== true & test == true) {
			$(this).removeClass("active");
			$(this).parent().parent().find(".js-add").addClass("active");
			var tadShow = $(this).attr("data-show");
			$("#" + tadShow).slideUp(500);
		}
		if (addBtn== true & test == true) {
			$(this).removeClass("active");
			$(this).parent().parent().find(".js-sub").addClass("active");
			var tadShow = $(this).attr("data-show");
			$("#" + tadShow).slideDown(500);
		}
		setTimeout(function(){ $(".js-check").css({"pointer-events":"auto"}); }, 400);
	});
	$(".nav__menu > ul > li").click(function(){
		$(".nav__menu > ul > li").removeClass("active");
		$(this).addClass("active");
	})
	$(".subNav > li").click(function(){
		$(".subNav > li").removeClass("active");
		$(this).addClass("active");
	})

	$(".js-label").click(function(){

		$('#id_accept').change(function () {
			if($(this).is(':checked')) {
				$(".js-check-on,.js-check-off").removeClass("active");
				$(".js-check-on").addClass("active");
					return;
			}
			$(".js-check-on,.js-check-off").removeClass("active");
			$(".js-check-off").addClass("active");

		});

	});
});
