const roverOne = document.querySelector('#rover-one')
const roverTwo = document.querySelector('#rover-two')
const roverThree = document.querySelector('#rover-three')
const roverDescription = document.querySelector('#rover-description')
const curiosityButton = document.querySelector('#curiosity-button')
const opportunityButton = document.querySelector('#opportunity-button')
const spiritButton = document.querySelector('#spirit-button')
const curiosity = document.querySelector('#curiosity')
const opportunity = document.querySelector('#opportunity')
const spirit = document.querySelector('#spirit')
const curiosityDescrip = document.querySelector('#curiosity-description')
const opportunityDescrip = document.querySelector('#opportunity-description')
const spiritDescrip = document.querySelector('#spirit-description')
const roverImage = document.getElementById('rover-image')


roverOne.addEventListener('click', showRoverOne)
roverTwo.addEventListener('click', showRoverTwo)
roverThree.addEventListener('click', showRoverThree)
curiosityButton.addEventListener('click', showCuriosity)
opportunityButton.addEventListener('click', showOpportunity)
spiritButton.addEventListener('click', showSpirit)


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

function showCuriosity() {
  opportunity.style.display = 'none'
  spirit.style.display = 'none'
  curiosity.style.display = 'block'
  roverImage.src = 'home/curiosity.jpeg'
  
}

function showOpportunity() {
  opportunity.style.display = 'block'
  spirit.style.display = 'none'
  curiosity.style.display = 'none'
  roverImage.src = 'home/opportunity.jpeg'
  
}

function showSpirit() {
  opportunity.style.display = 'none'
  spirit.style.display = 'block'
  curiosity.style.display = 'none'
  roverImage.src = 'home/spirit.jpg'
}