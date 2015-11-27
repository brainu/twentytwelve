jQuery(window).scroll(function() {
	var st = jQuery(this).scrollTop(),
	backToTop = jQuery('.back-to-top');
	if (st > 200) {
			backToTop.removeClass('u-hide');
		} else {
			backToTop.addClass('u-hide');
	}
})
console.log('QQ:7000290');
	
var backToTop = function() {
		jQuery("html,body").animate({
			scrollTop: 0
		},
		800);
	}
