$(document).ready(function(){
	
	$(window).on("scroll",function(){
		if($(this).scrollTop()>$("#global-header").outerHeight()){
			$("#global-header").addClass("gnb-scroll");
		}else{
			$("#global-header").removeClass("gnb-scroll");
		}
	});

	$('.gnb-list-main-full').each(function() {
		$(this).hover(function(e) {
			$('nav.gnb').stop().addClass('gnb-list-opened');
		}, function() {
			$('nav.gnb').stop().removeClass('gnb-list-opened');
		});
	});

	if ($('.mainvisual').length > 0)	{
		$('.mainvisual .owl-carousel').owlCarousel({
			items: 1,
			dots: true,
			loop: true,
			mouseDrag: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: false
		})
	}

	if ($('.box_speakers').length > 0)	{
		$('.box_speakers .owl-carousel').owlCarousel({
			slideBy: 1,
			margin: 10,
			items:3,
			autoplay: true,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			autoplaySpeed: 1000,
			loop: true,
			dots: false,
			nav: true
		})
	}
});