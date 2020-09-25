function My_First_Function () {
    var str = "This test is green!"; //creating a variable and setting it to color green
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function stringFunction () {
    var line = "This is a string"; //setting a variable "line" and adding to it with +=
    line += "With an added string!"; //adding to variable line
    document.getElementById("String").innerHTML = line; //setting and ID and giving it the value of "line"
}