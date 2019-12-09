// Array of keys pressed and secret code
const pressed = [];
const secretCode = 'corn';

// Setting up the canvas
const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Corn image
const img = document.createElement('img');
img.src = 'corn.png';
img.alt = 'An ear of corn';

// Get document elements
const cornHeading = document.querySelector('#corn-heading');
const cornEmoji = document.querySelector('#corn-emoji');

// Canvas functions
function drawCorn() {
  let x = Math.floor(Math.random() * (innerWidth - 100));
  console.log(x);
  let y = Math.floor(Math.random() * (innerHeight - img.height));
  ctx.drawImage(img, x, y);
}

// Event Listener
window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    drawCorn();
    cornHeading.style.display = 'block';
    cornEmoji.style.display = 'none';
  }
});