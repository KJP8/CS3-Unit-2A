/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Fifth problem: Word Counter
  *
  ********************************************************************/
// get the HTMLElement objects for the textarea
var textareaElement = document.getElementById("myWordsToCount");

textareaElement.onkeyup = function(){
    // get value of input as a string
    var inputString = textareaElement.value;
    // replace multple consecutive whitespace instances with a single space
    // credit: http://stackoverflow.com/questions/6163169/replace-multiple-whitespaces-with-single-whitespace-in-javascript-string
    var reduceWhitespace = inputString.replace(/\s+/g, " ");
    // split input string into separate words
    var words = reduceWhitespace.trim().split(" ");
    
    document.getElementById("wordcount").innerHTML = words.length;
}