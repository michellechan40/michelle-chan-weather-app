// Date & Time Portion

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let time = now.getHours();
let minutes = now.getMinutes();
let currentDay = days[now.getDay()];

let h2 = document.querySelector("h2");
h2.innerHTML = `${currentDay}, ${time}:${minutes}`;

// Temperature Portion

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let temp = document.querySelector("#temp");
  let units = "metric";
  temp.innerHTML = temperature;
}

// Show Current City

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value;
  searchCityName(input.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

// Search City

function searchCityName(city) {
  let apiKey = "44a101a44ae6f5fd6581c9d964176928";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}
