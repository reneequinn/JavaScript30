# Mouse Move Shadow Effect

This challenge uses the mouse move event to change the direction of text shadows

## What I learned

* Using destructuring to set properties from the same event or object as variables, using the following syntax:
```javascript
const = { offsetWidth: width, offsetHeight: height } = hero;
```
This takes the offset width and height values from the hero div and sets them to variables `width` and `height`.
* Using `this` and `e.target` to check if the mouse location is inside the object that the event is being listened on, or an item inside it.
  * `offsetLeft` and `offsetTop` values of the `e.target` are then added to the x and y variables if a child item is being targeted. This keeps the x and y values consistent across the entire window.
* Using `xWalk` and `yWalk` variables to ensure the the text shadow's "walk" or distance is no more than -50 to 50px from the text.
* Setting multiple text shadows that behave differently depending on where the x and y walk values are placed and if there are any modifiers on them.