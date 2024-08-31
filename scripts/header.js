// Define the menu in JSON format with links
const menuJSON = {
    "items": [
        {
            "name": "Independance Drive",
            "url": "./"
        },
        {
            "name": "Accueil",
            "url": "./"
        },
        {
            "name": "Prestations",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "Permis B Boîte Manuelle",
                    "url": "#"
                },
                {
                    "name": "Permis B boîte Automatique",
                    "url": "#"
                },
                {
                    "name": "Permis B Accéléré",
                    "url": "#"
                },
                {
                    "name": "Permis B Accéléré",
                    "url": "#"
                },
                {
                    "name": "Permis B Accéléré",
                    "url": "#"
                },
                {
                    "name": "Permis B Accéléré",
                    "url": "#"
                }
            ]
        },
   
        {
            "name": "Infos",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "Permis B Boîte Manuelle",
                    "url": "#"
                },
                {
                    "name": "Permis B boîte Automatique",
                    "url": "#"
                },
                {
                    "name": "Permis B Accéléré",
                    "url": "#"
                },
                {
                    "name": "Permis B Accéléré",
                    "url": "#"
                },
                {
                    "name": "Permis B Accéléré",
                    "url": "#"
                },
                {
                    "name": "Permis B Accéléré",
                    "url": "#"
                }
            ]
        },
    ]
};

// Function to load the menu into the section
function loadMenu(menu) {
    const section = document.getElementById('header');
    let html = '<ul>';

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

// Call the function to load the menu when the content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadMenu(menuJSON);
});
