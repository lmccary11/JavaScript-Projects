function my_Dictionary(){               //Defining a Dictionary function and naming it
    var Automobile = {                  //Defining a variable with a set o key-value pairs
        DoorNumber:4,                   //Defining keys with a value
        Color:"silver",
        Make:"Jeep",
        BaseModel:"Grand Cherokee",
        Model:"Grand Cherokee Laredo",
        Year:2005,
        Engine:"v6"
    };
    delete Automobile.BaseModel;        //Deleting a key with its value
    document.getElementById("Dictionary").innerHTML = Automobile.BaseModel;
    //Putting the value of the variable into the HTML elementFromPoint with the Dictionary id.
}



