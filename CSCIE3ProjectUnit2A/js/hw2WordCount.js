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
// first we'll get the HTMLElement objects for the 
// textarea and the div where we want to write the
// output
var textareaElement = document.getElementById("myWordsToCount");

// now we'll assign a function to the 'onkeyup' handler for the
// textarea element. This function gets run every time the user
// completes a keystroke in the textarea.
textareaElement.onkeyup = function(){
    var inputString = textareaElement.value;
    // credit: http://stackoverflow.com/questions/6163169/replace-multiple-whitespaces-with-single-whitespace-in-javascript-string
    var reduceWhitespace = inputString.replace(/\s+/g, " ");
    var words = reduceWhitespace.trim().split(" ");
    document.getElementById("wordcount").innerHTML = words.length;
}