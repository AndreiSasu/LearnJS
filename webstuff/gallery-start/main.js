var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
var images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */

for (i = 0; i < images.length; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + images[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function(e) {
    console.log(e);
    changeMainImage(e.target);
  })
}


function changeMainImage(newImage) {
  displayedImage.setAttribute('src', newImage.getAttribute('src'));
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(e) {
  console.log(e);

  if ('dark' === btn.getAttribute("class")) {
    btn.setAttribute('class', 'light');
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else if ('light' === btn.getAttribute('class')) {
    btn.setAttribute('class', 'dark');
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
})
