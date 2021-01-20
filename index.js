/*global console*/
/*global document*/

var Id1 = 'Id1';
var Id2 = 'Id2';
var Id3 = 'Id3';
var MAT = 1.1;

function doclick(e) {
	"use strict";
	document.body.style.backgroundColor = "var(--" + e.target.id + "-color)";
	document.getElementById(Id1).parentNode.style.color = "var(--" + Id1 + "-color)";
	document.getElementById(Id2).parentNode.style.color = "var(--" + Id2 + "-color)";
	document.getElementById(Id3).parentNode.style.color = "var(--" + Id3 + "-color)";
	document.getElementById(Id1).style.backgroundColor = "var(--DOM-color)";
	document.getElementById(Id2).style.backgroundColor = "var(--DOM-color)";
	document.getElementById(Id3).style.backgroundColor = "var(--DOM-color)";
	document.getElementById(Id1).style.color = "var(--" + Id1 + "-color)";
	document.getElementById(Id2).style.color = "var(--" + Id2 + "-color)";
	document.getElementById(Id3).style.color = "var(--" + Id3 + "-color)";
	e.target.parentNode.style.color = "var(--DOM-color)";
}

function dokeyup(e) {
	"use strict";
	/* eslint-disable no-console */
	console.log(e.target.id + "--[dwn]--" + e.target.value);
	/* eslint-enable no-console */
	e.target.style.width = e.target.value.length * MAT + "ex";
	if (e.target.value.length < 2) {
		e.target.style.width = "1ex";
	}
}

function dodatalistoption(e) {
	"use strict";
	/* eslint-disable no-console */
	console.log(e.target.id + "--[opt]--" + e.target.value);
	/* eslint-enable no-console */
	e.target.style.width = e.target.value.length * MAT + "ex";
	if (e.target.value.length < 2) {
		e.target.style.width = "1ex";
	}
}

function dokeydown(e) {
	"use strict";
	/* eslint-disable no-console */
	console.log(e.target.id + "--[kup]--" + e.target.value);
	/* eslint-enable no-console */
	e.target.style.width = e.target.value.length * MAT + "ex";
	if (e.target.value.length < 2) {
		e.target.style.width = "1ex";
	}
	// background
	document.body.style.backgroundColor = "var(--" + e.target.id + "-color)";
	e.target.style.backgroundColor = "var(--" + e.target.id + "-color)";
	e.target.style.color = "var(--DOM-color)";
}

function theDomisloaded() {
	"use strict";
	/* eslint-disable no-console */
	console.info('DOM');
	/* eslint-enable no-console */
}

document.addEventListener('DOMContentLoaded', theDomisloaded);
document.getElementById(Id1).value = "";
document.getElementById(Id2).value = "";
document.getElementById(Id3).value = "";
document.getElementById(Id1).addEventListener('click', doclick);
document.getElementById(Id2).addEventListener('click', doclick);
document.getElementById(Id3).addEventListener('click', doclick);
document.getElementById(Id1).addEventListener('input', dodatalistoption);
document.getElementById(Id2).addEventListener('input', dodatalistoption);
document.getElementById(Id3).addEventListener('input', dodatalistoption);
document.getElementById(Id1).addEventListener('keydown', dokeydown);
document.getElementById(Id2).addEventListener('keydown', dokeydown);
document.getElementById(Id3).addEventListener('keydown', dokeydown);
document.getElementById(Id1).addEventListener('keyup', dokeyup);
document.getElementById(Id2).addEventListener('keyup', dokeyup);
document.getElementById(Id3).addEventListener('keyup', dokeyup);
