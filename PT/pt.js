$(window).on('loading' , function(event){
	$('body').removeClass('preloading');
	$('.loading').delay(1000).fadeOut('fast');
});
/*$(window).on("loading",function(){var e=$(".preloading"),.fadeOut(function(){e.fadeOut(),a.addClass("loading")})})*/