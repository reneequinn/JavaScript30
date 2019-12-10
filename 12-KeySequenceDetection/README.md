# Key Sequence Detection

This challenge checks the value of keys pressed against a secret code to trigger a special event.

## What I learned

* Using the ``key`` property on the keyup event to get the value of the key pressed.
* Storing these values into an array with ``push``, and then trimming to the length of the secret code variable length.
  * This was done using the ``splice`` method, which mutates the array.
* Creating a string from array values using ``join``, which can then be used to compare the secret code and trigger an event on screen.

## Additional Notes

* The original example used [Cornify JS](https://www.cornify.com/js/cornify.js) to randomly add pictures of rainbows and unicorns. I thought it was something to do with corn the vegetable, so changed my solution.
* I added a canvas element that takes up the whole window, and added a corn image at random x and y positions when the secret code ``corn`` is entered. It's silly, and a little reference to Aqua Teen Hunger Force.