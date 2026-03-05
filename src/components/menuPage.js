export default function createMenuPage() {
    const menuDiv = document.createElement('div')
    const content = document.getElementById('content')

    const menu = {
        'Appetizers': [
            {name: 'Bruschetta al Pomodoro', price: 8.00},
            {name: 'Calamari Fritti', price: 10.00},
            {name: 'Caprese Salad', price: 9.00},
            {name: 'Garlic Bread', price: 6.00},
        ],
        'Main Courses': [
            {name: 'Spaghetti Carbonara', price: 16.00},
            {name: 'Fettuccine Alfredo', price: 15.00},
            {name: 'Lasagna Bolognese', price: 17.00},
            {name: 'Risotto Mushroom', price: 14.00},
            {name: 'Grilled Fish of the Day', price: 19.00},
            {name: 'Osso Buco', price: 22.00},
        ],
        'Pizzas': [
            {name: 'Margherita', price: 12.00},
            {name: 'Pepperoni', price: 13.00},
            {name: 'Quattro Formaggi', price: 14.00},
            {name: 'Prosciutto e Rucola', price: 15.00},
        ],
        'Desserts': [
            {name: 'Tiramisu', price: 7.00},
            {name: 'Panna Cotta', price: 6.00},
            {name: 'Gelato (3 scoops)', price: 5.00},
            {name: 'Zabaglione', price: 7.00},
        ],
        'Beverages': [
            {name: 'Espresso', price: 3.00},
            {name: 'Cappuccino', price: 4.00},
            {name: 'Italian Wine (glass)', price: 6.00},
            {name: 'Soft Drinks', price: 2.50},
            {name: 'Sparkling Water', price: 3.00},
        ]
    }

    // Headline
    const headline = document.createElement('h1')
    headline.textContent = 'Menu'
    menuDiv.appendChild(headline)

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