function string_Length(){     
  let jim="Inspirational";      //Assigning string to value within block
  let length = jim.length;      //Assigning string length method to variable
  document.getElementById("jimLength").innerHTML = length;    //prompting to get length value from jimLength ID
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
//Defining array with multiple elements.
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++){
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function(){
  var arena = [];             //Initializing array
  arena[1] = "Rohn";          //Defining variables and giving them a string value
  arena[2] = "Brown";         //Defining variables and giving them a string value
  arena[3] = "Ziglar";        //Defining variables and giving them a string value
  arena[4] = "Nightingale";   //Defining variables and giving them a string value
  document.getElementById("Array").innerHTML = "We paid for all four, but we really came to see " + arena[1] + " and " + arena[4] + ".";
  //Prompting to get sentence with array values with Array ID
}

function constant_Function(){
  const box = {material:"cardboard", height:"tall", secutity:"taped"}; //defining constant with characteristics
  box.size = "medium";
  document.getElementById("Constant").innerHTML = "I need a " + box.size + " " + box.material + " box.";
}

var y = 75;
document.write(y);
{
  let y = 10;
  document.write("<br>" + y);
}
document.write("<br>" + y);
document.write("<br>")
var y = 75;
document.write("<br>" + y);
{
  var y = 10;
  document.write("<br>" + y);
}
document.write("<br>" + y);

let energy = {                      //defining energy within block
  deed: "karma",
  sleep: "alertness",
  attitude: "vitality",
  description : function()  {
    return "I need good " + this.deed + " and " + this.attitude + ".";
  }
};
document.getElementById("energy_Object").innerHTML = energy.description();



let paper = ""                    
for (i=0; i<10; i++){                     //for loop that breaks before iteration in which i=4
  if (i === 4) {break;}
  paper += "Copy " + i + " of 10. <br>"

}
document.getElementById("break_statement").innerHTML = paper


let mop = ""
for (i=0; i<10; i++){                       ///for loop that skips iteration in which i=4
  if (i === 4) {continue;}
  mop += "Cleanup on aisle " + i + ". <br>"

}
document.getElementById("continue_statement").innerHTML = mop