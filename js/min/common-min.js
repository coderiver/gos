head.ready(function() {

	$(document).on("click", function(){
		// $(".js-popup").hide();
		$('.js-side-menu').removeClass('is-visible');
	});

	// $('.menu-flex').flexMenu({
	// 	'threshold' : 1, // [integer] If there are this many items or fewer in the list, we will not display a "View More" link and will instead let the list break to the next line. This is useful in cases where adding a "view more" link would actually cause more things to break  to the next line.
	// 	'cutoff' : 0, // [integer] If there is space for this many or fewer items outside our "more" popup, just move everything into the more menu. In that case, also use linkTextAll and linkTitleAll instead of linkText and linkTitle. To disable this feature, just set this value to 0.
	// 	'linkText' : '•••', // [string] What text should we display on the "view more" link?
	// 	'linkTitle' : '', // [string] What should the title of the "view more" button be?
	// 	'linkTextAll' : 'Меню', // [string] If we hit the cutoff, what text should we display on the "view more" link?
	// 	'linkTitleAll' : '', // [string] If we hit the cutoff, what should the title of the "view more" button be?
	// 	'showOnHover' : true, // [boolean] Should we we show the menu on hover? If not, we'll require a click. If we're on a touch device - or if Modernizr is not available - we'll ignore this setting and only show the menu on click. The reason for this is that touch devices emulate hover events in unpredictable ways, causing some taps to do nothing.
	// 	'popupAbsolute' : true, // [boolean] Should we absolutely position the popup? Usually this is a good idea. That way, the popup can appear over other content and spill outside a parent that has overflow: hidden set. If you want to do something different from this in CSS, just set this option to false.
	// 	'undo' : false // [boolean] If this is true, we'll move the list items back to where they were before, and remove the "View More" link. This is useful if you actually do want list items to stack in some cases, or if you want to recalculate the menu.
	// });

	$('.menu__btn_search').on('click', function() {
		$('.header__search').toggleClass('is-visible');
		$(this).toggleClass('is-active');
	});

	$('.header__search-close').on('click', function() {
		$('.header__search').removeClass('is-visible');
		$('.menu__btn_search').removeClass('is-active');
	});

	$('.js-show-menu').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.js-side-menu').toggleClass('is-visible');
		console.log("hi");
	});

	$('.side-menu__close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.js-side-menu').removeClass('is-visible');
	});

	$('.js-side-menu').on('click', function(event) {
		event.stopPropagation();
	});

	//topslider
	$('.topslider__pics').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: '.slide',
		asNavFor: '.topslider__captions',
		prevArrow: '.topslider__prev',
		nextArrow: '.topslider__next'
	});

	$('.topslider__captions').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: '.caption',
		asNavFor: '.topslider__pics',
		arrows: false
	});

	//gallery
	$('.gallery__slides').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: '.gallery__slide',
		asNavFor: '.gallery__carousel-slides',
		adaptiveHeight: true,
		arrows: false
	});

	$('.gallery__carousel-slides').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		slide: '.gallery__carousel-slide',
		asNavFor: '.gallery__slides',
		prevArrow: '<div class="gallery__prev"></div>',
		nextArrow: '<div class="gallery__next"></div>',
		appendArrows: '.gallery__nav',
		focusOnSelect: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});


	//toggle gallery autoplay
	var galleryAutoplayStatus = 0;
	$('.gallery__carousel-autoplay').on('click', function(event){
		$(this).toggleClass('is-active');
		var targetGallery = $(this).siblings('.gallery__carousel-slides');
		if (galleryAutoplayStatus === 0) {
			targetGallery.slickPlay();
			galleryAutoplayStatus++;
		} else {
			targetGallery.slickPause();
			galleryAutoplayStatus--;
		};
	});

	// menuFlex('.menu-flex');
	$('.menu-flex').menuFlex();
});

(function($) {

	$.fn.menuFlex = function() {

		var _this = this;

		_this.each(function(index, el) {
			console.log(_this);

			// console.log(_this);
			// console.log(_this.children().length);
			var menuHTML  = _this.html();
			var menuWidth = _this.width();
			var menuItems = _this.children();
			console.log(menuWidth);
			console.log(menuItems.length);

			var itemsWidth = 0;

			for (var i = 0; i <= menuItems.length - 1; i++) {
				itemsWidth += menuItems[i].offsetWidth;
			};

			for ( i = menuItems.length - 1; i >= 0; i--) {
				if (itemsWidth > menuWidth) {
					itemsWidth -= menuItems[i].offsetWidth;
					_this.find('li:last-child').appendTo('.menuMore').remove();
					console.log('wow');
				} else {
					break;
				};
			};

			console.log(itemsWidth);
			console.log(menuItems.length);



		});

	};

})(jQuery);

