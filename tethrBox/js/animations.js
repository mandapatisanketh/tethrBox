$(document).ready(function(){
	var scrollHidden = false;
	$("#businessAnimate").hide();
	$("#businessAnimate1").hide();
	var newsCount = 1;
	function openSideBar(){
		$('body').css('overflow', 'hidden');
		// $("#mainBody").css("background-color", "#202020")
		$("#completeBody").attr('class', 'col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10');
		$("#sideNavBar").show();
		scrollHidden = true;
	}
	function closeSideBar(){
		$('body').css('overflow', 'auto');
		// $("#mainBody").css("background-color", "white")
		$("#completeBody").attr('class', 'col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12');
		$('#sideNavBar').hide();
		scrollHidden = false;
	}

	$('#menuIcon').click(function(){
		if(scrollHidden){
			closeSideBar();
		}
		else{
			openSideBar();
		}
	})
	function maxOfHeights(){
		console.log("win-height: ", $(window).height())
		if($(window).height() > "580"){
			return ($(window).height());
		}
		else {
			return "600";
		}
	}
	$('#firstImage').height(maxOfHeights());

	$(window).on('resize', function(){
		$('#firstImage').height(maxOfHeights());
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