document.write(typeof "word");document.write("<br>","<br>");    //Using type of operator to output "string"
document.write(typeof 8);document.write("<br>","<br>");         //Using type of operator to output "number"
document.write("30" + 8);document.write("<br>","<br>");         //Coersion of types to produce "308"
document.write(2E400);document.write("<br>","<br>");            //Using 2E400 (number out of range) to produce "Infinity"
document.write(-2E400);document.write("<br>","<br>");           //Using -2E400 (number out of range) to produce "Infinity"
document.write(5>4);document.write("<br>","<br>");              //Using "greater than" comparison to produce "true"
document.write(4>5);document.write("<br>","<br>");              //Using "greater than" comparison to produce "false"
document.write(7==7);document.write("<br>","<br>");             //Using "is equal to" comparison to produce "true"
document.write(5==9);document.write("<br>","<br>");             //Using "is equal to" comparison to produce "false"
R = 12;         //Assigning values to variables
S = 12;         //Assigning values to variables
document.write(R===S);document.write("<br>","<br>");            //Using "is equal to value and type" comparison to produce "true"
R = "92";       //Assigning values to variables
S = 92;         //Assigning values to variables
document.write(R===S);document.write("<br>","<br>");            //Using "is equal to value and type" comparison to produce "false"
C = "William"   //Assigning values to variables
D = "William"   //Assigning values to variables
document.write(D===C);document.write("<br>","<br>");            //Using "is equal to value and type" comparison to produce "true"
C = "Smith"     //Assigning values to variables
D = "McDonald"  //Assigning values to variables
document.write(D===C);document.write("<br>","<br>");            //Using "is equal to value and type" comparison to produce "false"
document.write(5>4 && 7==7);document.write("<br>","<br>");      //Using "and" operator to produce "true"
document.write(4>5 && 7==7);document.write("<br>","<br>");      //Using "and" operator to produce "false"
document.write(4>5 || 7==7);document.write("<br>","<br>");      //Using "or" operator to produce "true"
document.write(4>5 || 5==9);document.write("<br>","<br>");      //Using "or" operator to produce "false"

console.log(2+4);   //Using console.log to produce 6 in console
console.log(4>5);   //Using console.log to produce false in console

function My_Function(){                                         //Defining a function and naming it
    document.getElementById("nan").innerHTML = 4/0;             
}

function My_True_Function(){                                    //Defining a function and naming it
    document.getElementById("nanTrue").innerHTML = isNaN("dog");
}

function My_False_Function(){                                   //Defining a function and naming it
    document.getElementById("nanFalse").innerHTML = isNaN(35);
}

function My_notTrue_Function(){                                 //Defining a function and naming it
    document.getElementById("notTrue").innerHTML = !(32>30);
}

function My_notFalse_Function(){                                //Defining a function and naming it
document.getElementById("notFalse").innerHTML = !(660<655);
}