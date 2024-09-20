const footerBaseUrl = "https://independencedrive.github.io/site";

const footerMenuJSON = {
    "cta": {
        "title": "Pr&eacute;'inscription en ligne",
        "items": [
            { 
                "name": "Choisissez votre formule", 
                "url": "https://www.sarool.fr/ext/inscription-formule/?cle=41986111447775083",
                "button": true 
            }
        ]
    },
    "sections": [
        {
            "title": "Contact",
            "items": [
                { "name": "Tel : 0664202157", "url": "tel:+33664202157" },
                { "name": "independencedrive2018@gmail.com", "url": "mailto:independencedrive2018@gmail.com" },
                { "name": "83 Rue Michel Ange, 34070 Montpellier", "url": "https://www.google.com/maps/search/?api=1&query=83+Rue+Michel+Ange,+34070+Montpellier" },
                { "name": "Facebook", "url": "https://www.facebook.com/share/5rUeTrLHtpJt3UWt/", "icon": "https://raw.githubusercontent.com/independencedrive/site/main/media/images/facebook_50x50.png" },
                { "name": "Tiktok", "url": "https://www.tiktok.com/@drivingschool_tv?_t=8ojG0WE6Cob&_r=1", "icon": "https://raw.githubusercontent.com/independencedrive/site/main/media/images/tiktok_50x50.png" },
                { "name": "Instagram", "url": "https://www.instagram.com/independencedrivetv?igsh=MXEwaDJtaW5laW12Mg==", "icon": "https://raw.githubusercontent.com/independencedrive/site/main/media/images/instagram_50x50.png" }
            ]
        },
        {
            "title": "Prestations",
            "items": [
                { "name": "Permis B boite manuelle", "url": footerBaseUrl + "/permis-b-boite-manuelle/" },
                { "name": "Permis B boite Automatique", "url": footerBaseUrl + "/permis-b-boite-automatique/" },
                { "name": "Permis B Accelere", "url": footerBaseUrl + "/permis-b-accelere/" },
                { "name": "Permis B Heures illimitees", "url": footerBaseUrl + "/permis-b-heures-illimitees/" },
                { "name": "Permis B Conduite Accompagnee", "url": footerBaseUrl + "/permis-aac-conduite-accompagnee/" },
                { "name": "Permis B + Voyage a Disney Paris", "url": footerBaseUrl + "/permis-b-voyage-disney/" },
                { "name": "Prestation Code de la Route", "url": footerBaseUrl + "/preparation-au-code-de-la-route/"  },
                { "name": "Prestation Divers","url":  footerBaseUrl + "/prestations-diverses/"  }
            ]
        },
        {
            "title": "Infos",
            "items": [
                { "name": "A propos", "url": footerBaseUrl + "/a-propos/" },
                { "name": "Contact", "url": footerBaseUrl + "/contact/" },
                { "name": "Actualites", "url": footerBaseUrl + "/actualites/" },
                { "name": "Avis Clients", "url": footerBaseUrl + "/avis-clients/" }
            ]
        },
        {
            "title": "Informations Legales",
            "items": [
                { "name": "Mentions legales", "url": footerBaseUrl + "/mentions-legales/" },
                { "name": "Conditions generales d'utilisation (CGU)", "url": footerBaseUrl + "/conditions-generales-dutilisation/" },
                { "name": "Conditions generales de vente (CGV)", "url": footerBaseUrl + "/conditions-generales-de-vente/" },
                { "name": "Politique de confidentialite (RGPD)", "url": footerBaseUrl + "/politique-de-confidentialite/" },
                { "name": "Politique de cookies", "url": footerBaseUrl + "/politique-de-cookies/" }
            ]
        }
    ]
};

