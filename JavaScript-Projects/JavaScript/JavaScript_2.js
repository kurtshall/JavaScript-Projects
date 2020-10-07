function validationForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }


}