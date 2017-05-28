var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * number);
}

//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }

for (var i = 1; i <= 16; i++) {
  var myDiv = document.createElement('div');
  document.body.appendChild(myDiv);
}

function bgChange(e) {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) +
    ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);


var divs = document.querySelectorAll('div');
for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}
