var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked=true;
	counter++;
	if(counter > 6){
		counter = 1;
		}
},5000);

window.addEventListener("load", function() {
	document.getElementById('robot').addEventListener("click", function() {
		alert("Hola Mundo");
	})
})