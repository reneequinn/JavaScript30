// Getting all checkoxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const clearBtn = document.querySelector('#clearBtn');

let lastChecked;

// Function to handle checkbox clicks
function handleCheck(e) {
  let inBetween = false;
  // Check if the shift key was held down
  // and that is being checked, not unchecked
  if (e.shiftKey && this.checked) {
    // Loop over all checkboxes
    checkboxes.forEach(checkbox => {
      // Checking if the item is after the first checked item,
      // OR is the last item checkes
      if (checkbox === this || checkbox === lastChecked) {
        // Set inBetween to its opposite
        inBetween = !inBetween;
      }
      // If inBetween is true, check the checkbox
      if (inBetween) {
        checkbox.checked = true;
      }
    });

  }
  // Set last checked to the item that was clicked
  lastChecked = this;
}

// Function to handle clearing all checkboxes
function clearCheckboxes() {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}

// Event listener applied to each checkbox input
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
// Event listener applied to clear button
clearBtn.addEventListener('click', clearCheckboxes);