const roverOne = document.querySelector('#rover-one')
const roverTwo = document.querySelector('#rover-two')
const roverThree = document.querySelector('#rover-three')
const roverDescription = document.querySelector('#rover-description')
const curiosityButton = document.querySelector('#curiosity-button')
const opportunityButton = document.querySelector('#opportunity-button')
const spiritButton = document.querySelector('#spirit-button')

roverOne.addEventListener('click', showRoverOne)
roverTwo.addEventListener('click', showRoverTwo)
roverThree.addEventListener('click', showRoverThree)


function showRoverOne() {
  roverDescription.style.visibility = 'visible'
  roverOne.style.backgroundColor = 'white'
  roverTwo.style.backgroundColor = 'rgba(255, 255, 255, .2)'
  roverThree.style.backgroundColor = 'rgba(255, 255, 255, .2)'
}


function showRoverTwo() {
  roverDescription.style.visibility = 'hidden'
  roverOne.style.backgroundColor = 'rgba(255, 255, 255, .2)'
  roverTwo.style.backgroundColor = 'white'
  roverThree.style.backgroundColor = 'rgba(255, 255, 255, .2)'
}

function showRoverThree() {
  roverDescription.style.visibility = 'hidden'
  roverOne.style.backgroundColor = 'rgba(255, 255, 255, .2)'
  roverTwo.style.backgroundColor = 'rgba(255, 255, 255, .2)'
  roverThree.style.backgroundColor = 'white'
}