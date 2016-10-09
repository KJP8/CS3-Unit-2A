/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


/********************************************************************
 *
 * Second problem: Put An X
 *
 ********************************************************************/

var putAnXBtn = document.getElementById("putAnXButton");
putAnXBtn.onclick = function(){

// get a reference to the box
var theBox = document.getElementById("putAnX");

// now get the width and height of the box - see the clientWidth and clientHeight documentation at http://docs.webplatform.org/wiki/dom/HTMLElement
var width = theBox.clientWidth;
var height = theBox.clientHeight;

// Generate a random number for the x and y positions of the X
// and round down to the nearest integer generated
var xPosition = Math.floor(Math.random() * width);
var yPosition = Math.floor(Math.random() * height); 


//now we'll get the HTML element where the X goes, fill in the X and set the position of the element.
var theXElement = document.getElementById("theX");
theXElement.innerHTML="X";
theXElement.style.top = parseInt(yPosition)+'px';
theXElement.style.left = parseInt(xPosition)+'px';

 }
