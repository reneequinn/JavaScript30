# Dev Tools Domination

This was a quick tutorial on outputting to the browser console beyond ``console.log``.

## What I learned

* Working with string formatting and template literals:
  * Using %s to format a value as a string. Other fomat specifiers include %i or %d for integer and %f for decimal value.
  * Using template literals by placing the log message in backticks and using the ``${var}`` placeholder
* Styling console logs using %c
* Different ways to give meaning to console messages through the use of ``console.warn``, ``console.error`` and ``console.info``.
* Using ``console.assert`` to notify the console if a condition is true
* Use of ``console.dir`` to view all the properties of a particular DOM elements
* Using ``console.group`` to output a collection of data from an array. Can be used with ``groupCollapsed`` to create a collapsed tab group
* ``console.count`` to get a count of how many times something is logged
* Using ``console.time`` to set a timer and find out how long it takes to complete a task, e.g. fetching data