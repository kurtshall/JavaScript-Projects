
function mathFunction () {
    var x = 5;
    var y = 5;
    y--; //this reduces the value of y by one
    x++; //this will increase value of x by one
    z = (8/2);//simple div problem
    a = (8*2);// simple mult problem
    b = (8-2)+4; //additiong and sub problem
    c = 25%4; // modulus opereator

    //each value is being set to a letter and then below will be set to the Math1 value to be called in HTML

    document.getElementById("Math1").innerHTML = x;
    document.getElementById("Math2").innerHTML = y;
    document.getElementById("Math3").innerHTML = z;
    document.getElementById("Math4").innerHTML = a;
    document.getElementById("Math5").innerHTML = b;
    document.getElementById("Math6").innerHTML = c;
    document.getElementById("Math7").innerHTML = Math.random() * 100;
}

window.alert(Math.pow(2, 4));