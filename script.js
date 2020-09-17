//getting current date
let today = new Date();
let date = (today.getDate() + 1) + '/' + today.getMonth() + '/' + today.getFullYear();
let queryUrl;
if (localStorage.getItem("last") !== null) {
    queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('last')},us&units=metric&APPID=3b5715c4cc3d80c499e1192a073d5982`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        let icon = $('<img>').attr('src', iconUrl);
        let card = $('<div>').addClass('card mt-3 mx-3');
        let body = $("<div>").addClass('card-body');
        let head = $("<h5>").addClass('card-title').text(response.name + ' (' + date + ')').append(icon);
        let temp = $("<p>").addClass('card-text').text('Temperature: ' + Math.round(response.main.temp) + '°C');
        let humid = $("<p>").addClass('card-text').text('Humidity: ' + response.main.humidity + '%');
        let wind = $("<p>").addClass('card-text').text('Wind Speed: ' + response.wind.speed + 'kph');
        body.append(head, temp, humid, wind);
        card.append(body);
        $('#displayContainer').prepend(card);
    })
}
//submit event for search area
$('#search').submit(function (e) {
    e.preventDefault();
    let userInput = $('#userInput').val().trim();
    localStorage.setItem('last', userInput)
    queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput},us&units=metric&APPID=3b5715c4cc3d80c499e1192a073d5982`;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        let icon = $('<img>').attr('src', iconUrl);
        let card = $('<div>').addClass('card mt-3 mx-3');
        let body = $("<div>").addClass('card-body');
        let head = $("<h5>").addClass('card-title').text(response.name + ' (' + date + ')').append(icon);
        let temp = $("<p>").addClass('card-text').text('Temperature: ' + Math.round(response.main.temp) + '°C');
        let humid = $("<p>").addClass('card-text').text('Humidity: ' + response.main.humidity + '%');
        let wind = $("<p>").addClass('card-text').text('Wind Speed: ' + response.wind.speed + 'kph');
        body.append(head, temp, humid, wind);
        card.append(body);
        $('#displayContainer').prepend(card);
    });
    $("#userInput").val('');
  })

  function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);