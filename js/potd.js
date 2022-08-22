const URL = 'https://api.nasa.gov/planetary/apod?api_key=hQugpZb4DXCh3qxWhYhrMDKWzhxAShVgfb3UrFGF'

function getPic() {
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      populateData(data)
  })

  .catch(err => {
  console.log(`error ${err}`)
  })
}

function populateData(data) {
  console.log(data)
  if (data.media_type == 'video') {
    document.querySelector('#potd-videoPlayer').src = data.url
  } else {
    document.querySelector('#potd-pictureOfTheDay').src = data.hdurl
  }
  document.querySelector('h2').innerText = data.title
  document.querySelector('p').innerText = data.explanation
}

getPic()