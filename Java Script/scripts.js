// code for the hero section
// start
$(document).ready(function() {
	$("#nav_icon").click(function(){
		$(".main_nav").toggleClass("active");
    $("#nav_icon").hide();
    $("#nav_icon_alt").show();
	});
	$("#nav_icon_alt").click(function(){
		$(".main_nav").removeClass("active");
    $("#nav_icon_alt").hide();
    $("#nav_icon").show();
	});
	$(".main_nav ul").click(function(event){
		event.stopImmediatePropagation();
	});	
});
// end

// code for the Hero Section
// start
// Typewriter animation
const textElement = document.getElementById('typewriter-text');
const textToType = "Your Learning Hub for Notes, Sample Papers, Code Problems, and More";
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    textElement.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Adjust the typing speed here
  }
}

// Trigger the typewriter animation after a delay (e.g., when the page loads)
setTimeout(typeWriter, 1000);
// end
