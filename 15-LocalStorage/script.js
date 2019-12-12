// Getting elements
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

// Array to hold all items as objects
const items = JSON.parse(localStorage.getItem('items')) || [];

// Functions
function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text, //ES6 shorthand for text: text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked': ''} >
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  // Checking if the item that was clicked was an input element
  if (!e.target.matches('input')) return; // return if not an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

// Listening for when the form is submitted
addItems.addEventListener('submit', addItem);

// Listening for a click inside the item list
itemsList.addEventListener('click', toggleDone);

// Populate the list with items on page load
populateList(items, itemsList);