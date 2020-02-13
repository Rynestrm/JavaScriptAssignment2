
// JavaScript varaiable
// targets all the images in any ul il
let flower = document.querySelectorAll("ul li img");
// targets all the images in the section > figure
let topFlower = document.querySelector("section figure img");
let fig = document.querySelector("figcaption");

// Functions
function largeImage(e) {
  // targeting the event of what is clicked
  let replaceImage = e.target.src;
  let replaceAlt = e.target.alt;
  // replacing the word small with the word large in the src path
  let replaced = replaceImage.replace("small", "large");
  topFlower.src = replaced;
  fig.innerHTML = replaceAlt;
}

// on click events
for (i=0; i < flower.length; i++)
    flower[i].addEventListener('click', largeImage);
