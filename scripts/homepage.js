//Script for Homepage
$(function(){
	$('#slide2').loopedSlider({
		autoStart: 5000,
		restart: 10000
	});
});
$(function() {
    $('#featuredcnt').cycle({
        fx:      'fade,scrollLeft,scrollRight',
        timeout: 10000, 
    	speed:   1500,
        prev:    '.previous',
        next:    '.next, #slide1',
    });
});
