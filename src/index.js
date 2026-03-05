import homePage from './components/home/homePage.js'
import menuPage from './components/menu/menuPage.js'
import aboutPage from './components/about/aboutPage.js'

import './styles.css'

const homeButton = document.getElementById('home-btn')
const menuButton = document.getElementById('menu-btn')
const aboutButton = document.getElementById('about-btn')

homeButton.addEventListener('click', homePage)
menuButton.addEventListener('click', menuPage)
aboutButton.addEventListener('click', aboutPage)

homePage()