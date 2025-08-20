/**
 * Modern Header Component - Optimized and Organized
 * Fast loading, responsive header with mobile navigation
 */

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

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

// =============================================================================
// NAVIGATION DATA
// =============================================================================

const navigationData = {
  logo: {
    src: "https://raw.githubusercontent.com/independencedrive/site/main/media/images/logo_300x172.jpeg",
    alt: "Independence Drive",
    href: () => getBaseUrl()
  },
  menuItems: [
    {
      name: "Accueil",
      href: () => getBaseUrl(),
      active: false
    },
    {
      name: "Nos Prestations",
      href: "#",
      megamenu: true,
      categories: [
        {
          title: 'Prestations',
          items: [
            {
              name: 'Permis B Boite Manuelle',
              href: () => getBaseUrl() + 'permis-b-boite-manuelle/',
              description: 'Formation complète avec véhicule à boîte manuelle',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>`
            },
            {
              name: 'Permis B Boite Automatique',
              href: () => getBaseUrl() + 'permis-b-boite-automatique/',
              description: 'Apprentissage facilité avec boîte automatique',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>`
            },
            {
              name: 'Permis B Accéléré',
              href: () => getBaseUrl() + 'permis-b-accelere/',
              description: 'Formation intensive pour obtenir le permis rapidement',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>`
            },
            {
              name: 'Permis B Heures Illimitées',
              href: () => getBaseUrl() + 'permis-b-heures-illimitees/',
              description: 'Formule tout compris sans limitation d\'heures',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>`
            },
            {
              name: 'Permis AAC',
              href: () => getBaseUrl() + 'permis-aac-conduite-accompagnee/',
              description: 'Conduite Accompagnée avec voyage Disneyland inclus',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>`
            },
            {
              name: 'Permis AAC Disney',
              href: () => getBaseUrl() + 'permis-b-voyage-disney/',
              description: 'Conduite Accompagnée avec voyage Disney inclus',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>`
            }
            
          ]
        }
      ]
    },
   
    {
      name: "Label Qualiopi",
      href: "#",
      megamenu: true,
      categories: [
        {
          title: "Documentation Qualiopi",
          items: [
            {
              name: "Critère 1.2 Enjeux de la Formation",
              href: () => getBaseUrl() + 'media/pdf/Critère 1.2 Enjeux de la Formation.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            },
            {
              name: "Critère 1.3 Règlement intérieur",
              href: () => getBaseUrl() + 'media/pdf/Critère 1.3 Reglement interieur.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            },
            {
              name: "Critère 1.4 Attestation Permis Moto",
              href: () => getBaseUrl() + 'media/pdf/Critère 1.4 Attestation sur le Permis Moto.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            },
            {
              name: "Critère 1.6 Post-Permis Programme",
              href: () => getBaseUrl() + 'media/pdf/Critère 1.6 Post-Permis Programme.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            },
            {
              name: "Critère 1.7 Flyer Conduite Accompagnée et supervisée",
              href: () => getBaseUrl() + 'media/pdf/Critère 1.7 Flyer Conduite Accompagnée et supervisée.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            },
            {
              name: "Critère 2.1 Programme de Formation",
              href: () => getBaseUrl() + 'media/pdf/Critère 2.1 Programme de Formation.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            },
            {
              name: "Critère 2.2 Attest. Honneur et procédé Eval.pdf",
              href: () => getBaseUrl() + 'media/pdf/Critère 2.2 Attest. Honneur et procédé Eval.pdf.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            },
            {
              name: "Critère 2.3 Décrire et formaliser",
              href: () => getBaseUrl() + 'media/pdf/Critère 2.3 Décrire et formaliser le procédé.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            },
            {
              name: "Critère 2.4 Décrivant le handicap",
              href: () => getBaseUrl() + 'media/pdf/Critère 2.4 Décrivant le handicap.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            }
            ,
            {
              name: "Critère 7.4 Modalités de traitement des réclamation",
              href: () => getBaseUrl() + 'media/pdf/Critère 7.4 Modalités de traitement des réclamation.pdf',
              description: '',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>`
            }
          ]
        }
      ]
    }, {
      name: "L'auto école",
      href: "#",
      megamenu: true,
      categories: [
        {
          title: "L'auto école",
          items: [
            {
              name: "À propos",
              href: () => getBaseUrl() + 'a-propos/',
              description: 'Notre histoire et nos valeurs',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>`
            },
            {
              name: "Contact",
              href: () => getBaseUrl() + 'contact/',
              description: 'Nous contacter et nous trouver',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>`
            },
            {
              name: "Horaires",
              href: () => getBaseUrl() + 'horaires/',
              description: 'Nos horaires de conduite et ouverture',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke-width="2"></circle>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2"></path>
              </svg>`
            },
            {
              name: "Actualités",
              href: () => getBaseUrl() + 'actualites/',
              description: 'Nos dernières nouvelles',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>`
            },
            {
              name: "Avis clients",
              href: () => "https://www.opinionsystem.fr/fr-fr/certificate/20771?referer=1",
              description: 'Témoignages de nos élèves',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>`
            },
            {
              name: "Label Qualiopi",
              href: () => getBaseUrl() + 'label-qualiopi/',
              description: 'Notre certification qualité',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>`
            }
          ]
        }
      ]
    },
    {
      name: "Autres prestations",
      href: "#",
      megamenu: true,
      categories: [
        {
          title: 'Autres prestations',
          items: [
            {
              name: 'Cours théoriques',
              href: () => getBaseUrl() + 'cours-theoriques/',
              description: 'Formation théorique personnalisée',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>`
            },
            {
              name: 'Formation passerelle',
              href: () => getBaseUrl() + 'formation-passerelle/',
              description: 'Boîte Auto ➜ Boîte Manuelle',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>`
            },
            {
              name: 'Formation post-permis',
              href: () => getBaseUrl() + 'formation-post-permis/',
              description: 'Réduisez votre période jeune conducteur',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>`
            }
          ]
        }
      ]
    },
    {
      name: "Code de la route",
      href: "#",
      megamenu: true,
      categories: [
        {
          title: 'Code de la route',
          items: [
            {
              name: "S'entraîner",
              href: () => "https://www.prepacode-enpc.fr/connexion",
              description: 'Accéder à la plateforme d\'entraînement',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>`
            },
            {
              name: 'Prendre rendez-vous',
              href: () => "https://www.objectifcode.sgs.com/fr_FR/rechercher-centre/centres?location=Montpellier,%20France&latitude=43.6108535&longitude=3.8761323",
              description: 'Réserver votre examen du code de la route',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>`
            },
            {
              name: 'Prestations',
              href: () => getBaseUrl() + 'preparation-au-code-de-la-route/',
              description: 'Préparation au Code de la Route',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>`
            }
          ]
        }
      ]
    },
    // New "Aide" menu
    {
      name: "Aide",
      href: "#",
      megamenu: true,
      categories: [
        {
          title: 'Aide',
          items: [
            {
              name: 'Tuto Suppression du mandat',
              href: () => getBaseUrl() + 'media/pdf/Aide-Explicatif-connexion.pdf',
              description: 'Télécharger le PDF',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`
            },
            {
              name: 'Questions pour l\'examen',
              href: () => getBaseUrl() + 'media/pdf/Aide-Questions-permis.pdf',
              description: 'Télécharger le PDF',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`
            }
          ]
        }
      ]
    }
  ]
};

// =============================================================================
// NAVIGATION GENERATORS
// =============================================================================

class NavigationGenerator {
  static generatePrestationsLayout(item) {
    return `
      <h3 class="text-xl font-bold text-gray-800 mb-6 text-center">${item.name}</h3>
      <div class="grid grid-cols-2 gap-x-8 gap-y-4">
        ${item.categories[0].items.map(subItem => `
          <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
             class="flex items-start p-3 rounded-lg hover:bg-red-50 transition-all duration-200 border border-transparent hover:border-red-200 group">
            <div class="flex-shrink-0 w-8 h-8 mr-3 text-red-600 group-hover:text-red-700">
              ${subItem.icon}
            </div>
            <div class="flex-1">
              <div class="font-medium text-gray-900 transition-colors">
                ${subItem.name}
              </div>
              ${subItem.description ? `<div class="text-sm text-gray-600 mt-1">${subItem.description}</div>` : ''}
            </div>
          </a>
        `).join('')}
      </div>
    `;
  }

  static generateLabelQualiopiLayout(item) {
    return `
      <h3 class="text-xl font-bold text-gray-800 mb-6 text-center">${item.name}</h3>
      <div class="grid grid-cols-2 gap-x-8 gap-y-4">
        ${item.categories[0].items.map(subItem => `
          <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
             target="_blank"
             class="flex items-start p-3 rounded-lg hover:bg-red-50 transition-all duration-200 border border-transparent hover:border-red-200 group">
            <div class="flex-shrink-0 w-8 h-8 mr-3 text-red-600 group-hover:text-red-700">
              ${subItem.icon}
            </div>
            <div class="flex-1">
              <div class="font-medium text-gray-900 transition-colors">
                ${subItem.name}
              </div>
              ${subItem.description ? `<div class="text-sm text-gray-600 mt-1">${subItem.description}</div>` : ''}
            </div>
            
          </a>
        `).join('')}
      </div>
    `;
  }

  static generateAutoEcoleLayout(item) {
    return `
      <h3 class="text-xl font-bold text-gray-800 mb-6 text-center">${item.name}</h3>
      <div class="grid grid-cols-3 gap-x-6 gap-y-4">
        ${item.categories[0].items.map(subItem => `
          <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
             class="flex items-start p-3 rounded-lg hover:bg-red-50 transition-all duration-200 border border-transparent hover:border-red-200 group">
            <div class="flex-shrink-0 w-8 h-8 mr-3 text-red-600 group-hover:text-red-700">
              ${subItem.icon}
            </div>
            <div class="flex-1">
              <div class="font-medium text-gray-900 transition-colors">
                ${subItem.name}
              </div>
              ${subItem.description ? `<div class="text-sm text-gray-600 mt-1">${subItem.description}</div>` : ''}
            </div>
          </a>
        `).join('')}
      </div>
    `;
  }

  static generateAutresPrestationsLayout(item) {
    return `
      <h3 class="text-xl font-bold text-gray-800 mb-6 text-center">${item.name}</h3>
      <div class="grid grid-cols-2 gap-x-8 gap-y-4">
        ${item.categories[0].items.map(subItem => `
          <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
             class="flex items-start p-3 rounded-lg hover:bg-red-50 transition-all duration-200 border border-transparent hover:border-red-200 group">
            <div class="flex-shrink-0 w-8 h-8 mr-3 text-red-600 group-hover:text-red-700">
              ${subItem.icon}
            </div>
            <div class="flex-1">
              <div class="font-medium text-gray-900 transition-colors">
                ${subItem.name}
              </div>
              ${subItem.description ? `<div class="text-sm text-gray-600 mt-1">${subItem.description}</div>` : ''}
            </div>
          </a>
        `).join('')}
      </div>
    `;
  }

  static generateCodeDeLaRouteLayout(item) {
    return `
      <h3 class="text-xl font-bold text-gray-800 mb-6 text-center">${item.name}</h3>
      <div class="grid grid-cols-2 gap-x-8 gap-y-4">
        ${item.categories[0].items.map(subItem => `
          <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
             target="_blank"
             class="flex items-start p-3 rounded-lg hover:bg-red-50 transition-all duration-200 border border-transparent hover:border-red-200 group">
            <div class="flex-shrink-0 w-8 h-8 mr-3 text-red-600 group-hover:text-red-700">
              ${subItem.icon}
            </div>
            <div class="flex-1">
              <div class="font-medium text-gray-900 transition-colors">
                ${subItem.name}
              </div>
              ${subItem.description ? `<div class="text-sm text-gray-600 mt-1">${subItem.description}</div>` : ''}
            </div>
          </a>
        `).join('')}
      </div>
    `;
  }

  static generateStandardLayout(item) {
    return `
      <div class="grid ${item.categories.length === 1 ? 'grid-cols-1 max-w-none' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-4 sm:gap-6 lg:gap-8">
        ${item.categories.map(category => `
          <div class="space-y-3 sm:space-y-4 ${item.categories.length === 1 ? 'w-full' : ''}">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 border-b-2 border-red-100 pb-2">
              ${category.title}
            </h3>
            <div class="space-y-2 sm:space-y-3">
              ${category.items.map(subItem => `
                <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
                   class="group/item flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-red-50 transition-all duration-200 border border-transparent hover:border-red-200 touch-manipulation">
                  <div class="flex-shrink-0 text-red-600 group-hover/item:text-red-700 mt-0.5 sm:mt-1">
                    ${subItem.icon}
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-xs sm:text-sm font-semibold text-gray-900 transition-colors leading-tight">
                      ${subItem.name}
                    </h4>
                    <p class="text-xs text-gray-600 mt-0.5 sm:mt-1 leading-relaxed hidden sm:block">
                      ${subItem.description}
                    </p>
                  </div>
                </a>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  static generateCallToAction(item) {
    const isPrestations = item.name === 'Prestations';
    const isSingleCategory = item.categories.length === 1;

    return `
      <div class="mt-6 pt-4 border-t border-gray-200">
        ${isPrestations ? `
        <div class="flex items-center justify-between">
          <div class="flex items-center text-green-600 text-sm">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-xs sm:text-sm text-gray-600">Formation agréée par l'État</span>
          </div>
          <a href="${getBaseUrl()}contact/" class="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-red-700 transition">
            Demander un devis
          </a>
        </div>
        ` : isSingleCategory ? `
        <div class="flex flex-col gap-3 w-full">
          <div class="flex items-center w-full px-4 py-2 bg-gray-50 rounded">
            <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-xs sm:text-sm text-gray-600">Formation agréée par l'État</span>
          </div>
          <a href="${getBaseUrl()}contact/" 
             class="w-full inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-red-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-red-700 transition-colors touch-manipulation whitespace-nowrap">
            Demander un devis
            <svg class="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        ` : `
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0 w-full">
          <div class="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-xs sm:text-sm text-gray-600">Formation agréée par l'État</span>
          </div>
          <a href="${getBaseUrl()}contact/" 
             class="inline-flex items-center px-3 sm:px-4 py-2 bg-red-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-red-700 transition-colors touch-manipulation whitespace-nowrap">
            Demander un devis
            <svg class="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        `}
      </div>
    `;
  }

  static generateMegaMenu(item) {
    const isPrestations = item.name === 'Nos Prestations';
    const isLabelQualiopi = item.name === 'Label Qualiopi';
    const isAutoEcole = item.name === "L'auto école";
    const isAutresPrestations = item.name === 'Autres prestations';
    const isCodeDeLaRoute = item.name === 'Code de la route';
    const isSingleCategory = item.categories.length === 1;
    
    return `
      <div class="relative group" data-megamenu-container>
        <button class="text-white hover:text-red-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 touch-manipulation" data-megamenu-trigger>
          ${item.name}
          <svg class="w-4 h-4 ml-1 inline-block transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        <div class="megamenu-dropdown absolute top-full mt-0 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-red-600 rounded-b-lg z-50 ${isPrestations || isLabelQualiopi || isAutoEcole || isAutresPrestations || isCodeDeLaRoute ? 'w-[600px] max-w-[90vw]' : isSingleCategory ? 'min-w-[320px] max-w-[420px] mx-auto' : 'w-screen max-w-[min(90vw,1152px)]'}" 
             style="left: 50%; transform: translateX(-50%);">
          <div class="p-6">
            ${isPrestations ? this.generatePrestationsLayout(item) : isLabelQualiopi ? this.generateLabelQualiopiLayout(item) : isAutoEcole ? this.generateAutoEcoleLayout(item) : isAutresPrestations ? this.generateAutresPrestationsLayout(item) : isCodeDeLaRoute ? this.generateCodeDeLaRouteLayout(item) : this.generateStandardLayout(item)}
            ${this.generateCallToAction(item)}
          </div>
        </div>
      </div>
    `;
  }

  static generateDesktopNav(menuItems) {
    return menuItems.map(item => {
      if (item.megamenu) {
        return this.generateMegaMenu(item);
      } else if (item.cta) {
        return `
          <a href="${typeof item.href === 'function' ? item.href() : item.href}" 
             class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
            ${item.name}
          </a>
        `;
      } else {
        return `
          <a href="${typeof item.href === 'function' ? item.href() : item.href}" 
             class="text-white hover:text-red-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            ${item.name}
          </a>
        `;
      }
    }).join('');
  }

  static generateTabletNav(menuItems) {
    return menuItems.map(item => {
      if (item.megamenu) {
        const allItems = item.categories.reduce((acc, category) => acc.concat(category.items), []);
        
        return `
          <div class="relative group">
            <button class="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500">
              ${item.name}
              <svg class="w-4 h-4 ml-1 inline-block transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-96 overflow-y-auto">
              <div class="py-2">
                ${allItems.map(subItem => `
                  <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
                     class="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150">
                    ${subItem.name}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      } else if (item.cta) {
        return `
          <a href="${typeof item.href === 'function' ? item.href() : item.href}" 
             class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
            ${item.name}
          </a>
        `;
      } else {
        return `
          <a href="${typeof item.href === 'function' ? item.href() : item.href}" 
             class="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            ${item.name}
          </a>
        `;
      }
    }).join('');
  }
}

// =============================================================================
// MAIN HEADER COMPONENT
// =============================================================================

class HeaderComponent {
  constructor(containerId = 'header-container') {
    this.container = document.getElementById(containerId);
    this.mobileMenuOpen = false;
    this.lastScrollY = window.scrollY;
    this.scrollThreshold = 10;
    this.mobileSidebar = new window.MobileSidebar();
    this.init();
  }

  render() {
    const headerHTML = `
      <header id="main-header" class="bg-black shadow-lg fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center justify-between h-20 px-0 sm:px-6 lg:px-8">
            
            <!-- Logo -->
            <div class="flex-shrink-0">
              <a href="${typeof navigationData.logo.href === 'function' ? navigationData.logo.href() : navigationData.logo.href}" 
                 class="block">
                <img class="h-16 w-auto object-contain" 
                     src="${navigationData.logo.src}" 
                     alt="${navigationData.logo.alt}">
              </a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden xl:flex items-center space-x-1">
              ${NavigationGenerator.generateDesktopNav(navigationData.menuItems)}
            </nav>

            <!-- Tablet Navigation -->
            <nav class="hidden lg:flex xl:hidden items-center space-x-1">
              ${NavigationGenerator.generateTabletNav(navigationData.menuItems)}
            </nav>

            <!-- Mobile menu button -->
            <div class="lg:hidden">
              <button id="mobile-menu-button" 
                      class="text-white hover:text-red-300 p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 touch-manipulation">
                <svg class="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      ${this.mobileSidebar.render()}
    `;

    if (this.container) {
      this.container.innerHTML = headerHTML;
      this.attachEventListeners();
    }
  }

  attachEventListeners() {
    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    mobileMenuButton?.addEventListener('click', () => this.mobileSidebar.toggle());
    mobileMenuButton?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.mobileSidebar.toggle();
    });

    this.mobileSidebar.attachEventListeners();
    this.setupMegaMenus();
    this.setupScrollHandler();
  }

  setupMegaMenus() {
    const megaMenuContainers = document.querySelectorAll('[data-megamenu-container]');
    
    megaMenuContainers.forEach(container => {
      const dropdown = container.querySelector('.megamenu-dropdown');
      if (!dropdown) return;

      container.addEventListener('mouseenter', () => {
        dropdown.classList.remove('invisible', 'opacity-0');
        dropdown.classList.add('visible', 'opacity-100');
      });

      container.addEventListener('mouseleave', () => {
        dropdown.classList.add('invisible', 'opacity-0');
        dropdown.classList.remove('visible', 'opacity-100');
      });
    });

    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('[data-megamenu-container]')) {
        document.querySelectorAll('.megamenu-dropdown').forEach(menu => {
          menu.classList.add('invisible', 'opacity-0');
          menu.classList.remove('visible', 'opacity-100');
        });
      }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.megamenu-dropdown').forEach(menu => {
          menu.classList.add('invisible', 'opacity-0');
          menu.classList.remove('visible', 'opacity-100');
        });
      }
    });
  }

  setupScrollHandler() {
    const header = document.getElementById('main-header');
    if (!header) return;

    document.body.style.paddingTop = '80px';

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - this.lastScrollY;

          if (Math.abs(scrollDifference) > this.scrollThreshold) {
            if (scrollDifference > 0 && currentScrollY > 100) {
              header.style.transform = 'translateY(-100%)';
            } else {
              header.style.transform = 'translateY(0)';
            }
            this.lastScrollY = currentScrollY;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  init() {
    this.render();
  }
}

// =============================================================================
// INITIALIZATION
// =============================================================================

(function() {
  function initializeHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer && !window.headerComponentLoaded) {
      new HeaderComponent('header-container');
      window.headerComponentLoaded = true;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHeader);
  } else {
    initializeHeader();
  }

  setTimeout(initializeHeader, 100);
})();
