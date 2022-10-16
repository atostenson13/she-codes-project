//get date ↓
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${hours}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
   }

//↓ show typed in city
function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let cityInput = document.querySelector("#city-name");
  cityElement.innerHTML = cityInput.value;
}
//↑
//↓ Show current temp degree
function currentTemp(response) {
  console.log(response);
  let myTemp = document.querySelector("#degree");
  myTemp.innerHTML = Math.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "imperial";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiURL).then(currentTemp);
}
//↑

//↓ Get date only
let currentTime = new Date();
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(currentTime);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
//↑
//↓ Get current location in button
function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let apiKey = "b6ab9299e2acce3faa1c08a87bb9785b";
  let units = "imperial";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
axios.get(`${apiUrl}&appid=${apiKey}`).then(handlePosition);
navigator.geolocation.getCurrentPosition(handlePosition);
}
//↑