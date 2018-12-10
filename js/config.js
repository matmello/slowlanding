$(document).ready(function(){

	centralizaLogin();

	function centralizaLogin() {
		var windowUser    = $(window).height()/2;
		var centralizaBox = $('body .container-center-vertical').height()/2;
		var numTotal      = ($(window).height()/2) - ($('body .container-center-vertical').height()/2);
		$('.container-center-vertical').stop().animate({
			marginTop: numTotal +'px'
		}, 600);
	}

	$(window).on('resize', function() {
		centralizaLogin();
	});	

});