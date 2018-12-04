$(document).ready(function () {

	var widthd = screen.width;
	console.log(widthd);
	var $navHeight = $('.navbar-nav').height();
		console.log($navHeight);
		var $hi = 0;
		$('.dropdown-menu').each(function() {
			var h = $(this).height();
			if (h > $hi) {
				$hi = h;
			}
		});
		$maxHeight = $hi + 50;

	if (widthd >= 992) {
		$('.dropdown-toggle').mouseover(function() {
			$('.dropdown-menu').show(0);
			$('.navbar-nav').animate({
				height: $maxHeight + 'px'
			});
			$('.dropdown-menu').animate({
				height: $hi + 'px',
			});
			// $('.nav-item').unbind("mouseover mouseenter");
		});

		$('.dropdown-toggle').mouseout(function() {
		
			t = setTimeout(function() {
				
				$('.navbar-nav').animate({
					height: $navHeight + 'px'
				});
				$('.dropdown-menu').hide(0);
			}, 0);


			$('.dropdown-menu').on('mouseenter', function() {
				$('.dropdown-menu').show(0);
				clearTimeout(t);
			}).on('mouseleave', function() {
				$('.dropdown-menu').hide(0);
			});
		});
	}



	if (widthd >= 992) {
		$('.dropdown-toggle').click(function() {
			$('.dropdown-menu').show(0);
			$('.navbar-nav').animate({
				height: $maxHeight + 'px'
			});
			$('.dropdown-menu').animate({
				height: $hi + 'px',
			});
		});

		$('.dropdown-toggle').click(function() {
			$('.navbar-nav').animate({
					height: $navHeight + 'px'
				});
				$('.dropdown-menu').hide(0);
			}, 0);
		
			t = setTimeout(function() {

			$('.dropdown-menu').on('click', function() {
				$('.dropdown-menu').show(0);
				clearTimeout(t);
			}).on('click', function() {
				$('.dropdown-menu').hide(0);
			});
		});
	}
});
