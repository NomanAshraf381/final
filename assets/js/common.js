// search button popup
let modal = document.querySelector('.search-modal')
document.querySelector('#search').addEventListener('click', showSearch)
document.querySelector('main').addEventListener('click', hideSearch)
function showSearch() {
    modal.classList.toggle('sactive')
}
function hideSearch() {
    modal.classList.remove('sactive')
}

// hide and show nav
let hiddenNav = document.querySelector('.right-nav ul')
document.querySelector('#tbars').addEventListener('click', showNav)
document.querySelector('main').addEventListener('click', hideNav)
function showNav() {
    hiddenNav.classList.toggle('nactive')
}
function hideNav() {
    hiddenNav.classList.remove('nactive')
}

// goto magic 
let gotoButton = document.querySelector('.gototop')
document.addEventListener('scroll', () => {
    if (pageYOffset >= 500) {
        gotoButton.classList.add('goactive')
    }
    else {
        gotoButton.classList.remove('goactive')
    }
})

// navbar action
let navBar = document.querySelector('nav')
document.addEventListener('scroll', () => {
    if (pageYOffset >= 50) {
        navBar.classList.add('stick')
    }
    else {
        navBar.classList.remove('stick')
    }
})