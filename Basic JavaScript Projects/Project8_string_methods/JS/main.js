//slice function
function cut_line() {
    var Sentence = "I will Cut this sentence to only have cut show up!";
    var Section = Sentence.slice(7,10);//using the slice function to slice only Cut
    document.getElementById("Slice").innerHTML = Section;
}

//concat function
function full_Sentence() {
    var p_1 = "I like to go ";
    var p_2 = "on walks with my ";
    var p_3 = "dog at the parks!";
    var p_all = p_1.concat(p_2, p_3);//using the concat function to combine all the sentences
    document.getElementById("One_Sentence").innerHTML = p_all;
}

//string function
function too_string() {
    var X = 516489;
    var string = X.toString();//using the string function to convert the number to a string
    document.getElementById("string").innerHTML = string;
}

//precision function
function num_precision() {
    var x = 1678.65416841;
    var pre = x.toPrecision(8);//using the precision function use 8 of the numbers
    document.getElementById("precision").innerHTML = pre;
}