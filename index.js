var Id1 = 'escapeMacroed';
var Id2 = 'squareBracked';
var Id3 = 'circleBracked';
var MAT = 1;
window.onload = function bodyOnload(e) 
{
inputOnchange(e,Id1);
inputOnchange(e,Id2);
inputOnchange(e,Id3);
}
function inputOnkeydown(e,anId) 
{
inputOnchange(e,anId);
console.log(anId + "onKeydown: " + e.code);
}
function inputOnkeyup(e,anId) 
{
inputOnchange(e,anId);
console.log(anId + "onKeyup  : " + e.code);
}
function inputOnselect(e,anId) 
{
inputOnchange(e,anId);
console.log(anId + "onSelect : " + e.code);
}
function inputOninput(e,anId) 
{
inputOnchange(e,anId);
console.log(anId + "onInput  : " + e.code);
}
function inputOnpaste(e,anId) 
{
inputOnchange(e,anId);
console.log(anId + "onPaste  : " + e.code);
}
function inputOnchange(e,anId) 
{
let thisElementOfDOM = document.getElementById(anId);
let charactersString = thisElementOfDOM.value;
let charactersNumber = charactersString.length;
console.log(anId + "onChange : " + charactersString);
thisElementOfDOM.style.width = charactersNumber*MAT + "ex";
if ( charactersNumber < 2 ) { thisElementOfDOM.style.width = "1ex"; }
}
