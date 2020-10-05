let bike = {  //making a let variable named bike
    make: "Viper ", //giving the bike properties
    model: "X-gen 3 ",//giving the bike properties
    year: "2019 ",//giving the bike properties
    color: "Orange ",//giving the bike properties
    description : function() { //giving the bike the full description with retur
        return "The bike is a " + this.color + this.make + this.model + this.year + "!";
    }
};
document.getElementById("bike_object").innerHTML = bike.description();



function Call_Loop() { //setting up a while loop
    var y = ""; //setting variable
    var x = 1; //setting variable
    while (x<13) { //setting while loop peramiters, to count to 12
        y = y+ "<br>" + x; //what to do inside the loop
        x++; //add onto x at the end of the loop
    }
    document.getElementById("Loop").innerHTML = y;
}


//setting a viable instruments with an array of instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {  //using the foor loop to list out each instrument and to continue the loop until it reaches the instrument length
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}



function array_Function () { //using an arry in a function
    var colors = ["red", "green", "blue", "yellow", "orange", "black"];
    document.getElementById("Array").innerHTML = "Today, I will wear a " + colors[4] + " color shirt!"; //calling the vaiable and the ID of the color I want in the array
}









/*     NOTES

function Call_Loop() {
    var y = "";
    var x = 1;
    while (x<13) {
        y = y+ "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = y;
}




var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}





function array_Function () {
    var colors = ["red", "green", "blue", "yellow", "orange", "black"];
    document.getElementById("Array").innerHTML = "Today, I will wear a " + colors[4] + " color shirt!";
}




const bikes = {type:"road", size:"tall", color:"red"};
function constant_function() {
    bikes.color = "green";
    bikes.cost = "$500";
    document.getElementById("Constant").innerHTML = "My favorite type of bike is a " + bikes.color + " "+ bikes.cost + " bike!";

}





function let_function() {
    var x = 25;
    document.write(x + "<br>");
    {
        let x = 37;
        document.write(x + "<br>");
    }
    document.write(x + "<br>");
}
*/