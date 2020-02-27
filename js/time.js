! function(n) {
	var e = n.document,
		t = e.documentElement,
		i = 2000,
		d = i / 100,
		o = "orientationchange" in n ? "orientationchange" : "resize",
		a = function() {
			var n = t.clientWidth || 320;
			n > 2000 && (n = 2000);
			t.style.fontSize = n / d + "px"
		};
	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);	
	
	 

	$(window).bind('scroll', function() {          
		if($(window).scrollTop() + $(window).height() == $(document).height()) { 
			$(".time").show();
			console.log('到底了')         
		}   
	}); 



	var wait;
	var i = 10;
	var iid = 0;
	iid = setInterval("sTimer()", 1000);
	
	function sTimer() {
		if(i == 0) {
			clearInterval(iid);
			$('.time span')[0].innerHTML='';
			$('.submit').show();
			console.log('1')
		} else {
			$('.time span')[0].innerHTML = i--;
	
		}
	}