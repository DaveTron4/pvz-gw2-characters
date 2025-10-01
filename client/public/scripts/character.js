const renderCharacter = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());

    const response = await fetch('/characters');
    const data = await response.json();

    const characterContent = document.getElementById('character-content');

    let character = data.find(character => character.id === requestedID);

    if (character) {
        document.getElementById('name').textContent = character.name;
        document.getElementById('img').src = character.image;
        document.getElementById('longDesc').textContent = character.long_desc;

        // Container for parent or variants
        const variantContainer = document.createElement('div');
        variantContainer.classList.add('variant-container'); // use CSS for layout

        if (character.is_variant) {
            // --- Show parent of this variant ---
            const parent = data.find(c => c.id === character.variant_of);
            if (parent) {
                const parentBlock = document.createElement('div');
                parentBlock.classList.add('character-card'); // style in CSS

                const parentName = document.createElement('h3');
                parentName.textContent = `Variant of: ${parent.name}`;

                const parentImg = document.createElement('img');
                parentImg.src = parent.image;
                parentImg.alt = parent.name;

                parentBlock.appendChild(parentName);
                parentBlock.appendChild(parentImg);
                variantContainer.appendChild(parentBlock);
            } else {
                variantContainer.textContent = "This character is a variant, but the base character wasn't found.";
            }
        } else {
            // --- Show all variants of this base character ---
            const variants = data.filter(c => c.variant_of === character.id);
            if (variants.length > 0) {
                const variantsTitle = document.createElement('h3');
                variantsTitle.textContent = "Variants of this character:";
                variantContainer.appendChild(variantsTitle);

                const variantsWrapper = document.createElement('div');
                variantsWrapper.classList.add('variants-wrapper'); // flex or grid in CSS

                variants.forEach(v => {
                    const variantCard = document.createElement('div');
                    variantCard.classList.add('character-card');

                    const variantName = document.createElement('p');
                    variantName.textContent = v.name;

                    const variantImg = document.createElement('img');
                    variantImg.src = v.image;
                    variantImg.alt = v.name;

                    variantCard.appendChild(variantName);
                    variantCard.appendChild(variantImg);
                    variantsWrapper.appendChild(variantCard);
                });

                variantContainer.appendChild(variantsWrapper);
            } else {
                variantContainer.textContent = "This is a base character with no variants.";
            }
        }

        characterContent.appendChild(variantContainer);
    } else {
        const message = document.createElement('h2');
        message.textContent = 'No character available 😞';
        characterContent.appendChild(message);
    }
};

renderCharacter();
