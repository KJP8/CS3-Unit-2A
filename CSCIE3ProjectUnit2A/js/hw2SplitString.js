/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Third problem: Splitting a String
  *
  ********************************************************************/


var splitName = document.getElementById("splitName");
splitName.onclick = function(){

    var fullname = document.getElementById("fullName").value;
    
    // initialize variables to be used in conditional statements
    var whitespace = fullname.indexOf(" ");
    var firstname;
    var lastname;
    
    // check for whitespace then use first instance of whitespace as indicator to divide input name into separate first and last name strings
    if (fullname.indexOf(" ") > 0) {
        firstname = fullname.slice(0, whitespace);
        lastname = fullname.slice(whitespace, fullname.length);
    }
    // if input does not have any whitespace, set the entire user input to the firstname
    else {
        firstname = fullname;
        lastname = "";
    }
    
    document.getElementById("firstname").innerHTML = firstname;
    document.getElementById("lastname").innerHTML = lastname;
}