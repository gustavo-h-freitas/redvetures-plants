import { generateDefaultCard, generateMainCard, generateMobileCard } from './templates.js'

function togglePicks () {
  const picks = document.querySelector('#picks')
  picks.classList.toggle('hidden')
}

function getInputValue ({target}, key) {
  const value = target.value
  data.selects[key] = value

  if (Object.values(data.selects).every(item => item)) {
    fetchPlants()
  }
}

async function fetchPlants () {
  const picks = document.querySelector('#picks')
  picks.classList.add('hidden')

  data.plants = null
  document.querySelector('#results-desktop').innerHTML = ''
  document.querySelector('#results-mobile').innerHTML = ''

  const queryParams = new URLSearchParams()

  Object.entries(data.selects).forEach(([key, value]) => {
    queryParams.append(key, value)
  })

  const { data: plants } = await axios.get(`https://front-br-challenges.web.app/api/v2/green-thumb?${queryParams.toString()}`)
  data.plants = plants
  renderPlants()
}

function renderPlants () {
  const results = document.querySelector('#results-desktop')
  const resultsMobile = document.querySelector('#results-mobile')

  data.plants.forEach((item, index) => {
    const divDesktop = document.createElement('div')
    divDesktop.innerHTML = index === 0 ? generateMainCard(item) : generateDefaultCard(item)
    results.appendChild(divDesktop)

    const divMobile = document.createElement('div')
    divMobile.classList.add('scroll-snap-child', 'flex', 'justify-center', 'align-center')
    divMobile.innerHTML = generateMobileCard(item)
    resultsMobile.appendChild(divMobile)
  })

  togglePicks()
  const noResults = document.querySelector('#no-results')
  noResults.style.display = 'none'
}

const data = {
  selects: {
    sun: '',
    water: '',
    pets: ''
  },
  plants: null
}

Object.keys(data.selects).forEach(select => {
  const selector = document.querySelector(`#${select}`)
  selector.addEventListener('input', value => getInputValue(value, select))
})

const backTop = document.querySelector('#back-top')
backTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}))
