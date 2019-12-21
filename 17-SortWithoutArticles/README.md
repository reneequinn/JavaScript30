# Sort Without Articles

In this challenge we used regular expressions to sort an array in alphabetical order, excluding articles such as 'the', 'a' and 'an' at the beginning of the name.

## What I learned

* Using the `replace` and `trim` methods to remove articles and whitespace from the start of the string.
* Using these methods inside a function, that can then be used inside the `sort` method, to prevent mutating the original array.
* Using an arrow function, implicit return and ternary operator to reduce the amount of lines used in sorting through the array.
* The array `map` method to loop over all items in an array and create a list item.
* Using `join` to remove the comma that would otherwise be included, `innerHTML` converts the array to a string.