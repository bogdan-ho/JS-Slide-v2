const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        slideActiveRemove()
        slide.classList.add('active')
    })
})

function slideActiveRemove (string) {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}