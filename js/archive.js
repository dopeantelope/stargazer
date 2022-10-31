// document.querySelector('#archive-button').addEventListener('click', getPic)


function getPic() {
  const date = document.querySelector('input').value
    if (data = '') {
      return '2022-06-21'
    }
  const URL = `https://api.nasa.gov/planetary/apod?api_key=aUpeH3A5sDCzjBuHfTzqMI9vVbyr4g5iXAicBU4j&date=${date}&concept_tags=True`

  fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log('hi')
      populateArchiveData(data)
  })

  .catch(err => {
  console.log(`error ${err}`)
  })
}

function populateArchiveData(data) {
  console.log(data)
  if (data.media_type == 'video') {
    document.querySelector('#archive-image').style.display = 'none'
    document.querySelector('#archive-videoPlayer').src = data.url

  } else {
    document.querySelector('#archive-videoPlayer').style.display = 'none'
    document.querySelector('#archive-image').src = data.url
  }
  document.querySelector('h2').innerText = data.title
  document.querySelector('p').innerText = data.explanation
}