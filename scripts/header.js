// Define the menu in JSON format with links
const menuJSON = {
    "items": [
       
        {
            "name": "Accueil",
            "url": "./"
        },
        {
            "name": "Prestations",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "Permis B Boite Manuelle",
                    "url": "#"
                },
                {
                    "name": "Permis B Boite Automatique",
                    "url": "#"
                },
                {
                    "name": "Permis B Accelere",
                    "url": "#"
                },
                 {
                    "name": "Permis B Heures illimitees",
                    "url": "#"
                },
                 {
                    "name": "Permis B Conduite Accompagnee",
                    "url": "#"
                },
                 {
                    "name": "Permis B + Voyage a Disney Paris",
                    "url": "#"
                }
            ]
        },
        {
            "name": "Infos",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "A propos",
                    "url": "#"
                },
                {
                    "name": "Contact",
                    "url": "#"
                },
                {
                    "name": "Actualites",
                    "url": "#"
                },
                {
                    "name": "Avis client",
                    "url": "#"
                }
            ]
        }
    ]
};

const baseUrl1 = window.location.origin;
console.log(baseUrl1); 
const baseUrl2 = document.baseURI;
console.log(baseUrl2);

// Function to load the header menu into the section
function headerMenu(menu) {
    const section = document.getElementById('header');
    let html = '<ul>';

    // Añadir el logo antes del primer elemento del menú
    html += '<li><img class="logo-header" src="https://raw.githubusercontent.com/independencedrive/site/main/media/images/logo_300x172.jpeg" alt="Logo" class="logo" /></li>';

    // Iterate over each item in the menu
    menu.items.forEach(item => {
        if (item.dropdown) {
            // Dropdown item
            html += `
                <li class="dropdown">
                    <a href="${item.url}" class="dropbtn">${item.name}</a>
                    <div class="dropdown-content">
                        ${item.dropdown.map(subItem => `
                            <a href="${subItem.url}">${subItem.name}</a>
                        `).join('')}
                    </div>
                </li>
            `;
        } else {
            // Regular item
            html += `
                <li><a href="${item.url}">${item.name}</a></li>
            `;
        }
    });

    html += '</ul>';
    section.innerHTML = html;
}

// Call the function to load the header menu when the content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    headerMenu(menuJSON);
});