function countdown() { //countdown function and getting the second input from useer
    var seconds = document.getElementById("seconds").value;

    function tick() { // function to count down from the input
        seconds = seconds - 1; //this reduces the input value by one
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); // this will go off ever second
    if(seconds == -1) { //once the time reach -1 it will alert the user the time is up
        alert("Time's up!");
    }
        }
    tick();
}



var slideIndex = 1; // setting global variabel
showSlides(slideIndex);//setting showslides to the slideindex value

function plusSlides(n) { //this will go to the previous or next slide deppening on if you hit the next or prev button
  showSlides(slideIndex += n);
}

function currentSlide(n) { //shows the current slide to the user
  showSlides(slideIndex = n);
}

function showSlides(n) { 
  var i;
  var slides = document.getElementsByClassName("mySlides"); //this is getting the images
  var dots = document.getElementsByClassName("dot"); //this is getting the dots 
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}