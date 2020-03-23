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
	});
