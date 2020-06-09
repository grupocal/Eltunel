function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}
var sheva = decode_utf8('\xD6\xB0')

var conjdict = {"Isg":sheva}

function myFunction() {
	var a1 = document.getElementById("a1");
	var aa1 = document.getElementById("aa1");
	
	if (aa1.style.display === "none") {
	  aa1.style.display = "block";
	} else {
	  aa1.style.display = "none";
	}
	var a1 = "5"
	return var a1  
		
	}
