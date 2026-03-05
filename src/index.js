import homePage from './components/homePage.js'
import menuPage from './components/menuPage.js'
import aboutPage from './components/aboutPage.js'

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutButton = document.getElementById('about')

homeButton.addEventListener('click', homePage)
menuButton.addEventListener('click', menuPage)
aboutButton.addEventListener('click', aboutPage)

homePage()