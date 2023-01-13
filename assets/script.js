const API="38690b59e3cfde574e8eb53ee48ef3c8";
var button = document.getElementById('submit');

document.getElementById("submit").onclick= grabCity();
function grabCity(){
    var city= document.getElementById("cityName");
 if (city == "") {
    alert("Please enter a city name")
  }else{
   ApiCall(city);
  }
};

function ApiCall(city) {
    var geoUrl= `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API}`

    fetch(geoUrl)
    .then((data)=>{
        return data.json();
    }).then((data)=>{
        var weatherUrl =`https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&units=imperial&exclude=minutely,hourly,alerts&appid=${API}`;

        fetch(weatherUrl).then((data)=>{return data.json();}).then((data)=>{
            save(city);
            displayHistory();

            document.getElementById('current-city').textContent=city;
             document.getElementById('date').textContent=new Date(data.current.dt*1000);
              document.getElementById('current-city').textContent=city;

        })
    })



};