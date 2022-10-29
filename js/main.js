/* search - datalist */
let input = document.getElementById('input')
let icon = document.querySelector('.search-icon')
input.onfocus = function () {
    browsers.style.display = 'block'
    icon.style.display = 'none'
};

for (let option of browsers.options) {
    option.onclick = function () {
        input.value = option.value
        browsers.style.display = 'none'
    }
};

input.oninput = function() {
currentFocus = -1
var text = input.value.toUpperCase()
for (let option of browsers.options) {
    if(option.value.toUpperCase().indexOf(text) > -1) {
        option.style.display = "block"
    } else {
        option.style.display = "none"
    }
}}


/* header menu | mobile */
let navBarToggler = document.querySelector('.navbar-toggler')
let closeIcon = document.querySelector('#navbar-close')
let openIcon = document.querySelector('#navbar-open')

navBarToggler.addEventListener('click', function () {
    openIcon.classList.toggle('hidden')
    closeIcon.classList.toggle('hidden')
})