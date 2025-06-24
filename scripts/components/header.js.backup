/**
 * Modern Header Component - Pure Tailwind + Vanilla JS
 * Fast loading, responsive header with mobile navigation
 */

// Navigation data structure
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
      name: "Formations",
      href: "#",
      megamenu: true,
      categories: [
        {
          title: 'Formations',
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
              name: 'Conduite Accompagnée (AAC)',
              href: () => getBaseUrl() + 'permis-aac-conduite-accompagnee/',
              description: 'Apprentissage anticipé de la conduite dès 15 ans',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>`
            },
            {
              name: 'Permis B + Voyage Disney',
              href: () => getBaseUrl() + 'permis-b-voyage-disney/',
              description: 'Permis B avec voyage à Disneyland Paris offert',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>`
            },
            {
              name: 'Code de la route',
              href: () => getBaseUrl() + 'preparation-au-code-de-la-route/',
              description: 'Préparation complète au code de la route',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>`
            },
            {
              name: 'Prestations diverses',
              href: () => getBaseUrl() + 'prestations-diverses/',
              description: 'Autres services personnalisés',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>`
            }
          ]
        }
      ]
    },
    {
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
  ]
};

// Utility function for base URL
function getBaseUrl() {
  const path = window.location.pathname;
  // Remove trailing slash for consistency
  const cleanPath = path.replace(/\/$/, '');
  
  // Split by '/' and filter out empty strings
  const pathParts = cleanPath.split('/').filter(p => p);
  
  // Check if current page is an HTML file
  const currentPage = pathParts[pathParts.length - 1];
  const isHtmlFile = currentPage && (currentPage.endsWith('.html') || currentPage === 'index.html');
  
  // If we're looking at an HTML file, remove it from the path parts
  if (isHtmlFile) {
    pathParts.pop();
  }
  
  // Determine depth: if we have more than 1 path part (excluding the base), we're in a subpage
  // For local: ['site'] = home, ['site', 'contact'] = subpage
  // For GitHub Pages: ['repo'] = home, ['repo', 'contact'] = subpage
  const isSubPage = pathParts.length > 1;
  
  return isSubPage ? '../' : './';
}

// Header Component Class
class HeaderComponent {
  constructor(containerId = 'header-container') {
    this.container = document.getElementById(containerId);
    this.mobileMenuOpen = false;
    this.lastScrollY = window.scrollY;
    this.scrollThreshold = 10; // minimum scroll distance to trigger hide/show
    this.mobileSidebar = new window.MobileSidebar(); // Initialize mobile sidebar
    this.init();
  }

