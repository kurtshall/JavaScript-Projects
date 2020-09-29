function my_Function() {
    //x = 5;
   // y = 6;
    //z = "five";

    //document.getElementById("Test1").innerHTML = document.write(5>2 && 10>4);
    //document.getElementById("Test2").innerHTML = document.write(5>2 || 10>12);
    document.getElementById("Test3").innerHTML = !(4>6); //this does a NOT while seeing if 4 is > than 6
    document.getElementById("Test4").innerHTML = (4 == 4); //this is seeing if 4 is equal to 4
    document.getElementById("Test5").innerHTML = (4 === "four"); //  this is comparing if its a string and number
    document.getElementById("Test6").innerHTML = (4<6); //this sees if 4 is less than 6
    document.getElementById("Test7").innerHTML = (4 + "five");// this adds a sting and letter togehter in one line



}

//console.log(8>10);

document.write(typeof 5); //this will figure out if its a string or number
document.write(5>2 || 10>12); //this is using an OR
document.write(5>2 && 10>4); // thi is using and AND