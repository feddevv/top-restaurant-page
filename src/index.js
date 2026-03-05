import homePage from './components/home/homePage.js'
import menuPage from './components/menu/menuPage.js'
import aboutPage from './components/about/aboutPage.js'

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutButton = document.getElementById('about')

homeButton.addEventListener('click', homePage)
menuButton.addEventListener('click', menuPage)
aboutButton.addEventListener('click', aboutPage)

homePage()