$(function(){
	$(".li").mouseover(function(){
		$(this).children(".second-list").show();
	})
	$(".li").mouseout(function(){
		$(this).children(".second-list").hide();
	})
})