const footerSidebarJSON = {
    "sections": [
        
        
        {
            "title": "Prestations",
            "items": [
                { "name": "Permis B boite manuelle", "url": footerBaseUrl + "/permis-b-boite-manuelle/" },
                { "name": "Permis B boite Automatique", "url": footerBaseUrl + "/permis-b-boite-automatique/" },
                { "name": "Permis B Accelere", "url": footerBaseUrl + "/permis-b-accelere/" },
                { "name": "Permis B Heures illimitees", "url": footerBaseUrl + "/permis-b-heures-illimitees/" },
                { "name": "Permis B Conduite Accompagnee", "url": footerBaseUrl + "/permis-aac-conduite-accompagnee/" },
                { "name": "Permis B + Voyage a Disney Paris", "url": footerBaseUrl + "/permis-b-voyage-disney/" },
                { "name": "Prestation Code de la Route", "url": footerBaseUrl + "/preparation-au-code-de-la-route/"  },
                { "name": "Prestation Divers","url":  footerBaseUrl + "/prestations-diverses/"  }
            ]
        },
        {
            "title": "Infos",
            "items": [
                { "name": "A propos", "url": footerBaseUrl + "/a-propos/" },
                { "name": "Contact", "url": footerBaseUrl + "/contact/" },
                { "name": "Actualites", "url": footerBaseUrl + "/actualites/" },
                { "name": "Avis Clients", "url": footerBaseUrl + "/avis-clients/" }
            ]
        },
        
    ]
};

function loadFooterMenu(menu) {
    const footer = document.getElementById('footer');
    if (footer) {
        let html = '';

        // Genera primero el bloque del CTA
        if (menu.cta) {
            html += `<div class="footer-cta" style="background-color: #f9f9f9; padding: 20px; text-align: center;">`;
            html += `<h2>${menu.cta.title}</h2>`;
            menu.cta.items.forEach(item => {
                if (item.button) {
                    html += `<a href="${item.url}" style="text-decoration: none;">`;
                    html += `<button style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">${item.name}</button>`;
                    html += `</a>`;
                }
            });
            html += `</div>`;
        }

        // Genera las secciones del footer
        menu.sections.forEach(section => {
            html += `<div class="footer-section"><h2>${section.title}</h2><ul>`;

            section.items.forEach(item => {
                html += `<li><a href="${item.url}" class="">`;

                if (item.icon) {
                    html += `<img src="${item.icon}" alt="${item.name}" style="width: 20px; height: 20px;"> `;
                }

                html += `${item.name}</a></li>`;
            });

            html += `</ul></div>`;
        });

        footer.innerHTML = html;
    } else {
        console.error('Footer element not found!');
    }
}
function loadSidebarMenu(menu) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        let html = '';

        // Botón para cerrar el sidebar
        html += `<div class="close-div">
                    <button id="closeSidebar">Fermer</button>
                 </div>`;

        // Genera las secciones del sidebar
        menu.sections.forEach(section => {
            html += `<div class="sidebar-section"><h2>${section.title}</h2><ul>`;

            section.items.forEach(item => {
                html += `<li><a href="${item.url}" class="">`;

                if (item.icon) {
                    html += `<img src="${item.icon}" alt="${item.name}" style="width: 20px; height: 20px;"> `;
                }

                html += `${item.name}</a></li>`;
            });

            html += `</ul></div>`;
        });

        sidebar.innerHTML = html;

        // Añade funcionalidad para cerrar el sidebar
        document.getElementById('closeSidebar').addEventListener('click', () => {
            closeSidebar();
        });
    } else {
        console.error('Sidebar element not found!');
    }
}

function openSidebar(){
    const header = document.getElementById('header');
    const sidebar = document.getElementById('sidebar');
    header.style.display = 'none';
    sidebar.style.display = 'grid';
}

function closeSidebar(){
    const header = document.getElementById('header');
    const sidebar = document.getElementById('sidebar');
    header.style.display = 'none';
    sidebar.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    loadSidebarMenu(footerSidebarJSON);
});


document.addEventListener('DOMContentLoaded', () => {
    loadFooterMenu(footerMenuJSON);
});
