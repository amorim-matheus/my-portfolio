// Crated a function to change padding and width of div on home, but after
// found a value that works for all sizes
/*
function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}

if (getWidth() < 1000) {
    document.getElementsByClassName("masthead-subheading")[0].style.width = "80%";
    document.getElementsByClassName("masthead-subheading")[0].style.paddingRight = "0";
    document.getElementsByClassName("masthead-subheading")[0].style.paddingLeft = "0";
}
*/

// Function to shrink the size of the navbar when user scrolls downs

// Define which function to call when window is scrolled
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  
  // To be easier, start by capturing the navbar and storing in a variable
  let navbar = document.getElementById("mainNav")
  
  function updatenvabar() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
      navbar.classList.add("scroll");
    }
  
    // If user goes back to the beginning of the page
    else {
      navbar.classList.remove("scroll");
    }
  }

  updatenvabar();
}
