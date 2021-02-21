const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)     // API call
    .then(blob => blob.json())      // convert json data to js formet
    .then(data => cities.push(...data));    // spread the data in Array

function findMatches(wordToSearch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToSearch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function displayMatches() {
    // console.log(this.value);

    const matchArray = findMatches(this.value, cities);
    // console.log(matchArray);

    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');

        const cityName = place.city.replace(regex, `<span class="hl"> ${this.value} </span>`);
        const stateName = place.state.replace(regex, `<span class="hl"> ${this.value} </span>`);

        return `
        <li>
            <span class="name">${cityName} , ${stateName}</span> 
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');

    suggestion.innerHTML = html;
};

const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);