const baseUrl = "https://independencedrive.github.io/site/";
const menuJSON = {
    "items": [
        {
            "name": "Accueil",
            "url": baseUrl,
        },
        {
            "name": "Prestations",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "Permis B Boite Manuelle",
                    "url":  baseUrl+"permis-b-boite-manuelle"
                },
                {
                    "name": "Permis B Boite Automatique",
                    "url":  baseUrl+"permis-b-boite-automatique"
                },
                {
                    "name": "Permis B Accelere",
                    "url":  baseUrl+"permis-b-accelere"
                },
                 {
                    "name": "Permis B Heures illimitees",
                     "url":  baseUrl+"permis-b-heures-illimitees"
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



function headerMenu(menu) {
    const section = document.getElementById('header');
    let html = '<ul>';

    html += '<li><img class="logo-header" src="https://raw.githubusercontent.com/independencedrive/site/main/media/images/logo_300x172.jpeg" alt="Logo" class="logo" /></li>';

    // Iterate over each item in the menu
    menu.items.forEach(item => {
        if (item.dropdown) {
            // Dropdown item
            html += `
                <li class="dropdown">
                    <a href="${item.url}" class="dropbtn">${item.name}</a>
                    <div class="dropdown-content">
                        ${item.dropdown.map(subItem => 
                            `<a href="${subItem.url}">${subItem.name}</a>`
                        ).join('')}
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

document.addEventListener('DOMContentLoaded', () => {
    headerMenu(menuJSON);
});
