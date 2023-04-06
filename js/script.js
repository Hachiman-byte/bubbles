$(document).ready(function(){
	$("html").click(function(){
		let random1 = Math.floor(Math.random() * (91-1)+1);
		let random2 = Math.floor(Math.random() * (91-1)+1);

		let color1 = Math.floor(Math.random() * (256-1)+1);
		let color2 = Math.floor(Math.random() * (256-1)+1);
		let color3 = Math.floor(Math.random() * (256-1)+1);
		let color4 = Math.floor(Math.random() * (256-1)+1);

		let top = Math.floor(Math.random() * (200-1)+1);
		let left = Math.floor(Math.random() * (200-1)+1);

		let color ="rgba("+color1+","+color2+","+color3+","+color4+")";

		$("body").prepend("<div id='bubbles'></div>");
		$("#bubbles").css("top",random1+"%").css("left",random2+"%").css("background-color",color).animate({top:top+"%",left:left+"%"},3500);
	});
});