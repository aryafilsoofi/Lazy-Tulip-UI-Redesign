
// Change the nav background color on scroll

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
});