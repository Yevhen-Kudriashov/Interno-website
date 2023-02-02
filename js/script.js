$(document).ready(function () {
	$('.item-contacts__title').click(function (event) {
		$(this).toggleClass('.active').nextAll().slideToggle(300);
	})

	$('.icon-menu, .close-icon-menu').click(function (event) {
		$('body').toggleClass('lock');
	})
})