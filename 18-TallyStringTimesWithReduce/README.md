# Tally String Times With Reduce

In this challenge I learned how to tally up a list of video times, and convert them from a node list to an array of numbers. The reduce method was then used to convert the total run time in seconds, which could then be converted back into a string showing the total hours, minutes and seconds.

## What I learned

* Using the `Array.from` method to convert a node list of items with the same data attribute of `data-time` to an array. The array method `map` was then used on each item in the array to access each node items `dataset` attribute of time value.
* Accessing the minute and seconds value of the time using the `split` method, then converting the string values to numbers with `parseFloat`. A simple calculation was then used to converting the minutes to seconds, and add the values together.
* The `reduce` method was used to take each value, in seconds and return the total time in seconds.
* A variable `secondsLeft` was then used to keep track of the remaining seconds when calculating the hours and minutes, and was used in the final tally of the video times, output to the console.

## Additional Notes

* I went to the trouble of adding the time values to the list, and added some formatting, and a final tally to the bottom of the page.