export default function renderHomePage() {
    const content = document.getElementById('content')

    // Headline
    const headline = document.createElement('h1')
    headline.textContent = 'Welcome to La Bella Cucina'
    content.appendChild(headline)

    // Image
    const img = document.createElement('img')
    img.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'
    img.alt = 'Restaurant illustration'
    content.appendChild(img)

    // Description
    const description = document.createElement('p')
    description.textContent = 'Experience the finest Italian cuisine in the heart of the city. Our chefs combine traditional recipes with modern techniques to create unforgettable dining experiences. Using only the freshest local ingredients, we bring authentic flavors from Italy to your table'
    content.appendChild(description)
}