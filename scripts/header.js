// Define the menu in JSON format with links
const menuJSON = {
    "items": [
        {
            "name": "Accueil",
            "url": "/"
        },
        {
            "name": "Prestations",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "Permis B Boite Manuelle",
                    "url": "/permis-b-manuelle"
                },
                {
                    "name": "Permis B Boite Automatique",
                    "url": "/permis-b-automatique"
                },
                {
                    "name": "Permis B Accelere",
                    "url": "/permis-b-accelere"
                },
                {
                    "name": "Permis B Heures illimitees",
                    "url": "/permis-b-illimitees"
                },
                {
                    "name": "Permis B Conduite Accompagnee",
                    "url": "/permis-b-conduite-accompagnee"
                },
                {
                    "name": "Permis B + Voyage a Disney Paris",
                    "url": "/permis-b-disney"
                }
            ]
        },
        {
            "name": "Infos",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "A propos",
                    "url": "/a-propos"
                },
                {
                    "name": "Contact",
                    "url": "/contact"
                },
                {
                    "name": "Actualites",
                    "url": "/actualites"
                },
                {
                    "name": "Avis client",
                    "url": "/avis-client"
                }
            ]
        }
    ]
};

const baseUrl = document.baseURI;
console.log('Base URI:', baseUrl);

// Calculate the relative prefix based on the current path
const currentPath = window.location.pathname;
const basePath = new URL(baseUrl).pathname;
const relativeDepth = currentPath.replace(basePath, '').split('/').length - 2;
const prefix = relativeDepth > 0 ? '../'.repeat(relativeDepth) : './';

// Function to load the header menu into the section
function headerMenu(menu) {
    const section = document.getElementById('header');
    let html = '<ul>';

    // Add the logo before the first menu item
    html += '<li><img class="logo-header" src="https://raw.githubusercontent.com/independencedrive/site/main/media/images/logo_300x172.jpeg" alt="Logo" class="logo" /></li>';

    // Iterate over each item in the menu
    menu.items.forEach(item => {
        let itemUrl = item.url;
        if (itemUrl.startsWith('/')) {
            itemUrl = prefix + itemUrl.slice(1);
        }

        if (item.dropdown) {
            // Dropdown item
            html += `
                <li class="dropdown">
                    <a href="${itemUrl}" class="dropbtn">${item.name}</a>
                    <div class="dropdown-content">
                        ${item.dropdown.map(subItem => {
                            let subItemUrl = subItem.url;
                            if (subItemUrl.startsWith('/')) {
                                subItemUrl = prefix + subItemUrl.slice(1);
                            }
                            return `<a href="${subItemUrl}">${subItem.name}</a>`;
                        }).join('')}
                    </div>
                </li>
            `;
        } else {
            // Regular item
            html += `
                <li><a href="${itemUrl}">${item.name}</a></li>
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
