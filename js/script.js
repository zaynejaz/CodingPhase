(function ($) {
	'use strict';


	// PRELOADER   
	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	//   FIXED NAVBAR
	$(window).on('scroll', function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 10) {
			$('.navigation').addClass('nav-bg');
		} else {
			$('.navigation').removeClass('nav-bg');
		}
	});

	// BG IMGs
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

	// VENOBOX POPUP **NOT USING BUT CAN ADD IN 
	$('.venobox').venobox();

	//  COUNTER
	function counter() {
		var oTop;
		if ($('.counter').length !== 0) {
			oTop = $('.counter').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.counter').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});


	// SLICK SLIDER - TESTIMONIALS 
	$('.testimonial-slider-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		nextArrow: '<buttton class="nextarrow"></buttton>',
		prevArrow: '<buttton class="prevarrow"></buttton>'
	});


	// SLICK SLIDER - COURSES
	$('.course-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		nextArrow: '<buttton class="nextarrow"></buttton>',
		prevArrow: '<buttton class="prevarrow"></buttton>',
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	// AOS
	AOS.init({
		once: true,
		offset: 250,
		easing: 'ease',
		duration: 800
	});


})(jQuery);



