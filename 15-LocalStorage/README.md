# Local Storage and Event Delegation

This challenge uses local storage to save items added to a check list and event delegation to handle saving the checked state of those items.

## What I learned

* Using `localStorage` to save user data, including set, get and remove items to the localStorage.
* Using `JSON.stringify` and `JSON.parse` to convert to and from JSON for meaningful data in local storage.
* Event delegation:
  * Since the items in the list are added dynamically, either by the user or from local storage, a method is used where the parent element, in this case the `<ul>`, handles the click event to mark an item as 'done'.
  * This is achieved by checking if the click inside the list's target was an `input` using `e.target.matches('input')`, and leaving the function, if it doesn't.
  * If the target is an input, meaning the actual checkbox, or its label was clicked, then it is assigned to a variable.
  * Using the `data-index` attribute, where items are zero-indexed, and match their place in the items array, the property of done is then toggled, set into local storage and the page is updated.
* Completed the additional challenges of adding buttons and functions to clear the items in local storage, and check or uncheck all items.