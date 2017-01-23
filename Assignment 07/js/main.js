$(document).ready(function(){

	function toggleMenu(){
		var displayValue = $("nav").css("display");
		if(displayValue === "none"){
			$("nav").slideDown();
		}	else {
			$("nav").slideUp();
		}
	}

	$(".hamburger").click(toggleMenu);

});