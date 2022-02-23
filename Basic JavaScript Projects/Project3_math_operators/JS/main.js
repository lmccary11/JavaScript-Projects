window.alert(Math.random() * 1000) //Write a function utilizing Math.random()

//Write functions utilizing each of the following operators: +, - , *, /

function addition_function(){           //Defining a math function and naming it
    var sum = 4 + 4;                    //Defining a variable with an expression
    document.getElementById("Math+").innerHTML = "4 + 4 = " + sum;
    //Putting the value of the variable into the HTML elementFromPoint with the Math+ id.
}

function subtraction_function(){        //Defining a math function and naming it
    var diff = 10 - 5;                  //Defining a variable with an expressione
    document.getElementById("Math-").innerHTML = "10 - 5 = " + diff;
    //Putting the value of the variable into the HTML elementFromPoint with the Math- id.
}

function mult_function(){               //Defining a math function and naming it
    var mult = 4 * 4;                   //Defining a variable with an expression
    document.getElementById("Mathx").innerHTML = "4 x 4 = " + mult;
    //Putting the value of the variable into the HTML elementFromPoint with the Mathx id.
}

function division_function(){           //Defining a math function and naming it
    var division = 10 / 5;              //Defining a variable with an expression
    document.getElementById("Math/").innerHTML = "10 / 5 = " + division;
    //Putting the value of the variable into the HTML elementFromPoint with the Math/ id.
}

//Write functions utilizing each of the following operators:  multiple ps, %, negation

function ops_function(){           //Defining a math function and naming it
    var ops = 4 + 4 - 5 * 20 / 2;                    //Defining a variable with an expression
    document.getElementById("Mathops").innerHTML = "4 + 4 - 5 x 20 / 2 = " + ops;
    //Putting the value of the variable into the HTML elementFromPoint with the Mathops id.
}

function modulus_function(){        //Defining a math function and naming it
    var mod = 10 % 7;                  //Defining a variable with an expressione
    document.getElementById("Mathmod").innerHTML = "10 / 7 =  1 with a remainder of " + mod;
    //Putting the value of the variable into the HTML elementFromPoint with the Mathmod id.
}

function neg_function(){               //Defining a math function and naming it
    var x = 4;                   //Defining a variable with an expression
    document.getElementById("Mathneg").innerHTML = "the opposite of 4 is = "+ -x;
    //Putting the value of the variable into the HTML elementFromPoint with the Mathneg id.
}


//Write functions utilizing each of the following operators:  ++, --
var d = 14.5;
d++;
document.write("To increase 14.5 by 1 use ++ and you get " + d);
document.write("<br>")          //Adding a break between text and expression.
document.write("<br>")          //Adding a second break between text and expression.
var h = -6;
h--;
document.write("To decrease -7 by 1 use -- and you get " + h);

