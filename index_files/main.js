;function publication(h){
	var a=$('#publication').html().match('<a .*<\/a>')[0];
	$('#publication').html(h+a);
};
(function($,undefined){
	$(document).ready(function(){
		var H=$('#headshot').height();
		$(window).bind('resize',resize);
		resize();
		$.ajax('http://mbi.ee.ncku.edu.tw/publication',{dataType:'jsonp'});
		function resize(){
			var m=5;
			var h=$('#basic').height()-m;if(h>H)h=H;
			$('#headshot').height(h);
			$('#basic').width($('#wrap').width()-$('#headshot').width()-m);
		}
	});
})(jQuery); // Appending a semicolon (;) to close the plugin for compressing.
// vi:nowrap:sw=2:ts=2
