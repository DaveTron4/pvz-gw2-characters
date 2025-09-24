const renderPlants = async () => {
    const response = await fetch('/plants')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    // Create title only once
    if (!document.querySelector('.title')) {
        const title = document.createElement('h1')
        title.textContent = 'Plants vs. Zombies: Garden Warfare 2'
        title.classList.add('title')
        mainContent.appendChild(title)
    }

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
    mainContent.appendChild(cardContainer)

    if (data && data.length > 0) {
        data.forEach(plant => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            topContainer.style.backgroundImage = `url(${plant.image})`

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            const name = document.createElement('h3')
            name.textContent = plant.name
            bottomContainer.appendChild(name)

            const shortDesc = document.createElement('p')
            shortDesc.textContent = plant.shortDesc
            bottomContainer.appendChild(shortDesc)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/plants/${plant.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            cardContainer.appendChild(card)
        })
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Plants Available 😞'
        cardContainer.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderPlants()
}
