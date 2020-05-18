var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//Do not repeat yourself

function setGradient() {
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";	
	css.textContent = body.style.background + ";";
	//textContent add it on HTML
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//We could do by adding attribute in html tag too, for example
//oninput = "setGradient()", but the weakness is it only can do one function
//unlike in js file, we can extend it
