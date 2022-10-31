// ROVER VARIABLES
const curiosity = document.querySelector('#curiosity')
const opportunity = document.querySelector('#opportunity')
const spirit = document.querySelector('#spirit')

const roverImage = document.getElementById('rover-image')
const rovers = [curiosity, opportunity, spirit]
let currentRover = rovers.filter(rover => !rover.classList.contains('hidden'))
let roverId = currentRover[0].id

let roverInfoOne = document.getElementById('rover-info-one')
let roverInfoTwo = document.getElementById('rover-info-two')
let roverInfoThree = document.getElementById('rover-info-three')

let roverInfoArrays = [roverInfoOne, roverInfoTwo, roverInfoThree]
let currentButton = roverInfoArrays.filter(info => info.classList.contains('bg-white'))

// ROVER INFO BUTTONS
const roverInfoButtons = document.getElementsByClassName('rover-info-button')
for (let i = 0; i < roverInfoButtons.length; i++) {
  roverInfoButtons[i].addEventListener('click', showRoverInfo)
}

// EVENT LISTENERS FOR NAV BUTTONS
let navButtons = document.getElementsByClassName('nav-button')
for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', showDescription)
}


function checkRover() {
  currentRover = rovers.filter(rover => !rover.classList.contains('hidden'))
  roverId = currentRover[0].id
}

function checkInfoButton() {
  currentButton = roverInfoArrays.filter(info => info.classList.contains('bg-white'))
}


function showDescription() {
  showRoverOne()
  let id = this.innerText.toLowerCase()
  currentRover = rovers.filter(rover => !rover.classList.contains('hidden'))
  if (currentRover[0].id != id) {
    currentRover[0].classList.add('hidden')
  }
  document.getElementById(`${id}`).classList.remove('hidden')
  highlightNavButton(id)
}

function highlightNavButton(id) {
  if (id == currentRover[0].id) {
    return
  } else {
    let prevRover = currentRover[0].id
    document.getElementById(`${id}-button`).classList.add('rover-select')
    document.getElementById(`${prevRover}-button`).classList.remove('rover-select')
    document.getElementById(`${id}-button`).classList.remove('rover-highlight')
    document.getElementById(`${prevRover}-button`).classList.add('rover-highlight')
  }
}

function showRoverOne() {
  checkRover()

  document.getElementById(`${roverId}-info-1`).classList.remove('hidden')
  document.getElementById(`${roverId}-info-2`).classList.add('hidden')
  document.getElementById(`${roverId}-info-3`).classList.add('hidden')
  roverInfoOne.classList.add('bg-white')
  roverInfoOne.classList.remove('bg-kindaWhite')
  roverInfoTwo.classList.add('bg-kindaWhite')
  roverInfoThree.classList.add('bg-kindaWhite')

}


function showRoverInfo() {
  checkRover()
  highlightInfoNav(this)
  if (this.id == 'rover-info-one') {
    document.getElementById(`${roverId}-info-1`).classList.remove('hidden')
    document.getElementById(`${roverId}-info-2`).classList.add('hidden')
    document.getElementById(`${roverId}-info-3`).classList.add('hidden')
  } else if (this.id == 'rover-info-two') {
    document.getElementById(`${roverId}-info-1`).classList.add('hidden')
    document.getElementById(`${roverId}-info-2`).classList.remove('hidden')
    document.getElementById(`${roverId}-info-3`).classList.add('hidden')
  } else if (this.id == 'rover-info-three') {
    document.getElementById(`${roverId}-info-1`).classList.add('hidden')
    document.getElementById(`${roverId}-info-2`).classList.add('hidden')
    document.getElementById(`${roverId}-info-3`).classList.remove('hidden')
  }
}

function highlightInfoNav(button) {
  if (button == currentButton) {
    return
  } else {
    checkInfoButton()
    let prevButton = currentButton[0].id
    console.log(currentButton)
    document.getElementById(`${button.id}`).classList.add('bg-white')
    document.getElementById(`${button.id}`).classList.remove('bg-kindaWhite')
    document.getElementById(`${prevButton}`).classList.remove('bg-white')
    document.getElementById(`${prevButton}`).classList.add('bg-kindaWhite')
  }
}