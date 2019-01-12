//get all the images
let images = document.querySelectorAll(".imgSlide");

//get next btn
let nextBtn = document.getElementById("nextBtn");
//get previous btn
let previousBtn = document.getElementById("previousBtn");

//hold current count of image
let current = 0;

//for mobile media query
let phone425px = window.matchMedia("(max-width: 425px)");

//clear all images
function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
}

//show first 4 books
function start() {
  reset();
  for (let i = 0; i < 4; i++) {
    images[i].style.display = "block";
  }
}

//when next btn is clicked
nextBtn.addEventListener("click", function() {
  //hide first 4 books
  for (let i = 0; i < 4; i++) {
    images[i].style.display = "none";
  }

  //show next 4 books
  for (let i = 4; i < 8; i++) {
    images[i].style.display = "block";
  }
});

//when previous btn is clicked
previousBtn.addEventListener("click", function() {
  //hide current 4 books
  for (let i = 4; i < 8; i++) {
    images[i].style.display = "none";
  }

  //show first 4 books
  for (let i = 0; i < 4; i++) {
    images[i].style.display = "block";
  }
});

start();

//if screen is size of media query
if (phone425px.matches) {
  reset(); //clear all comic images
  images[0].style.display = "block"; //only show 1

  //show next image
  nextBtn.addEventListener("click", function() {
    //loop back to first image after going through all of them
    if (current === images.length - 1) {
      //set current to 0 when being asked to display
      current = -1;
    }
    //clear screen every time next clicked
    reset();
    //show comic
    images[current + 1].style.display = "block";
    current++;
  });

  //when previous btn is clicked
  previousBtn.addEventListener("click", function() {
    //show last image if you're on the first image
    if (current === 0) {
      current = images.length;
    }

    //clear screen everytime previous is pressed
    reset();
    //show comic
    images[current - 1].style.display = "block";
    current--;
  });
}
