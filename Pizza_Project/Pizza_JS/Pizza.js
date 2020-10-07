function getReceipt () {
    //this initializes the string so it can get passed from function
    //function, growing line by line into a full receipt

    //setting variabels
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    //this gets the class size from HTML and sets it to sizeArray
    var sizeArray = document.getElementsByClassName("size");
    //this for loop uses the sizearry length (5) and will go through
    //each one ot find out what size pizza was selected
    for (var i = 0; i < sizeArray.length; i++) {
        //once it gets to the checked size it will run a function
        if (sizeArray[i].checked) {
            //it will set a variabel for the name and the value for that size
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    //the values that corrispond to each pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Party Time Pizza") {
        sizeTotal = 22;
    }
    //sets a new variable for the running total price
    runningTotal = sizeTotal;
    //sends information to the log of the size and total
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    //this will tun the gettopping function
    getTopping(runningTotal,text1);
}

//this function finds the topping and will lists them with the total
function getTopping(runningTotal,text1) {
    //setting variables
    var toppingTotal = 0;
    var selectedTopping = [];
    //getting the toppings from html and setting it to topping ARRay
    var toppingArray = document.getElementsByClassName("toppings");
    //this will go through the toppings and figure out which ones are selected
    //similar to the for loop in size
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            //once it finds a topping it will push it to the topping list
            selectedTopping.push(toppingArray[j].value);
            //sends to console the list of toppings
            console.log("selected topping item: ("+toppingArray[j].value+")");
            //lists each topping to the user
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    //this is for setting the price for toppings
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        //one free topping and each one past is $1
        toppingTotal = (toppingCount - 1);
        //if no toppings are selected then its 0
    } else {
        toppingTotal = 0;
    }
    //adding up the total 
    runningTotal = (runningTotal + toppingTotal);
    //sending informatoin to the console
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    //sending the final informatoin back to the HTML to be printed
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};