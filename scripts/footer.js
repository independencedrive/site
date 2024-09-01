const footerMenuJSON = {
    "sections": [
        {
            "title": "Contact",
            "items": [
                { "name": "Tel : 0664202157", "url": "tel:+33664202157" },
                { "name": "independencedrive2018@gmail.com", "url": "#" },
                { "name": "83 Rue Michel Ange, 34070 Montpellier", "url": "https://www.google.com/maps/search/?api=1&query=83+Rue+Michel+Ange,+34070+Montpellier" },
                { "name": "Facebook", "url": "https://www.facebook.com/share/5rUeTrLHtpJt3UWt/", "icon": "https://raw.githubusercontent.com/independencedrive/site/main/media/images/facebook_50x50.png" },
                { "name": "Tiktok", "url": "https://www.tiktok.com/@drivingschool_tv?_t=8ojG0WE6Cob&_r=1", "icon": "https://raw.githubusercontent.com/independencedrive/site/main/media/images/tiktok_50x50.png" },
                { "name": "Instagram", "url": "https://www.instagram.com/independencedrivetv?igsh=MXEwaDJtaW5laW12Mg==", "icon": "https://raw.githubusercontent.com/independencedrive/site/main/media/images/instagram_50x50.png" }
            ]
        },
        {
            "title": "Prestations",
            "items": [
                { "name": "Permis B boite manuelle", "url": "./permis-b-boite-manuelle" },
                { "name": "Permis B boite Automatique", "url": "./permis-b-boite-automatique" },
                { "name": "Permis B Accelere", "url": "./permis-b-accelere" },
                { "name": "Permis B Heures illimitees", "url": "./permis-b-heures-illimitees" },
                { "name": "Permis B Conduite Accompagnee (ACC)", "url": "./permis-aac-conduite-accompagnee" },
                { "name": "Permis B + Voyage a Disney Paris", "url": "./permis-b-voyage-disney" }
            ]
        },
        {
            "title": "Infos",
            "items": [
                { "name": "A propos", "url": "./a-propos" },
                { "name": "Contact", "url": "./contact" },
                { "name": "Actualites", "url": "./actualites" },
                { "name": "Avis Clients", "url": "./avis-clients" }
            ]
        },
        {
            "title": "Legal",
            "items": [
                { "name": "Mentions legales", "url": "./mentions-legales" },
                { "name": "Conditions generales d'utilisation (CGU)", "url": "./conditions-generales-dutilisation" },
                { "name": "Conditions generales de vente (CGV)", "url": "./conditions-generales-de-vente" },
                { "name": "Politique de confidentialite (RGPD)", "url": "./politique-de-confidentialite" },
                { "name": "Politique de cookies", "url": "./politique-de-cookies" }
            ]
        }
    ]
};

function loadFooterMenu(menu) {
    const footer = document.getElementById('footer');
    let html = '';

    // Itera sobre cada sección del menú
    menu.sections.forEach(section => {
        html += `<grid-box><h2>${section.title}</h2><grid-box>`;

        // Itera sobre cada ítem dentro de la sección
        section.items.forEach(item => {
            html += `<grid-item><a href="${item.url}" target="_self" class="">`;

            // Si hay un icono, agrégalo antes del nombre
            if (item.icon) {
                html += `<img src="${item.icon}" alt="${item.name}" style="width: 20px; height: 20px;"> `;
            }

            html += `${item.name}</a></grid-item>`;
        });

        html += `</grid-box></grid-box>`;
    });

    footer.innerHTML = html;
}

// Llama a la función para cargar el menú cuando el contenido esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    loadFooterMenu(footerMenuJSON);
});

