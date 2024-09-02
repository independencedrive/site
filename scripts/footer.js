const baseUrl = "https://independencedrive.github.io/site/";

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
                { "name": "Permis B boite manuelle", "url": baseUrl + "permis-b-boite-manuelle" },
                { "name": "Permis B boite Automatique", "url": baseUrl + "permis-b-boite-automatique" },
                { "name": "Permis B Accelere", "url": baseUrl + "permis-b-accelere" },
                { "name": "Permis B Heures illimitees", "url": baseUrl + "permis-b-heures-illimitees" },
                { "name": "Permis B Conduite Accompagnee", "url": baseUrl + "permis-aac-conduite-accompagnee" },
                { "name": "Permis B + Voyage a Disney Paris", "url": baseUrl + "permis-b-voyage-disney" }
            ]
        },
        {
            "title": "Infos",
            "items": [
                { "name": "A propos", "url": baseUrl + "a-propos" },
                { "name": "Contact", "url": baseUrl + "contact" },
                { "name": "Actualites", "url": baseUrl + "actualites" },
                { "name": "Avis Clients", "url": baseUrl + "avis-clients" }
            ]
        },
        {
            "title": "Legal",
            "items": [
                { "name": "Mentions legales", "url": baseUrl + "mentions-legales" },
                { "name": "Conditions generales d'utilisation (CGU)", "url": baseUrl + "conditions-generales-dutilisation" },
                { "name": "Conditions generales de vente (CGV)", "url": baseUrl + "conditions-generales-de-vente" },
                { "name": "Politique de confidentialite (RGPD)", "url": baseUrl + "politique-de-confidentialite" },
                { "name": "Politique de cookies", "url": baseUrl + "politique-de-cookies" }
            ]
        }
    ]
};

function loadFooterMenu(menu) {
    const footer = document.getElementById('footer');
    let html = '';

    menu.sections.forEach(section => {
        html += `<grid-box><h2>${section.title}</h2>`;

        section.items.forEach(item => {
            // Se mantiene la URL como está en "Contact", se agrega el baseUrl a las otras.
            let url = section.title === "Contact" ? item.url : baseUrl + item.url;
            
            html += `<grid-item><a href="${url}" target="_self" class="">`;

            if (item.icon) {
                html += `<img src="${item.icon}" alt="${item.name}" style="width: 20px; height: 20px;"> `;
            }

            html += `${item.name}</a></grid-item>`;
        });

        html += `</grid-box>`;
    });

    footer.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    loadFooterMenu(footerMenuJSON);
});
