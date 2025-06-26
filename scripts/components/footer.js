/**
 * Modern Footer Component - Pure Tailwind + Vanilla JS
 * Fast-loading, responsive footer with structured content
 */

// Footer data structure
const footerData = {
  company: {
    name: "Independence Drive",
    description: `
    <span>L'indépendance commence ici.</span><br>
    <span>N° Agreement : E2403400150</span>
    `,
  },
  contact: {
    phone: "06 64 20 21 57",
    email: "independencedrive2018@gmail.com",
    address: "83 Rue Michel Ange <p> 34070 Montpellier</p>"
  },
  services: {
    title: "Nos Prestations",
    items: [
      { name: "Permis B boîte manuelle", href: () => getBaseUrl() + 'permis-b-boite-manuelle/' },
      { name: "Permis B boîte automatique", href: () => getBaseUrl() + 'permis-b-boite-automatique/' },
      { name: "Permis B accéléré", href: () => getBaseUrl() + 'permis-b-accelere/' },
      { name: "Permis B heures illimitées", href: () => getBaseUrl() + 'permis-b-heures-illimitees/' },
      { name: "Permis B + Voyage à Disney", href: () => getBaseUrl() + 'permis-b-voyage-disney//' },
      { name: "Conduite accompagnée (AAC)", href: () => getBaseUrl() + 'permis-aac-conduite-accompagnee/' },
      { name: "Code de la route", href: () => getBaseUrl() + 'preparation-au-code-de-la-route/' },
      { name: "Prestations Diverses", href: () => getBaseUrl() + 'prestations-diverses/' }
    ]
  },
  autoEcole: {
    title: "L'Auto-École",
    items: [
      { name: "À propos", href: () => getBaseUrl() + 'a-propos/' },
      { name: "Contact", href: () => getBaseUrl() + 'contact/' },
      { name: "Horaires", href: () => getBaseUrl() + 'horaires/' },
      { name: "Actualités", href: () => getBaseUrl() + 'actualites/' },
      { name: "Avis clients", href: () => "https://www.opinionsystem.fr/fr-fr/certificate/20771?referer=1" },
      { name: "Label Qualiopi", href: () => getBaseUrl() + 'label-qualiopi/' }
    ]
  },

  externalLinks: {
    title: "Aides/Financements",
    items: [
      { name: "Mon Compte Formation (CPF)", href: () => "https://www.moncompteformation.gouv.fr/espace-prive/html/#/" },
      { name: "Le permis à 1 € par jour", href: () => "https://www.securite-routiere.gouv.fr/passer-son-permis-de-conduire/financement-du-permis-de-conduire/permis-1-eu-par-jour" },
      { name: "Fonds d'aide aux jeunes (FAJ)", href: () => "https://herault.fr/615-fdaj.htm" },
      { name: "Service national universel (SNU)", href: () => "https://www.snu.gouv.fr/" },
      { name: "Tous les aides (Service Public)", href: () => "https://www.service-public.fr/particuliers/vosdroits/F13609" }

    ]
  },
  cpfImage: {
    title: "Mon Compte Formation (CPF)",
    items: [
      { 
        name: "Mon Compte Formation (CPF)", 
        href: () => "https://www.moncompteformation.gouv.fr/espace-prive/html/#/",
        imageSrc: () => getBaseUrl() + 'media/images/compte-formation.png'
      }
    ]
  },
  qualiopiImage: {
    title: "Label Qualité + Qualiopi",
    items: [
      { 
        name: "Label Qualité + Qualiopi", 
        href: () => getBaseUrl() + 'label-qualiopi/',
        imageSrc: () => getBaseUrl() + 'media/images/qualiopi-footer.jpeg'
      }
    ]
  },
  legal: {
    title: "Informations Légales",
    items: [
      { name: "Mentions légales", href: () => getBaseUrl() + 'mentions-legales/' },
      { name: "Conditions générales", href: () => getBaseUrl() + 'conditions-generales-de-vente/' },
      { name: "Politique de confidentialité", href: () => getBaseUrl() + 'politique-de-confidentialite/' },
      { name: "Politique de cookies", href: () => getBaseUrl() + 'politique-de-cookies/' }
    ]
  },
  social: {
    title: "Suivez-nous",
    networks: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/share/19BFEAUiff/",
        icon: "facebook",
        color: "hover:text-blue-600"
      },
      {
        name: "Instagram", 
        href: "https://www.instagram.com/independencedrivetv?igsh=MXEwaDJtaW5laW12Mg==",
        icon: "instagram",
        color: "hover:text-pink-600"
      },
      {
        name: "TikTok",
        href: "https://www.tiktok.com/@drivingschool_tv?_t=8ojG0WE6Cob&_r=1",
        icon: "tiktok", 
        color: "hover:text-gray-900"
      }
    ]
  },
  horaires: {
    title: "Horaires",
    bureau: {
      title: "Bureau",
      items: [
        { day: "Lun - Mer, Ven - Sam", hours: "13h-20h" },
        { day: "Jeudi", hours: "17h-20h" },
        { day: "Dimanche", hours: "Fermé", closed: true },
        { day: "Jours fériés", hours: "Fermés", closed: true }
      ]
    },
    conduite: {
      title: "Conduite",
      items: [
        { day: "Lun - Sam", hours: "7h-20h" },
        { day: "Dim & Jours fériés", hours: "Sur demande", onDemand: true }
      ]
    }
  }
};

