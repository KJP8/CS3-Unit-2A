/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */

/********************************************************************
 *
 * First problem: temperature conversion
 *
 * If the values entered by the user aren't numbers (or convertible to numbers),
 * return nothing (or, more specifically, leave the output field blank)
 *
 ********************************************************************/

var convertCtoF = document.getElementById("degC"); 
convertCtoF.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
    var degreesC = document.getElementById("degC").value; // this is the value from the form field
    
    // Validate that the input is a number
    if (!isNaN(degreesC)) {
        // Convert degrees C to Fahrenheit
        var resultF = degreesC * (9/5) + 32;
        // Place the result in the variable 'degreesF'
        var degreesF = resultF;
        // Output result to the page
        document.getElementById("degFOut").innerHTML = degreesF;
    }
    // If NaN, leave output blank
    else {
        document.getElementById("degFOut").innerHTML = "";
    }
}

var convertFtoC = document.getElementById("degF");
convertFtoC.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
    var degreesF = document.getElementById("degF").value; // this is the value from the form field
    
    // Validate that the input is a number
    if (!isNaN(degreesF)) {
        // Convert degreesF to Celsius
        var resultC = (degreesF - 32) * 5/9;
        // Place the result in the variable 'degreesC'
        var degreesC = resultC;
        // Output result to the page
        document.getElementById("degCOut").innerHTML = degreesC;
    }
        // If NaN, leave output blank
    else {
        document.getElementById("degCOut").innerHTML = "";
    }
}
