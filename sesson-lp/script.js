const details = document.querySelectorAll('details')

details.forEach((targetDetail) => {
  targetDetail.addEventListener('click', () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute('open')
      }
    })
  })
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
