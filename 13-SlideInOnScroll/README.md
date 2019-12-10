# Slide in on Scroll

In this activity we check to see if an image is halfway on the screen before sliding it in using CSS transition.

## What I learned

* Using a ``debounce`` high level function to limit how often the ``checkSlide`` function runs on the scroll event. This improves performance.
* Using variables to store lengthy conditions and make if statements easier to understand.
* Using ``height`` and ``offsetTop`` image properties, and the window ``innerHeight`` and ``scrollY`` properties to check where the centre of an image is located on the Y axis.