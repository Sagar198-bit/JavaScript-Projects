const APIKEY = "6a008389613b341e0107e07ccfc6cac5";

const SearhBox = document.getElementById("SearchBox");
SearhBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log(SearhBox.value);
    GetWeatherResult(SearhBox.value);
  }
});

const GetWeatherResult = async (city) => {
  try {
    const Response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
    );
    if (!Response.ok) {
      throw new Error("This is was Error in First Api !!");
    } else {
      const data = await Response.json();
      console.log(data);
      Filterthedata(data);
    }
  } catch (Err) {
    console.log(Err);
  }
};
function Filterthedata(data) {
  const { weather, main, name } = data;
  const [{ description, icon }] = weather;
  const { temp } = main;
  ShowDataOnpage(icon, temp, description, name);
}

function ShowDataOnpage(
  Weathericon,
  WeatherTemprature,
  WeatherDescription,
  locationName
) {
  const SearchResultContainer = document.getElementById("WeatherResult");
  SearchResultContainer.innerHTML = `<img src="https://openweathermap.org/img/wn/${Weathericon}@2x.png">
            <h1 id="temp">${Math.floor(WeatherTemprature)}&nbsp;&deg;C</h1>
            <p id="Weather">${WeatherDescription}</p>
            <p id="Location">${locationName}</p>`;
}

//Geolocation Section.....
const locationbutton = document.getElementById("location");

locationbutton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (postion) => {
      const {
        coords: { latitude, longitude },
      } = postion;
      const getdata = async () => {
        try {
          const Response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
          );
          if (!Response.ok) {
            throw new Error("This was an Error in Second Api !!");
          } else {
            const data = await Response.json();
            Filterthedata(data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getdata();
    },
    (err) => {
      console.log(`Geolocation Not found !!`);
    }
  );
});
