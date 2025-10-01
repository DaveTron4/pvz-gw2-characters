const renderCharacters = async () => {
    const response = await fetch('/characters')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    // Create title only once
    if (!document.querySelector('.title')) {
        const title = document.createElement('h1')
        title.textContent = 'PvZ GW2 Characters'
        title.classList.add('title')
        mainContent.appendChild(title)
    }

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
    mainContent.appendChild(cardContainer)

    if (data && data.length > 0) {
        data.forEach(character => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            topContainer.style.backgroundImage = `url(${character.image})`

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            const name = document.createElement('h3')
            name.textContent = character.name
            bottomContainer.appendChild(name)

            const shortDesc = document.createElement('p')
            shortDesc.textContent = character.short_desc
            bottomContainer.appendChild(shortDesc)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/characters/${character.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            cardContainer.appendChild(card)
        })
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Characters Available 😞'
        cardContainer.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderCharacters()
}
