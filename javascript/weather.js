'use strict';

// ============================================================
// API Key
// ------------------------------------------------------------
// Don't have a key? Check README.md for instructions
// on how to get one.
// ============================================================

const APIKEY = '08a5344d054eb5827207c45b5010b2e4'

// ============================================================
// Select DOM Elements
// ============================================================

// Search
let area = document.querySelector('#area').value || 'Boston'
const locationSearch = document.querySelector('#location-search')

// Location
const locationName = document.querySelector('#location-name')
const country = document.querySelector('#country')

// Temperature
const temp = document.querySelector('#temp')
const tempMin = document.querySelector('#temp-min')
const tempMax = document.querySelector('#temp-max')

// Weather
const conditionDescription = document.querySelector('#condition-description')

// Wind
const windSpeed = document.querySelector('#wind-speed')

// Error
const errorBox = document.querySelector('#error')

// ============================================================
// Get Weather Function
// ============================================================

async function getWeather (city, key, units = 'imperial') {
  try {
    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${key}`)
    const data = await r.json()

    // Reset body class
    document.body.classList = ''

    // Clear Error
    errorBox.classList.add('hide')

    // Set Location Data
    locationName.innerText = data.name || ''
    country.innerText = data.sys.country

    // Set Temperature Data
    temp.innerText = Math.round(data.main.temp)
    tempMin.innerText = Math.round(data.main.temp_min)
    tempMax.innerText = Math.round(data.main.temp_max)

    // Set Temperature Body Class
    if (data.main.temp < 45) {
      document.body.className = 'cold'
    } else if (data.main.temp >= 45 && data.main.temp <= 75) {
      document.body.className = 'warm'
    } else {
      document.body.className = 'hot'
    }
      
      var hThree = document.createElement('h3')
    var coldRun = document.createTextNode('Put on a jacket, suck it up, and run like the wind.')
    var tempRange = document.getElementsByClassName('temp-range')
      function coldRunDiv() {
        tempRange.appendChild(hThree);
        hThree.appendChild(coldRun);
      } 
      
      if (document.body.className = 'cold') {
          coldRunDiv;
      }
    // Set Weather Data
    conditionDescription.innerText = data.weather[0].description
    windSpeed.innerText = Math.round(data.wind.speed)
    

   // Set Weather Body Class
    document.body.classList.add(data.weather[0].main.toLowerCase())

        
    // Set Wind Body Class
    if (data.wind.speed > 10 && data.wind.speed < 20) {
        document.body.className += ' ' + 'breezy';
    } else if (data.wind.speed >= 20) {
        document.body.className += ' ' + 'windy';
    } else {
        document.body.className += ' ' + 'calm';
    }

    // Log data from the API to the console
    console.log(data)
  } catch (e) {
    console.error(e)
    errorBox.classList.remove('dn')
  }
}

// ============================================================
// Listen for form submission
// ============================================================

locationSearch.addEventListener('submit', function (e) {
  area = document.querySelector('#area').value || 'Boston'

  // Run the getWeather function
  getWeather(area, APIKEY)

  // Prevent the default behavior of the form
  e.preventDefault()
})

// ============================================================
// Get weather on page load
// ============================================================

getWeather(area, APIKEY)
