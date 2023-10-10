// Pre-loader

let preLoader = () => {
  // Hide the preloader with a fade-out effect when the page is fully loaded
  const preloader = document.querySelector('.preloader')
  const content = document.querySelector('.site-content')

  preloader.style.opacity = '0' // Set opacity to 0 for fade-out
  content.style.display = 'block'

  // Delay hiding the preloader until the fade-out animation completes
  setTimeout(function () {
    preloader.style.display = 'none'
  }, 1000) // Adjust the timeout to match the transition duration (0.5s)
}

window.addEventListener('load', () => setTimeout(preLoader, 3000))

// Sticky Navbar

// Get the navbar element
const navbar = document.querySelector('.navbar')

// Get the offset position of the navbar
const stickyOffset = navbar.offsetTop

// Function to toggle the 'sticky' class
function toggleSticky() {
  if (window.pageYOffset > stickyOffset) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
}

// Add a scroll event listener to call the toggleSticky function
window.addEventListener('scroll', toggleSticky)

// Mobile Navbar

const hamburger = document.querySelector('.hamburger-btn')
const spMenuContent = document.querySelector('.sp-menu-content')
const spMenuItems = document.querySelectorAll('.sp-menu-item')
const subItems = document.getElementById('sub-items')
const spService = document.getElementById('sp-service')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('close')
  spMenuContent.classList.toggle('hide')
})

spService.addEventListener('click', () => {
  subItems.classList.toggle('show')
  spMenuItems.forEach((spMenuItem) => {
    spMenuItem.classList.toggle('hover')
  })
})

// お問い合わせフォーム
const formCloseBtn = document.getElementById('form-close-btn')
const form = document.querySelector('.form')

function openForm() {
  form.classList.add('show')
}

formCloseBtn.addEventListener('click', function (e) {
  form.classList.remove('show')
})

const scroller = scrollama()

scroller
  .setup({
    step: '.scrollama',
  })
  .onStepEnter((response) => {
    console.log(response)
    response.element.classList.remove('inactive')
    response.element.classList.add('active')
  })
