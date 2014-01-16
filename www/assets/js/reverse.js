$(document).ready(function () {
	if ($(".landing-feature").css("float") == "none" ){
		$($(".js-reverse").get().reverse()).each(function() {
			$(this).appendTo($(this).parent());
		});
	}
});