const header = document.querySelector('header')

const nav = document.createElement('nav')
nav.className = 'header-nav' // using our CSS class

// Left side
const navLeft = document.createElement('div')
navLeft.className = 'nav-left' 

const logo = document.createElement('img')
logo.src = '/logo.png'
logo.alt = 'PvZ GW2 Logo'
logo.className = 'logo'

const title = document.createElement('strong')
title.textContent = 'PvZ GW2'

navLeft.appendChild(logo)
navLeft.appendChild(title)

// Right side
const navRight = document.createElement('ul')
navRight.className = 'nav-right'

const homeItem = document.createElement('li')
const homeLink = document.createElement('a')
homeLink.textContent = 'Home'
homeLink.href = '/'
homeLink.role = 'button'

homeItem.appendChild(homeLink)
navRight.appendChild(homeItem)

// Assemble nav
nav.appendChild(navLeft)
nav.appendChild(navRight)
header.appendChild(nav)
