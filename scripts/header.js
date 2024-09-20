const baseUrl = "https://independencedrive.github.io/site";
const menuJSON = {
    "items": [
        {
            "name": "Accueil",
            "url": baseUrl,
        },
        {
            "name": "Prestations Permis B",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "Permis B Boite Manuelle",
                    "url":  baseUrl+"/permis-b-boite-manuelle/"
                },
                {
                    "name": "Permis B Boite Automatique",
                    "url":  baseUrl+"/permis-b-boite-automatique/"
                },
                {
                    "name": "Permis B Accelere",
                    "url":  baseUrl+"/permis-b-accelere/"
                },
                {
                    "name": "Permis B Heures illimitees",
                    "url":  baseUrl+"/permis-b-heures-illimitees/"
                },
                {
                    "name": "Permis B Conduite Accompagnee",
                    "url":  baseUrl+"/permis-aac-conduite-accompagnee/"
                },
                {
                    "name": "Permis B + Voyage a Disney Paris",
                    "url":  baseUrl+"/permis-b-voyage-disney/"
                }
            ]
        },
        {
            "name": "Prestation Code de la Route",
            "url": baseUrl+"/preparation-au-code-de-la-route/"
        },
        {
            "name": "Prestation Divers",
            "url":  baseUrl+"/prestations-diverses/"
        },
        {
            "name": "Infos",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "A propos",
                    "url":  baseUrl+"/a-propos/"
                },
                {
                    "name": "Contact",
                    "url":  baseUrl+"/contact/"
                },
                {
                    "name": "Actualites",
                    "url":  baseUrl+"/actualites/"
                },
                {
                    "name": "Avis clients",
                    "url":  baseUrl+"/avis-clients/"
                }
            ]
        }
    ]
};

function headerMenu(menu) {
    const section = document.getElementById('header');
    let html = '<ul>';

    // Logo
    html += `<li><a href = "${baseUrl}" class = "logo-link" ><img class="logo-header" src="https://raw.githubusercontent.com/independencedrive/site/main/media/images/logo_300x172.jpeg" alt="Logo" class="logo" /></a></li>`;

    // Iterate over each item in the menu
    menu.items.forEach(item => {
        if (item.dropdown) {
            // Dropdown item
            html += `
                <li>
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

    // Add an image at the end of the menu
    html += `
        <li>
            <img id="menu-icon" class="menu-mobile" src="https://raw.githubusercontent.com/independencedrive/site/main/media/images/menu-mobile_256x256.png" />
        </li>
    `;

    html += '</ul>';
    section.innerHTML = html;

    // Sidebar Menu
    const sidebarMenu = document.getElementById('sidebar-menu');
    let sidebarHTML = '';
    menu.items.forEach(item => {
        if (item.dropdown) {
            sidebarHTML += `
                <li>
                    <a href="${item.url}" class="dropbtn">${item.name}</a>
                    <div class="dropdown-content">
                        ${item.dropdown.map(subItem => 
                            `<a href="${subItem.url}">${subItem.name}</a>`
                        ).join('')}
                    </div>
                </li>
            `;
        } else {
            sidebarHTML += `
                <li><a href="${item.url}">${item.name}</a></li>
            `;
        }
    });
    sidebarMenu.innerHTML = sidebarHTML;

    // Add click event to open sidebar
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click', () => {
        document.getElementById('sidebar').style.width = "250px";
    });

    // Add click event to close sidebar
    const closeSidebar = document.getElementById('close-sidebar');
    closeSidebar.addEventListener('click', () => {
        document.getElementById('sidebar').style.width = "0";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    headerMenu(menuJSON);
});
