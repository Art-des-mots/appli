const stories = [
    {
        title: "Poème 1",
        description: "Aperçu de la citation 1...",
        category: "poetry",
        image: "story1.jpg"
    },
    {
        title: "Histoire d'amour",
        description: "Une belle histoire romantique...",
        category: "romance",
        image: "story2.jpg"
    },
    {
        title: "Mystère en forêt",
        description: "Une aventure pleine de suspense...",
        category: "thriller",
        image: "story3.jpg"
    },
    {
        title: "Royaume perdu",
        description: "Une quête dans un monde fantastique...",
        category: "fantasy",
        image: "story4.jpg"
    }
];

// Fonction pour afficher les histoires
function displayStories(filteredStories) {
    const container = document.getElementById('stories-container');
    container.innerHTML = '';

    filteredStories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.classList.add('story-card');

        storyCard.innerHTML = `
            <img src="${story.image}" alt="${story.title}">
            <h3>${story.title}</h3>
            <p>${story.description}</p>
            <button>Lire</button>
        `;

        container.appendChild(storyCard);
    });
}

// Affichage par défaut
displayStories(stories);

// Fonction de recherche
document.getElementById('search-bar').addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();

    const filteredStories = stories.filter(story =>
        story.title.toLowerCase().includes(searchText) ||
        story.description.toLowerCase().includes(searchText)
    );

    displayStories(filteredStories);
});

// Fonction de filtrage par catégorie
document.getElementById('category-filter').addEventListener('change', (e) => {
    const category = e.target.value;

    if (category === 'all') {
        displayStories(stories);
    } else {
        const filteredStories = stories.filter(story => story.category === category);
        displayStories(filteredStories);
    }
});
