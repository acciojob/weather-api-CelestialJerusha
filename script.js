//your JS code here. If required.
let API_KEY = "9e632c24fc993f6c55c5949921d62ef6";
let baseUrl = `https://api.openweathermap.org/data/2.5/`;

const button = document.getElementById("btn");
const container = document.getElementById("container");

button.addEventListener("click",() => {
    let fetchString = "London";
    
    getFetchResult(fetchString);
})

async function getFetchResult(fetchString){
    let url = `${baseUrl}/weather?&q=${fetchString}&appid=${API_KEY}&units=metric`
    console.log(url);
    const response = await fetch(url, {method:"GET"});
    const result = await response.json();
	let div = document.createElement("div");

	div.innerHTML = `<div>Current weather in London:${result.weather[0].main}</div>`;
	container.appendChild(div);
    
}