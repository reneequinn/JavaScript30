const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint) // fetch built in browser API, returns a promise
  .then(blob => blob.json()) // returns another promise
  .then(data => cities.push(...data)); // push and spread the data from the json promise into the cities array

function findMatches(wordToMatch, cities) { // take in the input from the search box and the cities array
  return cities.filter(place => { // filter the array
    // if the city or state matches what was searched:
    const regex = new RegExp(wordToMatch, 'gi'); // put search term into a regular expression variable, global and case insensitive
    return place.city.match(regex) || place.state.match(regex); // match the search term to a city or state 
  });
}

// format the numbers to a string with comma formatting
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches() { // this will run against the searchInput event listeners
  const matchArray = findMatches(this.value, cities); // an array of matches from the search input and cities array
  const html = matchArray.map(place => { // loop over the matchArray
    const regex = new RegExp(this.value, 'gi'); // take the search term and create a regular expression to highlight in results
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // replace the matched city name with the regex variable
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); // replace the matched state names with regex variable
    //return the city and state name matches along with the population as list items
    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
  }).join(''); // convert to a string from array
  suggestions.innerHTML = html; // append the html to the suggestions class list
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); // listen for a change
searchInput.addEventListener('keyup', displayMatches); // run the function every time a key has been pressed