// Utility function for base URL
function getBaseUrl() {
  const path = window.location.pathname;
  const hostname = window.location.hostname;
  
  // Check if we're on GitHub Pages (production)
  if (hostname === 'independencedrive.fr' || hostname.includes('github.io')) {
    return '/';
  }
  
  // Local development logic
  const cleanPath = path.replace(/\/$/, '');
  const pathParts = cleanPath.split('/').filter(p => p);
  const currentPage = pathParts[pathParts.length - 1];
  const isHtmlFile = currentPage && (currentPage.endsWith('.html') || currentPage === 'index.html');
  
  if (isHtmlFile) {
    pathParts.pop();
  }
  
  // For local development, check if we're in a subdirectory
  const isSubPage = pathParts.length > 1;
  return isSubPage ? '../' : './';
}

// Footer Component Class
class FooterComponent {
  constructor(containerId = 'footer-container') {
    this.container = document.getElementById(containerId);
    this.init();
  }

  // Generate social media icons
  generateSocialIcons() {
    const baseUrl = getBaseUrl();
    
    return footerData.social.networks.map(network => `
      <a href="${network.href}" 
         rel="noopener noreferrer"
         class="text-gray-400 ${network.color} transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
         aria-label="${network.name}">
        <img src="${baseUrl}media/images/${network.icon}.svg" 
             alt="${network.name}" 
             class="w-10 h-10" />
      </a>
    `).join('');
  }

