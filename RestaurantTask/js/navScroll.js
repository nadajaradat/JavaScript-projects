let lastKnownScrollPosition = 0;
let ticking = false;

// Select the header element by its tag name
let header = document.querySelector('header');

function doSomething(scrollPos) {
  console.log(header);
    if (scrollPos > 100) {
      header.style.backgroundColor = "#c1ab84"; 
    } else {
      header.style.backgroundColor = "transparent"; 
    }
  }
  

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
