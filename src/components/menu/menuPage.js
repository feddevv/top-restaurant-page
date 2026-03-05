import { menu } from "../../data/menu.js"

export default function createMenuPage() {
    const menuDiv = document.createElement('div')
    const content = document.getElementById('content')
    content.innerHTML = ''

    // Headline
    const headline = document.createElement('h1')
    headline.textContent = 'Menu'
    menuDiv.appendChild(headline)

    // Menu
    for (const [key, value] of Object.entries(menu)) {
        const subHeadLine = document.createElement('h2')
        subHeadLine.textContent = key
        menuDiv.appendChild(subHeadLine)

        const ul = document.createElement('ul')

        value.forEach(el => {
            const li = document.createElement('li')
            li.textContent = `${el.name} - $${el.price.toFixed(2)}`
            ul.appendChild(li)
        })

        menuDiv.appendChild(ul)
    }

    content.appendChild(menuDiv)
}