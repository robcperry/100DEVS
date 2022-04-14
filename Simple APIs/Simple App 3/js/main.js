//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const city = document.querySelector('input').value.toLowerCase()
   console.log(city)
   
  const url = `https://goweather.herokuapp.com/weather/${city}`
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(weather => {
        console.log(weather)
        
        document.querySelector('h2').innerText = weather.description
        document.querySelector('h3').innerText = weather.temperature

        
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}

