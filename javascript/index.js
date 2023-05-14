function showTime() {
  let sofiaDateElement = document.querySelector("#sofia .date");
  sofiaDateElement.innerHTML = moment()
    .tz("Europe/Sofia")
    .format("MMMM Do YYYY");

  let sofiaTimeElement = document.querySelector("#sofia .time");
  sofiaTimeElement.innerHTML = moment()
    .tz("Europe/Sofia")
    .format("HH:mm:ss[<small>] A [</small]");

  let galapagosDateElement = document.querySelector("#galapagos .date");
  galapagosDateElement.innerHTML = moment()
    .tz("Pacific/Galapagos")
    .format("MMMM Do YYYY");

  let galapagosTimeElement = document.querySelector("#galapagos .time");
  galapagosTimeElement.innerHTML = moment()
    .tz("Pacific/Galapagos")
    .format("HH:mm:ss[<small>] A [</small]");

  let losangelesDateElement = document.querySelector("#los-angeles .date");
  losangelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");

  let losangelesTimeElement = document.querySelector("#los-angeles .time");
  losangelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("HH:mm:ss[<small>] A [</small]");
}

showTime();
setInterval(showTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
     <div class="time">${cityTime.format("HH:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
let citiesContent = document.querySelector("#city");
citiesContent.addEventListener("change", updateCity);
