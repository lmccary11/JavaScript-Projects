//Defining variables and giving them a string value
var A = "while failure is simply a few errors in judgement, repeated every day.\" "  
var B = "This is an alert"
var C = "\"Success is nothing more than a few simple disciplines, practiced every day; "
var D = "- Jim Rohn"
var E = "Concatenated" + " String"
var brk = '\n'

var influence = "Speakers", best = "Rohn", encouraging = "Brown", confidence = "Nightingale"  //Defining variables and giving them a string value

let quote = C+A+D  //Concatenate the variables together.
let quoteResult = quote.fontcolor("blue")  //Assign a color to at least one variable using the fontcolor() method.

//Utilize the window.alert() and document.write() methods.
window.alert(B)                                         
document.write(quoteResult);
document.write("<br>")          //Adding a break between text and expression.
document.write("<br>")          //Adding a second break between text and expression.
document.write(3+3)             //Write an expression.

function My_First_Function() {                          //Defining a function and naming it
    var str = "This is the button text!";               //Defining a variable and giving it a string value    
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable into the 
                                                            //HTML elementFromPoint with the "Button_Text" id    
}
