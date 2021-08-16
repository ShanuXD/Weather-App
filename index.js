// api.openweathermap.org/data/2.weather/?q={city name}&appid={API key}
// b4b478c7779eb49f650f36de4665b751
const api = {
  key: "b4b478c7779eb49f650f36de4665b751",
  url: "https://api.openweathermap.org/data/2.5/weather",
};
const input = document.getElementById("searchBox");
input.addEventListener("keypress", (e) => {
  // console.log(e.key);
  if (e.key == "Enter") {
    getReport(input.value);
    document.querySelector(".display").style.display = "block";
  }
});

async function getReport(city) {
  const weather = await (
    await fetch(`${api.url}?q=${city}&appid=${api.key}&units=metric`)
  ).json();
  showWeather(weather);
}

function showWeather(weather) {
  // console.log(weather)
  const city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const tempreture = document.getElementById("tempreture");
  tempreture.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  const max = document.getElementById("min-max");
  max.innerHTML = `${Math.round(weather.main.temp_min)}&deg;C(min),${Math.round(
    weather.main.temp_max
  )}&deg;C(max)`;

  const catagory = document.getElementById("catagory");
  catagory.innerText = `${weather.weather[0].main}`;

  const date = document.getElementById("date");
  const todayDate = new Date();
  date.innerText = currentDate(todayDate);
}

function currentDate(data) {
  const days = [
    "sunday",
    "monday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "augest",
    "september",
    "octeber",
    "november",
    "december",
  ];
  const year = data.getFullYear();
  const date = data.getDate();
  const month = months[data.getMonth()];
  const day = days[data.getDay()];

  return `${date} ${month}(${day}),${year}`;
}
getReport("bangalore");
