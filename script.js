const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active')    
    })
}

if (close) {
    bar.addEventListener('click', () => {
      nav.classList.remove('active')    
    })
}


// 1. Corrected the variable name to camelCase
var mainImg = document.getElementById("Mainimg");

// 2. Used querySelectorAll (remember the dot '.' for classes)
var smallImg = document.querySelectorAll(".Small-img");

// 3. Matched the variable names perfectly
smallImg[0].onclick = function() {
  mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
  mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function() {
  mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
  mainImg.src = smallImg[3].src;
}



    