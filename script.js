//your JS code here. If required.


const button = document.getElementById("btn");
const container = document.getElementById("container");

button.addEventListener("click",() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de')
         .then(response => response.json())
	.then(data => {
         container.innerHTML += `<div>Current weather in London:${data.weather[0].main}</div>`;;
         })

	container.appendChild(div);
})

