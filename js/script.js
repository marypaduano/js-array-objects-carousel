console.log('carosello')


const slides = [
    {
        photo: './img/cappadocia.jpg',
        title: "Cappadocia",
        description: 'Mongolfiere all alba',
    },
    {
        photo: './img/aurora.jpg',
        title: 'Aurora boreale',
        description: 'Uno scenario da vivere almeno una volta nella vita',
    },
    {
        photo: './img/Barriera-corallina.jpg',
        title: 'Barriera corallina',
        description: 'Tutti i colori della barriera corallina a Nabq Bay',
    },
    {
        photo: './img/route-66.jpg',
        title: 'Route 66',
        description: 'Da percorrere tutta in Harley',
    },
    {
        photo: './img/Naples.jpg',
        title: "Napoli",
        description: "Vista del golfo di Napoli da Fuorigrotta",
    },
]

let currentIndex = 0

// recupero il carosello dove inserire le slide
const carousel = document.querySelector('.carousel')

slides.forEach(({ photo, title, description }, index) => {
    let className = 'slide'
    if (index === currentIndex) {
        className += ' active'
    }

    const slideEl = `
    <div class="${className}">
      <img src="${photo}" alt="" />
      <div class="slide_overlay">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    </div>
  `

    carousel.innerHTML += slideEl
})


// recupero slide dal carosello
let photoEl = document.querySelectorAll('.slide')

// recupero le frecce e assegno event listener
const rightArrow = document.querySelector('.arrow-right')
const leftArrow = document.querySelector('.arrow-left')



rightArrow.addEventListener('click', nextSlide)
leftArrow.addEventListener('click', prevSlide)


//FUNZIONI

function nextSlide() {
    const lastIndex = photoEl.length - 1
    console.log(currentIndex)

    photoEl[currentIndex].classList.remove('active')

    if (currentIndex < lastIndex) {
        currentIndex++
    }
    else {
        currentIndex = 0
    }

    photoEl[currentIndex].classList.add('active')
}

function prevSlide() {
    photoEl[currentIndex].classList.remove('active')

    if (currentIndex > 0) {
        currentIndex--
    }
    else {
        currentIndex = photoEl.length - 1
    }

    photoEl[currentIndex].classList.add('active')
}
