# Fun with HTML5 Canvas

This challenge makes use of the HTML5 canvas and mouse event handlers to create a fun little drawing surface

## What I learned

* Working with the ``canvas`` and the 2d ``context``
* Different methods for the canvas context including:
  * ``strokeStyle`` for colour and using hsl values to create a pen that changes colour
  * ``lineJoin`` and ``lineCap`` to create a rounded tip
  * ``lineWidth`` for the width, and using a variable to increase and decrease that value
* Using the ``offsetX`` and ``offsetY`` values in conjunction with mouse events to create lines
* Different mouse events, including:
  * ``mousemove`` to run the ``draw`` function
  * ``mousedown`` to make the ``isDrawing`` state true inside the ``draw`` function that is called whenever the mouse moves
  * ``mouseout`` and ``mouseup`` to stop the ``isDrawing`` status whenever the user stops clicking or leaves the window

### Additional notes

* This project was a lot of fun. I can imagine using this as a basis to create an MS paint style application with more options
* Changed the background colour and saturation of the pen colour to suit my taste