function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

var rad1 = "ק"
var rad2 = "ט"
var rad3 = "ל"

var sheva = decode_utf8('\xD6\xB0');
var hatefsegol = decode_utf8('\xD6\xB1');
var hatefpataj = decode_utf8('\xD6\xB2\x20');
var hatefqamets = decode_utf8('\xD6\xB3\x20');
var hireq = decode_utf8('\xD6\xB4');
var tsere = decode_utf8('\xD6\xB5');
var segol = decode_utf8('\xD6\xB6');
var pataj = decode_utf8('\xD6\xB7');
var qamets = decode_utf8('\xD6\xB8');
var holem = decode_utf8('\xD6\xB9');
var qubuts = decode_utf8('\xD6\xBB\x20');
var daguesh = decode_utf8('\xD6\xBC');

var conjdict = {'qal':
			{'perfect':
				{"Isg":[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
"IIsgm":[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,qamets],
"IIsgf":[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,sheva],
"IIIsgm":[rad1,qamets,rad2,pataj,rad3],
"IIIsgf":[rad1,qamets,rad2,sheva,rad3,qamets,"ה"],
"Ipl":[rad1,qamets,rad2,pataj,rad3,sheva,"נו",daguesh],
"IIplm":[rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם""],
"IIplf":[rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
"IIIplm":[rad1,qamets,rad2,sheva,rad3,"ו",daguesh],
"IIIplf":[rad1,qamets,rad2,sheva,rad3,"ו",daguesh]}}}


				
const person = ["Isg","IIsgm","IIsgf","IIIsgm","IIIsgf","Ipl","IIplm","IIplf","IIIplm","IIIplf"];

const randomperson = person[Math.floor(Math.random() * person.length)];
function correct() {
	var a1 = document.getElementById("a1").innerHTML = conjdict['qal']['perfect'][randomperson].join('');}
function myFunction() {
	var a1 = document.getElementById("a1").innerHTML = conjdict['qal']['perfect'][randomperson].join('');
	var aa1 = document.getElementById("aa1");
	
	if (aa1.style.display === "none") {
	  aa1.style.display = "block";
	} else {
	  aa1.style.display = "none";
	}
	
	}
