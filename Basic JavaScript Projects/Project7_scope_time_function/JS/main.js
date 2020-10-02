function Time_Function() {
    var time = new Date().getHours(); //getting the local time and setting it to time
    var reply; //creating a new var
    if (time < 12 == time > 0) {
        reply = "It is morning time."; //setting variable if time is between 0 and 12
    }
    else if (time > 12 == time < 18) {
        reply = "It is the afternoon."; //setting var if time is between 12 and 6
    }
    else {
        reply = "It is evening time."; //setting varuable for any other time (from 6 to midnight)
    }
    document.getElementById("Time_of_day").innerHTML = reply; //giving the reply back to html to print.
}



//this next chunck shows local and global variables being used.

var X = 4; //global variable

function Add_numbers_1() {
    document.write(6 + X + "<br>");
}
function Add_numbers_2() {
    document.write(46 + X + "<br>");
}
Add_numbers_1();//outputs of global
Add_numbers_2();//outputs of global

function Add_numbers_3() {
    var Y = 4//local variable
    document.write(26 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(56 + Y + "<br>");
}
Add_numbers_3();//outputs of local
Add_numbers_4();//this will not output since it does not know the local value of  Y
console.log(X+Y); //since Y is not Defined in the global, you can use console to define it and run the function.




/*


//other saved work



function Get_Time() {
    if (new Date().getHours() < 12) {
        document.getElementById("Time").innerHTML = "Good morning!";
    }
}




function age_fun () {
    age = document.getElementById("age").value;
    if (age <= 15) {
        car = "You are too young to drive.";
    }
    else {
        car = "You are old enough to drive.";
    }
    document.getElementById("how_old").innerHTML = car;
}
*/
