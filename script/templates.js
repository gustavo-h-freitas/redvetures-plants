const icons = {
  water: {
    rarely: '1-drop',
    regularly: 'two-drops',
    daily: '3-drops'
  },
  sun: {
    no: 'no-sun',
    low: 'low-sun',
    high: 'high-sun'
  }
}

function generateMainCard (params) {
  return `
  <div class="main-card-plant relative flex flex-col">
    <div class="staff-favorite absolute ${params.staff_favorite ? 'hidden' : ''}">
      <p>✨ Staff favorite</p>
    </div>

    <div class="flex justify-center flex-1 align-center">
      <img src="${params.url}">
    </div>

    <div class="flex justify-between align-center">
      <h3>${params.name}</h3>
      <div>
        <h4>$25</h4>
        <div class="flex gap-1">
          <img src="../assets/icons/${params.toxicity ? 'toxic.svg' : 'pet.svg'}">
          <img src="../assets/icons/${icons.sun[params.sun]}.svg">
          <img src="../assets/icons/${icons.water[params.water]}.svg">
        </div>
      </div>
    </div>
  </div>
  `
}

function generateDefaultCard (params) {
  return `
  <div class="card-plant flex flex-col">
    <div class="plant-img flex-1">
      <img src="${params.url}" alt="">
    </div>

    <h5>${params.name}</h5>
    <div class="flex justify-between">
      <h5>$${params.price}</h5>
      <div class="flex gap-1">
        <img src="../assets/icons/${params.toxicity ? 'toxic.svg' : 'pet.svg'}">
        <img src="../assets/icons/${icons.sun[params.sun]}.svg">
        <img src="../assets/icons/${icons.water[params.water]}.svg">
      </div>
    </div>
  </div>
  `
}

function generateMobileCard (params) {
  return `
    <div class="card-mobile relative flex flex-col">
      <div class="staff-favorite absolute ${params.staff_favorite ? 'hidden' : ''}">
        <p>✨ Staff favorite</p>
      </div>

      <div class="flex-1 img-mobile">
        <img src="${params.url}" alt="">
      </div>
      
      <div class="p-3">
        <h4>${params.name}</h4>
        <div class="flex justify-between align-center">
          <h4>$${params.price}</h4>
          <div class="flex align-center gap-1">
            <img src="../assets/icons/${params.toxicity ? 'toxic.svg' : 'pet.svg'}">
            <img src="../assets/icons/${icons.sun[params.sun]}.svg">
            <img src="../assets/icons/${icons.water[params.water]}.svg">
          </div>
        </div>
      </div>

    </div>
  `
}

export {
  generateDefaultCard,
  generateMainCard,
  generateMobileCard
}