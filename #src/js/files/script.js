
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.pricing__item-one').click(function(event) {
		$('.pricing__item-a').toggleClass('active');
	});
	
});
