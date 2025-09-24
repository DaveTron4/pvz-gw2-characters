const renderPlant = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());

    const response = await fetch('/plants');
    const data = await response.json();

    const plantContent = document.getElementById('plant-content');

    let plant = data.find(plant => plant.id === requestedID);

    if (plant) {
        document.getElementById('name').textContent = plant.name;
        document.getElementById('img').src = plant.image;
        document.getElementById('longDesc').textContent = plant.longDesc;

        // Create container for variants
        const variantContainer = document.createElement('div');
        variantContainer.classList.add('variant-container'); // matches CSS

        plant.variants.forEach(variant => {
            const variantCard = document.createElement('article'); 
            variantCard.classList.add('card'); // Pico CSS card

            const variantImage = document.createElement('img');
            variantImage.src = variant.image;
            variantImage.alt = variant.name;

            const variantName = document.createElement('h4');
            variantName.textContent = variant.name;

            variantCard.appendChild(variantImage);
            variantCard.appendChild(variantName);
            variantContainer.appendChild(variantCard);
        });

        plantContent.appendChild(variantContainer);
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No plant available 😞';
        plantContent.appendChild(message);
    }
};

renderPlant();
