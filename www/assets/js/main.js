$(document).ready(function () {


	function reverseOrder() {

			if(!$(".js-reverse").hasClass("js-reversed")) {
				if ($(".landing-feature").css("margin-left") == "0px" ){
					$($(".js-reverse").get().reverse()).each(function() {
						$(this).addClass("js-reversed");
						$(this).appendTo($(this).parent());
					});
				};
			};

			if($(".js-reverse").hasClass("js-reversed")) {
				if ($(".landing-feature").css("margin-left") != "0px" ){
					$($(".js-reverse").get().reverse()).each(function() {
						$(this).removeClass("js-reversed");
						$(this).appendTo($(this).parent());
					});
				};
			};

	};


	$(reverseOrder);


	var resizeTimer;
	$(window).resize(function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(reverseOrder, 0);
	});


});