$('#collapse-navbar').on('show.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, 10%');

});

$('#collapse-navbar').on('hide.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, -50%');
});

$('.scroll').on('click', function(event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 1000);
});