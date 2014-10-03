head.ready(function() {

	$(document).on("click", function(){
		// $(".js-popup").hide();
		$('.js-side-menu').removeClass('is-visible');
	});

	$('.menu-flex').flexMenu({
		'threshold' : 1, // [integer] If there are this many items or fewer in the list, we will not display a "View More" link and will instead let the list break to the next line. This is useful in cases where adding a "view more" link would actually cause more things to break  to the next line.
		'cutoff' : 0, // [integer] If there is space for this many or fewer items outside our "more" popup, just move everything into the more menu. In that case, also use linkTextAll and linkTitleAll instead of linkText and linkTitle. To disable this feature, just set this value to 0.
		'linkText' : '•••', // [string] What text should we display on the "view more" link?
		'linkTitle' : '', // [string] What should the title of the "view more" button be?
		'linkTextAll' : 'Меню', // [string] If we hit the cutoff, what text should we display on the "view more" link?
		'linkTitleAll' : '', // [string] If we hit the cutoff, what should the title of the "view more" button be?
		'showOnHover' : false, // [boolean] Should we we show the menu on hover? If not, we'll require a click. If we're on a touch device - or if Modernizr is not available - we'll ignore this setting and only show the menu on click. The reason for this is that touch devices emulate hover events in unpredictable ways, causing some taps to do nothing.
		'popupAbsolute' : true, // [boolean] Should we absolutely position the popup? Usually this is a good idea. That way, the popup can appear over other content and spill outside a parent that has overflow: hidden set. If you want to do something different from this in CSS, just set this option to false.
		'undo' : false // [boolean] If this is true, we'll move the list items back to where they were before, and remove the "View More" link. This is useful if you actually do want list items to stack in some cases, or if you want to recalculate the menu.
	});

	$('.menu__btn_search').on('click', function() {
		$('.header__search').toggleClass('is-visible');
		$(this).toggleClass('is-active');
	});

	$('.header__search-close').on('click', function() {
		// $('.header__search').fadeOut(200);
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

});