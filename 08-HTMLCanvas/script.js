// Canvas element:
const canvas = document.querySelector('#draw');
// Get the 2d context:
const ctx = canvas.getContext('2d');
// Make canvas the same width and height as the window:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Stroke:
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
// Default flag for when the mouse is moving without the button being held down
let isDrawing = false;
// Starting point for line
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop running if mouse is not down
  ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // change hue as mouse moves
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  // Flips the direction of line width - going up or down
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  // Increment or decrement line width based on condition above
  if (direction) {
    ctx.lineWidth ++;
  } else {
    ctx.lineWidth --;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  // resets the starting position of the line each time the mouse is clicked
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);