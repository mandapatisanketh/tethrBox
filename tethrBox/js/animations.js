$(document).ready(function(){
	$("#businessAnimate").hide();
	$("#businessAnimate1").hide();
	var newsCount = 1;
	$('#menuIcon').click(function(){
		$('#sideBar').show();
	})
	$('#firstImage').height($(window).height());
	$(window).on('resize', function(){
		$('#firstImage').height($(window).height());
	})
	$("#next").click(function(){
		$("#newsContent"+newsCount).hide();
		if(newsCount == 2){
			newsCount = 1;
		}
		else{
			newsCount++;
		}
		$("#newsContent"+newsCount).slideDown(1000);
	})
	$("#prev").click(function(){
		$("#newsContent"+newsCount).hide();
		if(newsCount == 1){
			newsCount = 2;
		}
		else{
			newsCount--;
		}
		$("#newsContent"+newsCount).slideDown(1000);
	})
	$("#business").mouseenter(function(){
		$("#businessAnimate").fadeIn(400);
	})
	$("#business").mouseleave(function(){
		$("#businessAnimate").fadeOut(400);
	})
	$("#business1").mouseenter(function(){
		$("#businessAnimate1").fadeIn(400);
	})
	$("#business1").mouseleave(function(){
		$("#businessAnimate1").fadeOut(400);
	})
})