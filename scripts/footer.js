// Dynamic base URL function (same as header)
function getBaseUrl() {
    const path = window.location.pathname;
    const isSubPage = path.split('/').filter(p => p).length > 1 || (path !== '/' && path !== '/site/' && !path.endsWith('/site/'));
    return isSubPage ? '../' : './';
}

const footerMenuJSON = {
    "cta": {
        "title": "3 bonnes raisons de nous choisir!",
        "items": [
            { 
                "type": "inscription",
                "title": "1. Pré-inscription rapide en ligne",
                "description": "Inscrivez-vous en quelques clics, choisissez la formule qui vous correspond et démarrez votre formation sans attendre !",
                "buttonText": "Choisissez votre formule",
                "url": "https://www.sarool.fr/ext/inscription-formule/?cle=41986111447775083"
            },
            {
                "type": "qualiopi",
                "title": "2. Auto-école certifiée Qualiopi",
                "description": "Bénéficiez d’une formation de qualité, reconnue et certifiée Qualiopi pour un accompagnement fiable et professionnel.",
                "buttonText": "En savoir plus",
                "url": "javascript:void(0)",
                "onclick": "window.location.href = getBaseUrl() + 'label-qualiopi/'",
                "logo": "media/images/qualiopi-logo-png.png"
            },
            {
                "type": "rating",
                "title": "Avis Clients",
                "description": "Découvrez pourquoi nos élèves nous recommandent : lisez leurs avis authentiques et rejoignez une communauté satisfaite !",
                "iframe": "https://www.opinionsystem.fr/company_rating.php?company_id=20771&professional_activity_id=0&rating_key=de698f07d205e341827574ce934d46a1&language=fr-FR&text_color=000000",
                "buttonText": "Voir tous les avis",
                "url": "https://www.opinionsystem.fr/fr-fr/certificate/20771?referer=1"
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
                { "name": "Permis B boite manuelle", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-boite-manuelle/'" },
                { "name": "Permis B boite Automatique", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-boite-automatique/'" },
                { "name": "Permis B Accelere", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-accelere/'" },
                { "name": "Permis B Heures illimitees", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-heures-illimitees/'" },
                { "name": "Permis B Conduite Accompagnee", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-aac-conduite-accompagnee/'" },
                { "name": "Permis B + Voyage a Disney Paris", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-voyage-disney/'" },
                { "name": "Prestation Code de la Route", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'preparation-au-code-de-la-route/'" },
                { "name": "Prestation Divers", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'prestations-diverses/'" }
            ]
        },
        {
            "title": "Infos",
            "items": [
                { "name": "A propos", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'a-propos/'" },
                { "name": "Contact", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'contact/'" },
                { "name": "Actualites", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'actualites/'" },
                { "name": "Avis Clients", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'avis-clients/'" },
                { "name": "Label Qualiopi", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'label-qualiopi/'" }
            ]
        },
        {
            "title": "Informations Legales",
            "items": [
                { "name": "Mentions legales", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'mentions-legales/'" },
                { "name": "Conditions generales d'utilisation (CGU)", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'conditions-generales-dutilisation/'" },
                { "name": "Conditions generales de vente (CGV)", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'conditions-generales-de-vente/'" },
                { "name": "Politique de confidentialite (RGPD)", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'politique-de-confidentialite/'" },
                { "name": "Politique de cookies", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'politique-de-cookies/'" }
            ]
        }
    ]
};

const footerSidebarJSON = {
    "sections": [
        
        
        {
            "title": "Prestations",
            "items": [
                { "name": "Permis B boite manuelle", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-boite-manuelle/'" },
                { "name": "Permis B boite Automatique", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-boite-automatique/'" },
                { "name": "Permis B Accelere", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-accelere/'" },
                { "name": "Permis B Heures illimitees", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-heures-illimitees/'" },
                { "name": "Permis B Conduite Accompagnee", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-aac-conduite-accompagnee/'" },
                { "name": "Permis B + Voyage a Disney Paris", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'permis-b-voyage-disney/'" },
                { "name": "Prestation Code de la Route", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'preparation-au-code-de-la-route/'" },
                { "name": "Prestation Divers", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'prestations-diverses/'" }
            ]
        },
        {
            "title": "Infos",
            "items": [
                { "name": "A propos", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'a-propos/'" },
                { "name": "Contact", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'contact/'" },
                { "name": "Actualites", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'actualites/'" },
                { "name": "Avis Clients", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'avis-clients/'" },
                { "name": "Label Qualiopi", "url": "javascript:void(0)", "onclick": "window.location.href = getBaseUrl() + 'label-qualiopi/'" }
            ]
        },
        
    ]
};

function loadFooterMenu(menu) {
    const footer = document.getElementById('footer');
    if (footer) {
        let html = '';

        // Generate CTA section with custom classes for styling
        if (menu.cta) {
            html += `<div class="footer-cta-section">
                        <h2 class="footer-cta-title">${menu.cta.title}</h2>
                        <div class="footer-cta-grid">`;
            
            menu.cta.items.forEach(item => {
                html += `<div class="footer-cta-card cta-${item.type}">
                            <div class="cta-card-check">
                                <img src="${getBaseUrl()}media/images/check.png" alt="Validé" class="check-icon"/>
                            </div>
                            <h3 class="cta-card-title">${item.title}</h3>`;
                
                if (item.type === 'inscription') {
                    html += `<div class="cta-card-icon">📋</div>`;
                } else if (item.type === 'qualiopi' && item.logo) {
                    html += `<div class="cta-card-logo">
                                <img src="${getBaseUrl()}${item.logo}" alt="Qualiopi - processus certifié" class="qualiopi-logo"/>
                             </div>`;
                } else if (item.type === 'rating' && item.iframe) {
                    html += `<div class="cta-card-iframe">
                                <iframe src="${item.iframe}" scrolling="no" frameborder="0" class="rating-iframe" allowtransparency="true"></iframe>
                             </div>`;
                }
                
                html += `<p class="cta-card-description">${item.description}</p>`;
                
                if (item.onclick) {
                    html += `<a href="${item.url}" onclick="${item.onclick}" class="cta-button cta-button-${item.type}">${item.buttonText}</a>`;
                } else {
                    html += `<a href="${item.url}" ${item.url.includes('http') ? 'target="_blank"' : ''} class="cta-button cta-button-${item.type}">${item.buttonText}</a>`;
                }
                
                html += `</div>`;
            });
            
            html += `</div></div>`;
        }

        // Generate regular footer sections
        menu.sections.forEach(section => {
            html += `<div class="footer-section"><h2>${section.title}</h2><ul>`;

            section.items.forEach(item => {
                html += `<li><a href="${item.url}" ${item.onclick ? `onclick="${item.onclick}"` : ''}>`;

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

        // Bot�n para cerrar el sidebar
        html += `<div class="close-div">
                    <button id="closeSidebar">Fermer</button>
                 </div>`;

        // Genera las secciones del sidebar
        menu.sections.forEach(section => {
            html += `<div class="sidebar-section"><h2>${section.title}</h2><ul>`;

            section.items.forEach(item => {
                html += `<li><a href="${item.url}" ${item.onclick ? `onclick="${item.onclick}"` : ''} class="">`;

                if (item.icon) {
                    html += `<img src="${item.icon}" alt="${item.name}" style="width: 20px; height: 20px;"> `;
                }

                html += `${item.name}</a></li>`;
            });

            html += `</ul></div>`;
        });

        sidebar.innerHTML = html;

        // A�ade funcionalidad para cerrar el sidebar
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
    header.style.display = 'grid';
    sidebar.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    loadSidebarMenu(footerSidebarJSON);
});


document.addEventListener('DOMContentLoaded', () => {
    loadFooterMenu(footerMenuJSON);
});
