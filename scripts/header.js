// Dynamic base URL that works for both local and web, and all page levels
function getBaseUrl() {
    const path = window.location.pathname;
    const isSubPage = path.split('/').filter(p => p).length > 1 || (path !== '/' && path !== '/site/' && !path.endsWith('/site/'));
    return isSubPage ? '../' : './';
}

const menuJSON = {
    "items": [
        {
            "name": "Accueil",
            "url": "javascript:void(0)",
            "onclick": "window.location.href = getBaseUrl()",
        },
        {
            "name": "Prestations Permis B",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "Permis B Boite Manuelle",
                    "url":  "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'permis-b-boite-manuelle/'"
                },
                {
                    "name": "Permis B Boite Automatique",
                    "url":  "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'permis-b-boite-automatique/'"
                },
                {
                    "name": "Permis B Accelere",
                    "url":  "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'permis-b-accelere/'"
                },
                {
                    "name": "Permis B Heures illimitees",
                    "url":  "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'permis-b-heures-illimitees/'"
                },
                {
                    "name": "Permis B Conduite Accompagnee",
                    "url":  "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'permis-aac-conduite-accompagnee/'"
                },
                {
                    "name": "Permis B + Voyage a Disney Paris",
                    "url":  "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'permis-b-voyage-disney/'"
                }
            ]
        },
        {
            "name": "Prestation Code de la Route",
            "url": "javascript:void(0)",
            "onclick": "window.location.href = getBaseUrl() + 'preparation-au-code-de-la-route/'"
        },
        {
            "name": "Prestation Divers",
            "url": "javascript:void(0)",
            "onclick": "window.location.href = getBaseUrl() + 'prestations-diverses/'"
        },
        {
            "name": "Label Qualiopi",
            "url": "javascript:void(0)",
            "onclick": "window.location.href = getBaseUrl() + 'label-qualiopi/'"
        },
        {
            "name": "Infos",
            "url": "javascript:void(0)",
            "dropdown": [
                {
                    "name": "A propos",
                    "url": "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'a-propos/'"
                },
                {
                    "name": "Contact",
                    "url": "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'contact/'"
                },
                {
                    "name": "Actualites",
                    "url": "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'actualites/'"
                },
                {
                    "name": "Avis clients",
                    "url": "javascript:void(0)",
                    "onclick": "window.location.href = getBaseUrl() + 'avis-clients/'"
                }
            ]
        }
    ]
};

function headerMenu(menu) {
    const section = document.getElementById('header');
    let html = '<ul>';

    // Logo - use dynamic base URL
    html += `<li><a href="javascript:void(0)" onclick="window.location.href = getBaseUrl()" class="logo-link"><img class="logo-header" src="https://raw.githubusercontent.com/independencedrive/site/main/media/images/logo_300x172.jpeg" alt="Logo" class="logo" /></a></li>`;

    // Iterate over each item in the menu
    menu.items.forEach(item => {
        if (item.dropdown) {
            // Dropdown item
            html += `
                <li class="display-none dropdown">
                    <a href="${item.url}" class="dropbtn">${item.name}</a>
                    <div class="dropdown-content">
                        ${item.dropdown.map(subItem => 
                            `<a href="${subItem.url}" onclick="${subItem.onclick || ''}">${subItem.name}</a>`
                        ).join('')}
                    </div>
                </li>
            `;
        } else {
            // Regular item
            html += `
                <li class="display-none"><a href="${item.url}" onclick="${item.onclick || ''}">${item.name}</a></li>
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

    // Add click event to the mobile menu image to toggle the menu
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click', () => {
        openSidebar();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    headerMenu(menuJSON);
});
