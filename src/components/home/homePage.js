import './styles.css'

export default function renderHomePage() {
    const homeDiv = document.createElement('div')
    homeDiv.id = 'home'

    const content = document.getElementById('content')
    content.innerHTML = ''

    // Headline
    const headline = document.createElement('h1')
    headline.textContent = 'Welcome to La Bella Cucina'
    homeDiv.appendChild(headline)

    // Image
    const img = document.createElement('img')
    img.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'
    img.alt = 'Restaurant illustration'
    homeDiv.appendChild(img)

    // Description
    const description = document.createElement('p')
    description.textContent = 'Experience the finest Italian cuisine in the heart of the city. Our chefs combine traditional recipes with modern techniques to create unforgettable dining experiences. Using only the freshest local ingredients, we bring authentic flavors from Italy to your table'
    homeDiv.appendChild(description)

    content.appendChild(homeDiv)
}