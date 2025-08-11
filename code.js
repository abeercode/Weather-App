const loc = document.querySelector("#location");
const submit = document.querySelector("#submit");
submit.addEventListener("click", async(e) => {
    e.preventDefault()
   await processJSON()
    

})


async function getLocation() {


    const inputedLocation = loc.value.trim().toLowerCase()
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputedLocation}?key=YJB4JAFJCG3W8P3H667LQ657D`)
    const dataWeather = await response.json()
    const degree = await dataWeather.days[0].temp
    console.log(degree)
    console.log(dataWeather)
    return dataWeather;
}

async function processJSON() {
    const dataWeather = await getLocation();
    const address = dataWeather.resolvedAddress 
    const temp = dataWeather.days[0].temp
    const feelsLike =dataWeather.days[0].feelslike
    const condition = dataWeather.conditions
    
    const requireData= {
        "temp": temp,
        "address":address,
        "feelsLike":feelsLike,
        "condition":condition
    }
    
    return requireData
}
