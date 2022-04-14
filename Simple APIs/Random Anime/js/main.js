//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const randomEpisode = document.querySelector('button')
   
  const url = `https://api.jikan.moe/v4/random/anime`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(animeData => {
        console.log(animeData)

        document.getElementById('title').innerText = animeData.data.title
        document.querySelector('img').src = animeData.data.images.jpg.large_image_url 


        document.getElementById('synopsis').innerText = animeData.data.synopsis
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

