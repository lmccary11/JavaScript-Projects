function get_Date(){
    if (new Date().getHours() < 11){
        document.getElementById("Morning_Greeting").innerHTML = "Good Morning!";
    }
}


function get_lowAge_or_vote(){
    Age = document.getElementById("Age").value;
    if (Age < 18){
        document.getElementById("lowAge").innerHTML = Age + "is less than" + 18 + ". You can't vote";
    }
    else {
        document.getElementById("lowAge").innerHTML = Age + " is not less than  " + 18 + ". You can vote!";
    }
}
function get_lower(){
    A = document.getElementById("A").value;
    if (A < 7){
        document.getElementById("lower").innerHTML = A + " is less than " + 7 + ". Here's a Dollar.";
    }
    else {
        document.getElementById("lower").innerHTML = A + " is not less than " + 7 + ". No money for you.";
    }
}

function Time_function(){
    var Time = new Date().getHours();
    var Reply = 0;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";        
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}

function time_function(){
    var Time = new Date().getHours();
    if (Time < 12 == Time > 0){
        document.getElementById("time_of_day").innerHTML = " It is morning time. " ;
    }
    else if (Time >= 12 == Time < 18) {
        document.getElementById("time_of_day").innerHTML = " It is afternoon. " ;
    }
    else {
        document.getElementById("time_of_day").innerHTML = "It is evening time.";
    }
}