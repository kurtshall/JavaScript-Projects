function Class_Function () {
    var A = document.getElementsByClassName("stance");
    A[0].innerHTML = "This has been changed!";
}

var c = document.getElementById("box_art");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0,0,250,0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 250, 100);


ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();




/* Notes




function animal_function() {
    var animal_output;
    var animal = document.getElementById("animal_input").value;
    var animal_string = " is a great animal!";
    switch(animal) {
        case "Cat":
            animal_output = "Cat" + animal_string;
        break;
        case "Dog":
            animal_output = "Dog" + animal_string;
        break;
        case "Horse":
            animal_output = "Horse" + animal_string;
        break;
        case "Rat":
            animal_output = "Rat" + animal_string;
        break;
        case "Pig":
            animal_output = "Pig" + animal_string;
        break;
        case "Spider":
            animal_output = "Spider" + animal_string;
        break;
        case "Snake":
            animal_output = "Snake" + animal_string;
        break;
        case "Kite":
            animal_output = "Kite" + animal_string;
        break;
        default:
            animal_output = "Please enter an animal spelled exactly as listed!";

    }
    document.getElementById("output").innerHTML = animal_output;
}





*/