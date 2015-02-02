/*
setTimeout(function() {
	console.log("1 - Async");
}, 0);

console.log("2 - Async");
*/

function teste(val) {

	if(val>1000) {
		console.log("["+val+"]");
		return val;
	}
	else {
		console.log("["+val+"]");
		return val + teste(val+1);
	}
	console.log("("+val + ") - Async");
}

var retorno = teste(0);

console.log("2 - Async retorno:"+retorno);
