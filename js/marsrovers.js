// CURIOSITY VARIABLES
const curiosity = document.querySelector('#curiosity')
const curiosityDescription = document.querySelector('#curiosity-description')
const curiosityInfoOne = document.querySelector('#curiosity-info-one')

// OPPORTUNITY VARIABLES
const opportunity = document.querySelector('#opportunity')
const opportunityDescription = document.querySelector('#opportunity-description')

// SPIRIT VARIABLES
const spirit = document.querySelector('#spirit')
const spiritDescription = document.querySelector('#spirit-description')

// BUTTONS
const curiosityNav = document.querySelector('#curiosity-button')
const opportunityNav = document.querySelector('#opportunity-button')
const spiritNav = document.querySelector('#spirit-button')
const roverInfoOne = document.querySelector('#rover-info-one')
const roverInfoTwo = document.querySelector('#rover-info-two')
const roverInfoThree = document.querySelector('#rover-info-three')

// OTHER VARIABLES
const roverImage = document.getElementById('rover-image')



curiosityNav.addEventListener('click', showCuriosity)
opportunityNav.addEventListener('click', showOpportunity)
spiritNav.addEventListener('click', showSpirit)
roverInfoOne.addEventListener('click', showInfoOne)
roverInfoTwo.addEventListener('click', showInfoTwo)
roverInfoThree.addEventListener('click', showInfoThree)



function showCuriosity() {
  opportunity.style.display = "none"
  spirit.style.display = "none"
  curiosity.style.display = "block"
}

function showOpportunity() {
  curiosity.style.display = "none"
  spirit.style.display = "none"
  opportunity.style.display = "block"
}

function showSpirit() {
  curiosity.style.display = "none"
  opportunity.style.display = "none"
  spirit.style.display = "block"
}

function showInfoOne() {
  if (!curiosity.classList.contains('hidden')) {
    curiosityDescription.style.display = "block"
    curiosityInfoOne.style.display = 'none'
  }
}

function showInfoTwo() {
  if (!curiosity.classList.contains('hidden')) {
    curiosityDescription.style.display = 'none'
    curiosityInfoOne.style.display = 'block'
  }
}

function showInfoThree() {
  console.log('fdjfld')
}