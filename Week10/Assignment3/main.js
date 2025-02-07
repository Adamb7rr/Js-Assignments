
// const jsButton2 = document.querySelector('.js-button2')
// const jsButton3 = document.querySelector('.js-button3')
function check (selector) {
    const jsButton = document.querySelector(selector)
    if (jsButton.classList.contains('is-toggled')) {
        console.log('Exist')
        jsButton.classList.remove('is-toggled')
    } else {
        console.log('Not Exist')
        jsButton.classList.add('is-toggled')
    }
}