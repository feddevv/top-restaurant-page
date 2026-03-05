import { team } from "../data/team.js"

export default function createAboutPage() {
    const aboutDiv = document.createElement('div')
    const content = document.getElementById('content')

    // Headline
    const headline = document.createElement('h1')
    headline.textContent = 'About'
    aboutDiv.appendChild(headline)

    // Story block
    const storyDiv = document.createElement('div')
    const storyHeadline = document.createElement('h2')
    const storyDescription = document.createElement('p')
    storyHeadline.textContent = 'Our Story'
    storyDescription.textContent = "La Bella Cucina was founded in 1987 by Chef Giovanni Rossi, who brought his family's traditional recipes from Naples, Italy. For over three decades, we have been serving authentic Italian cuisine with passion and dedication."
    storyDiv.append(storyHeadline, storyDescription)

    // Philosophy block
    const philosophyDiv = document.createElement('div')
    const philosophyHeadline = document.createElement('h2')
    const philosophyDescription = document.createElement('p')
    philosophyHeadline.textContent = 'Our Story'
    philosophyDescription.textContent = "We believe in using only the finest ingredients, sourced locally whenever possible and imported from Italy for that authentic taste. Every dish is prepared fresh with love and attention to detail, just like Nonna used to make."
    philosophyDiv.append(philosophyHeadline, philosophyDescription)

    // Team block
    const teamDiv = document.createElement('div')
    const teamHeadline = document.createElement('h2')
    const teamList = document.createElement('ul')
    teamHeadline.textContent = 'Our Team'
    team.forEach(member => {
        const li = document.createElement('li')
        li.innerHTML = `<strong>${member.fullname}</strong> - ${member.position}`
        teamList.appendChild(li)
    })
    teamDiv.append(teamHeadline, teamList)

    // Contact
    const contactDiv = document.createElement('div')
    const contactHeadline = document.createElement('h2')
    const contacts = document.createElement('ul')
    contactHeadline.textContent = 'Our Contact'
    contacts.innerHTML = `
    <p>
        <strong>Address:</strong> 123 Main Street, Downtown <br>
        <strong>Phone:</strong> (555) 123-4567<br>
        <strong>Email:</strong> info@labellacucina.com<br>
        <strong>Hours:</strong> Tuesday - Sunday, 11:00 AM - 10:00 PM<br>
        <em>Closed on Mondays</em>
    </p>
    `
    contactDiv.append(contactHeadline, contacts)

    aboutDiv.append(storyDiv, philosophyDiv, teamDiv, contactDiv)
    content.appendChild(aboutDiv)
}