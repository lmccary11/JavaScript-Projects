function My_Second_Function() {                          //Defining a function and naming it
    var S = "Hi!";      //Defining a variable and giving it a string value
    var B = S+", Hello!";   //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = B;
    //Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id (.innerHTML modifies the content of an HTML element)
}

function My_Function() {                          //Defining a function and naming it
    var C = "\"Success is nothing more than a few simple disciplines, practiced every day; "    //Defining a variable and giving it a string value
    C += "while failure is simply a few errors in judgement, repeated every day.\" ";           //Utilize the += operator to concatenate a string.
    document.getElementById("Concatenate").innerHTML = C;
    //Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id (.innerHTML modifies the content of an HTML element)
}