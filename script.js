const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '176db88701msh72fee3a6e8bd87fp1f6b12jsn5e0014074753',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)

		cloud_pctk.innerHTML = response.cloud_pct
		feels_likek.innerHTML = response.feels_like
		humidityk.innerHTML = response.humidity
		max_tempk.innerHTML = response.max_temp
		min_tempk.innerHTML = response.min_temp
		sunrisek.innerHTML = response.sunrise
		sunsetk.innerHTML = response.sunset
		tempk.innerHTML = response.temp
		wind_degreesk.innerHTML = response.wind_degrees
		wind_speedk.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)

		cloud_pctm.innerHTML = response.cloud_pct
		feels_likem.innerHTML = response.feels_like
		humiditym.innerHTML = response.humidity
		max_tempm.innerHTML = response.max_temp
		min_tempm.innerHTML = response.min_temp
		sunrisem.innerHTML = response.sunrise
		sunsetm.innerHTML = response.sunset
		tempm.innerHTML = response.temp
		wind_degreesm.innerHTML = response.wind_degrees
		wind_speedm.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)

		cloud_pctc.innerHTML = response.cloud_pct
		feels_likec.innerHTML = response.feels_like
		humidityc.innerHTML = response.humidity
		max_tempc.innerHTML = response.max_temp
		min_tempc.innerHTML = response.min_temp
		sunrisec.innerHTML = response.sunrise
		sunsetc.innerHTML = response.sunset
		tempc.innerHTML = response.temp
		wind_degreesc.innerHTML = response.wind_degrees
		wind_speedc.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)

		cloud_pctb.innerHTML = response.cloud_pct
		feels_likeb.innerHTML = response.feels_like
		humidityb.innerHTML = response.humidity
		max_tempb.innerHTML = response.max_temp
		min_tempb.innerHTML = response.min_temp
		sunriseb.innerHTML = response.sunrise
		sunsetb.innerHTML = response.sunset
		tempb.innerHTML = response.temp
		wind_degreesb.innerHTML = response.wind_degrees
		wind_speedb.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));