  // Generate footer links section
  generateLinksSection(section) {
    return `
      <div>
        <h3 class="text-gray-900 font-semibold text-lg mb-4">${section.title}</h3>
        <ul class="space-y-3">
          ${section.items.map(item => `
            <li>
              <a href="${typeof item.href === 'function' ? item.href() : item.href}" 
                 class="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm">
                ${item.name}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  // Generate image widget section (for CPF and Qualiopi)
  generateImageSection(section) {
    return `
      <div>
      <h3 class="text-gray-900 font-semibold text-lg mb-4">${section.title}</h3>
      <div class="space-y-3">
        ${section.items.map(item => `
        <a href="${typeof item.href === 'function' ? item.href() : item.href}" 
           class="block hover:opacity-80 transition-opacity duration-200" 
           target="_blank" 
           rel="noopener noreferrer">
          <img src="${typeof item.imageSrc === 'function' ? item.imageSrc() : item.imageSrc}" 
             alt="${item.name}" 
             class="bg-white border-[5px] border-[#15448d] h-[225px] w-[225px] object-contain rounded-lg shadow-sm" 
             loading="lazy" />
        </a>
        `).join('')}
      </div>
      </div>
    `;
  }

  // Generate horaires section
  generateHorairesSection(section) {
    return `
      <div>
        <h3 class="text-gray-900 font-semibold text-lg mb-4">${section.title}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <!-- Bureau Hours -->
          <div>
            <h4 class="text-gray-800 font-semibold text-md mb-2">${section.bureau.title}</h4>
            <ul class="space-y-2">
              ${section.bureau.items.map(item => `
                <li class="flex justify-between text-gray-600 text-sm">
                  <span>${item.day}</span>
                  <span>${item.closed ? 'Fermé' : item.hours}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Conduite Hours -->
          <div>
            <h4 class="text-gray-800 font-semibold text-md mb-2">${section.conduite.title}</h4>
            <ul class="space-y-2">
              ${section.conduite.items.map(item => `
                <li class="flex justify-between text-gray-600 text-sm">
                  <span>${item.day}</span>
                  <span>${item.onDemand ? 'Sur demande' : item.hours}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // Generate horaires widget section
  generateHorairesWidget(section) {
    return `
      <div>
        <h3 class="text-gray-900 font-semibold text-lg mb-4">${section.title}</h3>
        <div class="space-y-4">
          
          <!-- Bureau Hours -->
          <div class="bg-gray-50 rounded-lg p-3">
            <h4 class="text-sm font-semibold text-gray-800 mb-2">${section.bureau.title}</h4>
            <div class="space-y-1">
              ${section.bureau.items.map(item => `
                <div class="flex justify-between text-xs">
                  <span class="text-gray-600">${item.day}</span>
                  <span class="font-medium ${item.closed ? 'text-red-600' : 'text-blue-600'}">${item.hours}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Conduite Hours -->
          <div class="bg-gray-50 rounded-lg p-3">
            <h4 class="text-sm font-semibold text-gray-800 mb-2">${section.conduite.title}</h4>
            <div class="space-y-1">
              ${section.conduite.items.map(item => `
                <div class="flex justify-between text-xs">
                  <span class="text-gray-600">${item.day}</span>
                  <span class="font-medium ${item.onDemand ? 'text-orange-600' : 'text-green-600'}">${item.hours}</span>
                </div>
              `).join('')}
            </div>
            <div class="mt-2 pt-2 border-t border-gray-200">
              <p class="text-xs text-green-700 bg-green-50 p-2 rounded">
                ✓ Horaires flexibles selon disponibilités
              </p>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  // Render complete footer
  render() {
    const currentYear = new Date().getFullYear();
    
    const footerHTML = `
      <footer class="bg-gray-50 border-t border-gray-200">
        <!-- Main Footer Content -->
        <div class="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <!-- Company Info -->
            <div class="lg:col-span-1">
              <div class="mb-4">
                
                <h3 class="text-gray-900 font-bold text-xl mb-2">${footerData.company.name}</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-4">
                  ${footerData.company.description}
                </p>
              </div>
              
              <!-- Contact Info -->
              <div class="space-y-2">
                <div class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <a href="tel:${footerData.contact.phone.replace(/\s/g, '')}" 
                     class="hover:text-red-600 transition-colors duration-200">
                    ${footerData.contact.phone}
                  </a>
                </div>
                
                <div class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:${footerData.contact.email}" 
                     class="hover:text-red-600 transition-colors duration-200">
                    ${footerData.contact.email}
                  </a>
                </div>
                
                <div class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-2 mt-0.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>${footerData.contact.address}</span>
                </div>
                
                
              </div>

              
            </div>

            <!-- Services -->
            ${this.generateLinksSection(footerData.services)}

            <!-- Quick Links -->
            ${this.generateLinksSection(footerData.autoEcole)}

            <!-- Horaires -->
            ${this.generateHorairesSection(footerData.horaires)}

            <!-- Liens Utiles -->
            ${this.generateLinksSection(footerData.externalLinks)}

            <!-- CPF Image -->
            ${this.generateImageSection(footerData.cpfImage)}

            <!-- Qualiopi Image -->
            ${this.generateImageSection(footerData.qualiopiImage)}

            <!-- Legal -->
            ${this.generateLinksSection(footerData.legal)}

          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="bg-gray-100 border-t border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div class="md:flex md:items-center md:justify-between">
              <div class="text-sm text-gray-600">
                <p>&copy; ${currentYear} ${footerData.company.name}. Tous droits réservés.</p>
              </div>
              <!-- Social Media -->
              <div class="mt-6">
                <h4 class="text-gray-900 font-semibold text-sm mb-3">${footerData.social.title}</h4>
                <div class="flex space-x-2">
                  ${this.generateSocialIcons()}
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </footer>
    `;

    if (this.container) {
      this.container.innerHTML = footerHTML;
    }
  }

  // Initialize component
  init() {
    // Always render immediately if possible
    this.render();
  }
}

// Auto-initialize when script loads
(function() {
  function initializeFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer && !window.footerComponentLoaded) {
      new FooterComponent('footer-container');
      window.footerComponentLoaded = true;
    }
  }

  // Try to initialize immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFooter);
  } else {
    initializeFooter();
  }

  // Also try after a short delay to ensure DOM is ready
  setTimeout(initializeFooter, 100);
})();
