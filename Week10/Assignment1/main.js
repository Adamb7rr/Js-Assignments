let jsButton = document.querySelector('.js-button')

function check () {
    if (jsButton.classList.contains('js-button')) {
        console.log('Exist')
    } else {
        console.log('Not Exist')
    }
}
