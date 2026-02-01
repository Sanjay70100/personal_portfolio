// TYPEWRITER EFFECT
const texts = ["Frontend Developer", "UI / UX Designer", "Web Designer", "Creative Coder"];
let index = 0;
let charIndex = 0;
const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
  if (charIndex < texts[index].length) {
    textElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(eraseWriter, 1500);
  }
}

function eraseWriter() {
  if (charIndex > 0) {
    textElement.textContent = texts[index].substring(0, charIndex-1);
    charIndex--;
    setTimeout(eraseWriter, 50);
  } else {
    index = (index+1) % texts.length;
    setTimeout(typeWriter, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

// MOBILE NAV
function hamburg() {
  document.querySelector(".dropdown").style.display = "block";
}
function cancel() {
  document.querySelector(".dropdown").style.display = "none";
}
