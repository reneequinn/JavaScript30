// Debounce function to delay returning the checkSlde function on the scroll event to improve performance
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Getting all image elements that will be animated on scroll
const sliderImages = document.querySelectorAll('.slide-in');

// Function to slide images in when they are halfway on the screen, using the scroll event
function checkSlide(e) {
  console.log('it ran');
  // For each image check if half shown and not scrolled past, and add or remove active class to transition in or out
  sliderImages.forEach(sliderImage => {
    // Halfway through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

    // Bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    // Keeping the conditions to be checked inside variables
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    // Checking conditions and adding/removing the active class
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));