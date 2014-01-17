$(document).ready(function () {

	if ($(".landing-feature").css("margin-left") == "0px" ){
		$($(".js-reverse").get().reverse()).each(function() {
			$(this).appendTo($(this).parent());
		});
	}

});