  // Generate desktop navigation
  generateDesktopNav() {
    return navigationData.menuItems.map(item => {
      if (item.megamenu) {
        return `
          <div class="relative group" data-megamenu-container>
            <button class="text-white hover:text-red-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 touch-manipulation" data-megamenu-trigger>
              ${item.name}
              <svg class="w-4 h-4 ml-1 inline-block transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- Mega Menu - Dynamic positioning -->
            <div class="megamenu-dropdown absolute top-full mt-0 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-red-600 rounded-b-lg z-50 ${item.name === 'Formations' ? 'w-[600px] max-w-[90vw]' : item.categories.length === 1 ? 'min-w-[320px] max-w-[420px] mx-auto' : 'w-screen max-w-[min(90vw,1152px)]'}" 
                 style="left: 50%; transform: translateX(-50%);">
              <div class="p-6">
                <!-- Formations - Modern 2-column grid layout -->
                ${item.name === 'Formations' ? `
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
                ` : `
                <!-- Other menus - Original layout -->
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
                `}
                
                <!-- Call to Action Footer -->
                <div class="mt-6 pt-4 border-t border-gray-200">
                  ${item.name === 'Formations' ? `
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-green-600 text-sm">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      Formation agréée par l'État - Certification Qualiopi
                    </div>
                    <a href="${getBaseUrl()}contact/" class="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-red-700 transition">
                      Demander un devis
                    </a>
                  </div>
                  ` : item.categories.length === 1 ? `
                  <div class="flex flex-col gap-3 w-full">
                    <div class="flex items-center w-full px-4 py-2 bg-gray-50 rounded">
                      <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-xs sm:text-sm text-gray-600">Formation agréée par l'État - Certification Qualiopi</span>
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
                      <span>Formation agréée par l'État - Certification Qualiopi</span>
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
              </div>
            </div>
          </div>
        `;
      } else if (item.dropdown) {
        return `
          <div class="relative group">
            <button class="text-white hover:text-red-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500">
              ${item.name}
              <svg class="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="py-2">
                ${item.dropdown.map(subItem => `
                  <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
                     class="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150">
                    ${subItem.name}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
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

  // Generate tablet navigation (simplified for medium screens)
  generateTabletNav() {
    return navigationData.menuItems.map(item => {
      if (item.megamenu) {
        // Simplified dropdown for tablet - no mega menu
        const allItems = item.categories.reduce((acc, category) => {
          return acc.concat(category.items);
        }, []);
        
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
      } else if (item.dropdown) {
        return `
          <div class="relative group">
            <button class="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500">
              ${item.name}
              <svg class="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="py-2">
                ${item.dropdown.map(subItem => `
                  <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
                     class="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150">
                    ${subItem.name}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
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

  // Render complete header
  render() {
    const headerHTML = `
      <header id="main-header" class="bg-slate-800 shadow-lg fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            
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
              ${this.generateDesktopNav()}
            </nav>ƒ

            <!-- Tablet Navigation - Simplified -->
            <nav class="hidden lg:flex xl:hidden items-center space-x-1">
              ${this.generateTabletNav()}
            </nav>

            <!-- Mobile menu button -->
            <div class="lg:hidden">
              <button id="mobile-menu-button" 
                      class="text-white hover:text-red-300 p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 touch-manipulation">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Mobile Sidebar Component -->
      ${this.mobileSidebar.render()}
    `;

    if (this.container) {
      this.container.innerHTML = headerHTML;
      this.attachEventListeners();
    }
  }

  // Attach event listeners
  attachEventListeners() {
    // Mobile menu toggle - use mobile sidebar
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    mobileMenuButton?.addEventListener('click', () => {
      this.mobileSidebar.toggle();
    });

    // Touch support for mobile menu
    mobileMenuButton?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.mobileSidebar.toggle();
    });

    // Attach mobile sidebar event listeners
    this.mobileSidebar.attachEventListeners();

    // Enhanced mega menu handling for touch devices
    this.setupMegaMenuInteractions();

    // Scroll-aware header functionality
    this.setupScrollHandler();
  }

  // Setup mega menu interactions for better responsive handling
  setupMegaMenuInteractions() {
    // Pre-position all mega menus in the background
    const prePositionMegaMenus = () => {
      const megaMenuContainers = document.querySelectorAll('[data-megamenu-container]');
      
      megaMenuContainers.forEach(container => {
        const dropdown = container.querySelector('.megamenu-dropdown');
        if (!dropdown) return;

        const containerRect = container.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const dropdownWidth = Math.min(viewportWidth * 0.9, 1152);
        
        // Calculate ideal center position
        const idealLeft = containerRect.left + (containerRect.width / 2) - (dropdownWidth / 2);
        
        // Check boundaries and adjust
        let finalLeft = idealLeft;
        const padding = 20;
        
        if (idealLeft < padding) {
          finalLeft = padding;
        } else if (idealLeft + dropdownWidth > viewportWidth - padding) {
          finalLeft = viewportWidth - dropdownWidth - padding;
        }
        
        // Convert to relative positioning
        const relativeLeft = finalLeft - containerRect.left;
        
        // Pre-position in background (always ready)
        if (container.querySelectorAll('.megamenu-dropdown').length && container.querySelectorAll('.megamenu-dropdown')[0].classList.contains('min-w-[320px]')) {
          // Single category: do not override width/maxWidth
          dropdown.style.left = '';
          dropdown.style.transform = '';
          dropdown.style.width = '';
          dropdown.style.maxWidth = '';
        } else {
          dropdown.style.left = `${relativeLeft}px`;
          dropdown.style.transform = 'translateX(0)';
          dropdown.style.width = `${dropdownWidth}px`;
          dropdown.style.maxWidth = 'none';
        }
      });
    };

    // Initial positioning
    setTimeout(prePositionMegaMenus, 100);

    // Handle hover events (no repositioning needed - just show/hide)
    const megaMenuContainers = document.querySelectorAll('[data-megamenu-container]');
    
    megaMenuContainers.forEach(container => {
      const dropdown = container.querySelector('.megamenu-dropdown');
      if (!dropdown) return;

      // Mouse enter - instant show (already positioned)
      container.addEventListener('mouseenter', () => {
        dropdown.classList.remove('invisible', 'opacity-0');
        dropdown.classList.add('visible', 'opacity-100');
      });

      // Mouse leave - hide
      container.addEventListener('mouseleave', () => {
        dropdown.classList.add('invisible', 'opacity-0');
        dropdown.classList.remove('visible', 'opacity-100');
      });

      // Touch handling for mobile devices
      const trigger = container.querySelector('[data-megamenu-trigger]');
      if (trigger) {
        let touchStarted = false;
        
        trigger.addEventListener('touchstart', (e) => {
          touchStarted = true;
          dropdown.classList.remove('invisible', 'opacity-0');
          dropdown.classList.add('visible', 'opacity-100');
        });

        trigger.addEventListener('touchend', (e) => {
          if (touchStarted) {
            e.preventDefault();
            touchStarted = false;
          }
        });
      }
    });

    // Re-position on window resize (smooth background update)
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        prePositionMegaMenus();
      }, 100);
    });

    // Re-position on scroll (for fixed headers)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        prePositionMegaMenus();
      }, 50);
    }, { passive: true });

    // Close mega menus when clicking/touching outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('[data-megamenu-container]')) {
        const megaMenus = document.querySelectorAll('.megamenu-dropdown');
        megaMenus.forEach(menu => {
          menu.classList.add('invisible', 'opacity-0');
          menu.classList.remove('visible', 'opacity-100');
        });
      }
    });

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const megaMenus = document.querySelectorAll('.megamenu-dropdown');
        megaMenus.forEach(menu => {
          menu.classList.add('invisible', 'opacity-0');
          menu.classList.remove('visible', 'opacity-100');
        });
      }
    });

    // Re-position when navigation changes (e.g., dynamic content)
    const observer = new MutationObserver(() => {
      setTimeout(prePositionMegaMenus, 50);
    });

    // Observe navigation changes
    const nav = document.querySelector('nav');
    if (nav) {
      observer.observe(nav, { childList: true, subtree: true });
    }
  }

  // Setup scroll handler for hide/show header
  setupScrollHandler() {
    const header = document.getElementById('main-header');
    if (!header) return;

    // Add body padding to compensate for fixed header
    document.body.style.paddingTop = '80px';

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - this.lastScrollY;

          // Only trigger if scroll difference is significant
          if (Math.abs(scrollDifference) > this.scrollThreshold) {
            if (scrollDifference > 0 && currentScrollY > 100) {
              // Scrolling down and past threshold - hide header
              header.style.transform = 'translateY(-100%)';
            } else {
              // Scrolling up or at top - show header
              header.style.transform = 'translateY(0)';
            }
            this.lastScrollY = currentScrollY;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Store reference for cleanup if needed
    this.scrollHandler = handleScroll;
  }

  // Initialize component
  init() {
    // Always render immediately if possible
    this.render();
  }
}

// Auto-initialize when script loads
(function() {
  function initializeHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer && !window.headerComponentLoaded) {
      new HeaderComponent('header-container');
      window.headerComponentLoaded = true;
    }
  }

  // Try to initialize immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHeader);
  } else {
    initializeHeader();
  }

  // Also try after a short delay to ensure DOM is ready
  setTimeout(initializeHeader, 100);
})();
