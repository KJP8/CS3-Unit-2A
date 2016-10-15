/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
    document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */

 function twelveEvenFibonacciSum(){
    var evenNums = 12;
    var firstNum = 0;
    var secNum = 1;
    var counter = 0;
    var sum = 0;
    
    while (counter < evenNums - 1) {
        var nextNum = firstNum + secNum;
        if (nextNum % 2 == 0) {
            counter++;
            sum += nextNum;
        }
        firstNum = secNum;
        secNum = nextNum;
    }
    return sum;
} 