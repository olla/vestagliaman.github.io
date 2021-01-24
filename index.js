/*global console*/
/*global document*/
/*global FileReader*/

var IfI = 'file'; // input
var Id1 = 'Id1'; // first search
var Id2 = 'Id2'; // second search
var Id3 = 'Id3'; // third search
var CLC = 'math'; // Calculus index
var OfI = ""; // output

function makeList(listData, listId, NN) {

if (listData != null) {
		var divList = document.getElementById(listId),
			listContainer = document.createElement('div'),
			// Make the list
			listElement = document.createElement('div'),
			// Set up a loop that goes through the items in listItems one at a time
			numberOfListItems = listData.length,
			listItem,
			i;

 if (divList != null) {
		divList.innerHTML = "";
		divList.appendChild(listContainer);
		listContainer.appendChild(listElement);

		for (i = 0; i < numberOfListItems; ++i) {
			// create an item for each one
			listItem = document.createElement('p');

			if ( NN != 0 ) {
			listItem.innerHTML = listData[i].substring(listData[i].length - NN);
			listElement.appendChild(listItem);
			} else {
			listItem.innerHTML = listData[i];
			listElement.appendChild(listItem);
			}
			
		}
	
	}

 }

}

function ollaOfI() {
	"use strict";
	var list1 = OfI.split("\\" + document.getElementById(Id1).value),
		oll1 = (list1 || []).length,
		list2 = OfI.split("[" + document.getElementById(Id2).value + "]"),
		oll2 = (list2 || []).length,
		list3 = OfI.split("{" + document.getElementById(Id3).value + "}"),
		oll3 = (list3 || []).length;
	/* eslint-disable no-console */
	console.log(oll1, oll2, oll3);
	/* eslint-enable no-console */
	document.getElementById(CLC).innerHTML = "<span class=\"Id1\">\\</span>" + oll1 + "<span class=\"Id2\">[</span>" + oll2 + "<span class=\"Id2\">]</span>" + "<span class=\"Id3\">{</span>" + oll3 + "<span class=\"Id3\">}</span>";

	if (list1 != "") {
		makeList(list1, 'list1', 0);
	}

	if (list2 != "") {
		makeList(list2, 'list2', 0);
	}

	if (list3 != "") {
		makeList(list3, 'list3', 0);
	}

}

function olla(OfI) {
	"use strict";
	var oll1 = (OfI.split("\\" + document.getElementById(Id1).value) || []).length,
		oll2 = (OfI.split("[" + document.getElementById(Id2).value + "]") || []).length,
		oll3 = (OfI.split("{" + document.getElementById(Id3).value + "}") || []).length;
	/* eslint-disable no-console */
	console.log(oll1, oll2, oll3);
	/* eslint-enable no-console */
	document.getElementById(CLC).innerHTML = "<span class=\"Id1\">\\</span>" + oll1 + "<span class=\"Id2\">[</span>" + oll2 + "<span class=\"Id2\">]</span>" + "<span class=\"Id3\">{</span>" + oll3 + "<span class=\"Id3\">}</span>";
}

function doclick(e) {
	"use strict";
	document.body.style.backgroundColor = "var(--" + e.target.id + "-color)";

	e.target.parentNode.style.color = "var(--DOM-color)";
	if (e.target.value.length < 2) {
		e.target.style.width = "1ex";
		e.target.style.backgroundColor = "var(--DOM-color)";
		document.getElementById(CLC).backgroundColor = "var(--DOM-color)";
	}
	ollaOfI();
}

function modifyTitle() {
	"use strict";
	document.title = "\\" + document.getElementById(Id1).value + "[" + document.getElementById(Id2).value + "]" + "{" + document.getElementById(Id3).value + "}";
	olla(OfI);
}

function dokeyup(e) {
	"use strict";
	/* eslint-disable no-console */
	console.log(e.target.id + "--[dwn]--" + e.target.value);
	/* eslint-enable no-console */
	e.target.style.width = e.target.value.length + "ch";
	if (e.target.value.length < 1) {
		e.target.style.width = "1ex";
		e.target.style.backgroundColor = "var(--DOM-color)";
		document.getElementById(CLC).backgroundColor = "var(--DOM-color)";
	}
	modifyTitle();
}

function dodatalistoption(e) {
	"use strict";
	/* eslint-disable no-console */
	console.log(e.target.id + "--[opt]--" + e.target.value);
	/* eslint-enable no-console */
	e.target.style.width = e.target.value.length + "ch";
	if (e.target.value.length < 2) {
		e.target.style.width = "1ex";
		e.target.style.backgroundColor = "var(--" + e.target.id + "-color)";
		document.getElementById(CLC).backgroundColor = "var(--" + e.target.id + "-color)";
	}
	modifyTitle();
	ollaOfI();
}

function dokeydown(e) {
	"use strict";
	/* eslint-disable no-console */
	console.log(e.target.id + "--[kup]--" + e.target.value);
	/* eslint-enable no-console */
	e.target.style.width = e.target.value.length + "ch";
	// background
	document.body.style.backgroundColor = "var(--" + e.target.id + "-color)";
	e.target.style.backgroundColor = "var(--" + e.target.id + "-color)";
	e.target.style.color = "var(--DOM-color)";
	if (e.target.value.length < 2) {
		e.target.style.width = "1ex";
		e.target.style.backgroundColor = "var(--" + e.target.id + "-color)";
		document.getElementById(CLC).backgroundColor = "var(--" + e.target.id + "-color)";
	}
	modifyTitle();
}

function theDomisloaded() {
	"use strict";
	/* eslint-disable no-console */
	console.info('DOM');
	/* eslint-enable no-console */
}

function printOfI() {
	"use strict";
	/* eslint-disable no-console */
	console.log(OfI);
	/* eslint-enable no-console */
}

function readFile(e1) {
	"use strict";
	var files = e1.target.files,
		file = files[0],
		reader = new FileReader();
	reader.onloadend = function (e2) {
		/* eslint-disable no-console */
		OfI = e2.target.result;
		//console.log(OfI);
		/* eslint-enable no-console */
		olla(OfI);
	};
	OfI = reader.readAsText(file);
}

document.addEventListener('DOMContentLoaded', theDomisloaded);
document.getElementById(Id1).value = "";
document.getElementById(Id2).value = "";
document.getElementById(Id3).value = "";
document.getElementById(CLC).addEventListener('math', ollaOfI);
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
document.getElementById(IfI).addEventListener('change', readFile);
document.getElementById(IfI).addEventListener('input', ollaOfI);
ollaOfI();
printOfI();
