$ ( document ).ready(function() {

//we need an imput element, id, value
//we need a button

//on button click, run a funtion to change the background base on the input

$("#submit-btn").click(changeBackground);
$("#submit-btn").click(clearform);
$("submit-btn").click(removeSpaces)

function changeBackground() {
	event.preventDefault ();

//define that funtion that runs when the button is clicked
	//get that city name input from the input element
	var cityInput = $("#city-type").val();

	console.log(cityInput);

	if ( cityInput == "New York City" || cityInput == "New York" || cityInput == "NYC"){
		$("body").attr( "class", "nyc");
		$("body").css("background-size", "cover");

	//"New York" or "New York City" or "NYC" 
		//make the background of the page nyc.jpg
	
	}else if( cityInput == "San Francisco" || cityInput == "SF" || cityInput == "Bay Area"){
		$("body").attr( "class", "sf");
		$("body").css("background-size", "cover")
	//"San Francisco" or "SF" or "Bay Area" 
		//make the background of the page sf.jpg

	} else if( cityInput == "Los Angeles" || cityInput == "LA" || cityInput == "LAX"){
		$("body").attr( "class", "la");
		$("body").css("background-size", "cover")	
	//"Los Angeles" or "LA" or "LAX" 
		//make the background of the page la.jpg

	} else if( cityInput == "Austin" || cityInput == "ATX"){
		$("body").attr( "class", "austin");
		$("body").css("background-size", "cover")
	//"Austin" or "ATX" 
		//make the background of the page austin.jpg

	} else if( cityInput == "Sydney" || cityInput == "SYD"){
		$("body").attr( "class", "sydney");
		$("body").css("background-size", "cover")
	//"Sydney" or "SYD" 
	//make the background of the page sydney.jpg
}


}

function clearform() {
	$("#city-type").val ("");
}

////function removeSpaces(){
////  $("#city-type").bind("input", function(){
////    $("#city-type").val(function(_, v){
////     return v.replace(/\s+/g, "");
////    }
////  }




});