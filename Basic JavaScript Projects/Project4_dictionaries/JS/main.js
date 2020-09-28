
function my_Dictionary() { // setting the function to be called by HTML
    var Animal = { //Setting the variable with each of its chars
        Species: "Cat", //Setting chars
        Color: "White/Orange/Black", //Setting chars
        Breed: "Tabi", //Setting chars
        Age: 8, //Setting chars
        Age: 5, //Setting chars
        Sound: "Meow" //Setting chars
    } ;
    delete Animal.Age; //dellting the Age char
    document.getElementById("Dictionary").innerHTML = Animal.Age; //setting Age as the output when called on HTML
}
