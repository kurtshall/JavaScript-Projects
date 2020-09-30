function count_Function () { //this is the nested loop
    document.getElementById("Nested_Function").innerHTML = Count();//this is to be read out to the user, once the inner loop is ran.
    function Count () { //inner loop function
        var Start = 4; // setting initial value
        function addition() {Start += 1;} //making the addition function
        addition(); //running the addition function
        return Start;// returning Start to be sent back as the value of the start of the inner loop.
    }
}




function Vehicle(Make, Model, Year, Color) { //setting the vehical with each of its properties
    this.Vehicle_Make = Make;//setting propertie
    this.Vehicle_Model = Model;//setting propertie
    this.Vehicle_Year = Year;//setting propertie
    this.Vehicle_Color = Color;//setting propertie
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //assigning values to each of the properties in order of the Vehical Function input
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { // this portion read out each of the selected properties given the name of the person.
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}





//This is the the vote function
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value; //this takes the value that was inputed and sets it to age
    Can_vote = (Age < 18) ? "You are not Old enough to vote.":"You can Vote!"; // this compares to see if you are old enough to vote or not
    document.getElementById("Vote").innerHTML = Can_vote; // this displays back to the user if they can vote or not

}

