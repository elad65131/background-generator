var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("body");
var css= document.querySelector("h3");
var btn= document.querySelector(".btn");
var btn1= document.querySelector(".btn1");

var start1= color1.value= "#"+(39).toString(16)+(176).toString(16)+(216).toString(16);
var start2= color2.value="#"+(234).toString(16)+(186).toString(16)+(21).toString(16);

function startcolor(){
	body.style.background=
	"linear-gradient(to right, "
	+ start1
	+","
	+ start2
	+")";
	color1.value=start1;
	color2.value=start2;

css.innerHTML= "linear-gradient(to right, rgb(39, 176, 216), rgb(234, 186, 21));";


}
btn.onclick=startcolor;

css.innerHTML= "linear-gradient(to right, rgb(39, 176, 216), rgb(234, 186, 21));";
function setgenerator(){
	body.style.background=
	"linear-gradient(to right, "
	+ color1.value
	+ ","
	+ color2.value
	+ ")";
	css.textContent= body.style.background+ ";";
}
color1.addEventListener("input", setgenerator);
color2.addEventListener("input", setgenerator);

function getRandomInt(max, tax) {
  return Math.floor(Math.random() * Math.floor(color1, color2));
}

btn1.onclick= getRandomInt(256, 256);





