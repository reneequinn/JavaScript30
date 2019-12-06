# Hold Shift to Check all Checkboxes

This was a quick challenge that looked at how to create an email style checkbox function where if you select one item, hold down shift and select another, all items between will be selected.

## What I learned
* Using ``booleanVar = !booleanVar`` instead of hard coding false or true inside if statements
* Using ``querySelectorAll`` to get all input elements with a type of checkbox
  * This creates a node list that can be looped over with the ``forEach`` method
* Checking for the press of the shift key with the ``click`` event

## Additional notes

* Added a clear checks button which uses the ``forEach`` method to set the checked property to false