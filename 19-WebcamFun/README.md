# Webcam Fun

This challenge uses `getUserMedia` to take in webcam footage and filter it back to the user using the canvas element. It also allows the user to take a snapshot and download the image.

*Note:* Since this exercise uses webcam data, a server environment is needed for security and to get the device info. I used xampp as my local server environment. A package.JSON file is included to install browser sync via NPM. It's just a matter of going to the directory on your command line and entering `npm install` then `npm start` to install the dependency and your browser should open with the files.

## What I learned

* Using `navigator.mediaDevices.getUserMedia` to get the video stream from the webcam. This returns a promise. Wes uses `video.src = window.URL.createObjectURL(localMediaStream)` to set the video source as a URL data blob. I use Firefox as my browser and had issues with this method, so I used `video.srcObject = localMediaStream` to set the video source as the webcam stream. `Video.play()` is then used to return the video data to the video element.
* The webcam footage is then displayed in the top right hand corner of the stream. It is also painted to the canvas on the main part of the page every 16 seconds using the `drawImage` method.
* Inside the `paintToCanvas` function that includes the canvas' width, height and `drawImage` interval, the pixel data of each image frame being output to the canvas are held in an array called `pixels` using the `getImageData` method. Each pixel is then manipulated using a filter function and painted back to the canvas using `putImageData`.
* A photo can be taken using `toDataURL` and setting the canvas data as image/jpeg. A link is then created for the user to download in the form of a filmstrip image at the bottom of the page.
* The different filter effects are created by changing the red, green, blue or alpha pixel values and return the values. The green screen effect takes in input from the sliders, and when if a pixel matches conditions, the opacity of that pixel is set to 0.