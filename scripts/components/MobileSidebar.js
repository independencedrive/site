/**
 * Mobile Sidebar Component - Pure Tailwind + Vanilla JS
 * Standalone mobile navigation component with slide-in animation
 */

// Utility function for base URL (shared with header)
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

class MobileSidebar {
  constructor() {
    this.isOpen = false;
    // Use the same navigation data as the header - will be available when header loads
    this.navigationData = null;
  }

  getNavigationData() {
    // Try to get navigation data from window or use fallback
    if (typeof navigationData !== 'undefined') {
      return navigationData;
    }
    
    // Fallback navigation data (should match header.js)
    return {
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
                { name: "Permis B Boite Manuelle", href: () => getBaseUrl() + 'permis-b-boite-manuelle/' },
                { name: "Permis B Boite Automatique", href: () => getBaseUrl() + 'permis-b-boite-automatique/' },
                { name: "Permis B Accéléré", href: () => getBaseUrl() + 'permis-b-accelere/' },
                { name: "Permis B Heures Illimitées", href: () => getBaseUrl() + 'permis-b-heures-illimitees/' },
                { name: "Conduite Accompagnée (AAC)", href: () => getBaseUrl() + 'permis-aac-conduite-accompagnee/' },
                { name: "Permis B + Voyage Disney", href: () => getBaseUrl() + 'permis-b-voyage-disney/' },
                { name: "Code de la route", href: () => getBaseUrl() + 'preparation-au-code-de-la-route/' },
                { name: "Prestations diverses", href: () => getBaseUrl() + 'cours-theoriques/' }
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
                { name: "À propos", href: () => getBaseUrl() + 'a-propos/' },
                { name: "Contact", href: () => getBaseUrl() + 'contact/' },
                { name: "Actualités", href: () => getBaseUrl() + 'actualites/' },
                { name: "Avis clients", href: () => "https://www.opinionsystem.fr/fr-fr/certificate/20771?referer=1" },
                { name: "Label Qualiopi", href: () => getBaseUrl() + 'label-qualiopi/' }
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
                { name: "Critère 1.2 Enjeux de la Formation", href: () => getBaseUrl() + 'media/pdf/Critère 1.2 Enjeux de la Formation.pdf' },
                { name: "Critère 1.3 Règlement intérieur", href: () => getBaseUrl() + 'media/pdf/Critère 1.3 Reglement interieur.pdf' },
                { name: "Critère 1.4 Attestation Permis Moto", href: () => getBaseUrl() + 'media/pdf/Critère 1.4 Attestation sur le Permis Moto.pdf' },
                { name: "Critère 1.6 Post-Permis Programme", href: () => getBaseUrl() + 'media/pdf/Critère 1.6 Post-Permis Programme.pdf' },
                { name: "Critère 2.1 Programme de Formation", href: () => getBaseUrl() + 'media/pdf/Critère 2.1 Programme de Formation.pdf' },
                { name: "Critère 2.2 Attestation sur l'honneur", href: () => getBaseUrl() + 'media/pdf/Critère 2.2 Attestation sur l\'honneur.pdf' },
                { name: "Critère 2.3 Décrire et formaliser", href: () => getBaseUrl() + 'media/pdf/Critère 2.3 Décrire et formaliser le procédé.pdf' },
                { name: "Critère 2.4 Décrivant le handicap", href: () => getBaseUrl() + 'media/pdf/Critère 2.4 Décrivant le handicap.pdf' }
              ]
            }
          ]
        }
      ]
    };
  }

  render() {
    return `
      <!-- Mobile Navigation Overlay -->
      <div id="mobile-sidebar" 
           class="lg:hidden fixed inset-0 z-50 transform translate-x-full transition-transform duration-300 ease-in-out">
        <!-- Sidebar Panel -->
        <div class="fixed inset-0 bg-black text-white w-full h-full overflow-y-auto p-[10%]">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-white">
            <h2 class="font-bold uppercase" style="font-size: 2rem;">MENU</h2>
            <button id="mobile-sidebar-close" 
                    class="hover:text-gray-300 transition-colors p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Navigation -->
          <nav class="flex-1 py-6">
            ${this.generateMobileNav()}
          </nav>
        </div>
      </div>
    `;
  }

  generateMobileNav() {
    const navData = this.getNavigationData();
    return navData.menuItems.map(item => {
      if (item.megamenu) {
        // Handle mega menu items - flatten them for mobile
        const allItems = item.categories.reduce((acc, category) => {
          return acc.concat(category.items);
        }, []);

        return `
          <div class="mobile-dropdown-container border-b" style="border-color: #ffffff63;">
            <button class="mobile-dropdown-toggle w-full flex items-center justify-between px-6 py-4 text-white hover:bg-gray-800 transition-colors" 
                    data-dropdown="${item.name.toLowerCase().replace(/\s+/g, '-')}">
              <span class="text-lg font-medium">${item.name}</span>
              <svg class="mobile-dropdown-icon w-5 h-5 transform transition-transform duration-200" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="mobile-dropdown-menu max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
              ${allItems.map(subItem => `
                <a href="${typeof subItem.href === 'function' ? subItem.href() : subItem.href}" 
                   ${item.name === 'Label Qualiopi' ? 'target="_blank"' : ''}
                   class="block px-10 py-3 hover:bg-gray-800 transition-colors">
                  ${subItem.name}
                  ${item.name === 'Label Qualiopi' ? '<svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>' : ''}
                </a>
              `).join('')}
            </div>
          </div>
        `;
      } else {
        return `
          <div class="border-b" style="border-color: #ffffff63;">
            <a href="${typeof item.href === 'function' ? item.href() : item.href}" 
               class="block px-6 py-4 hover:bg-gray-800 transition-colors">
              <span class="text-lg font-medium">${item.name}</span>
            </a>
          </div>
        `;
      }
    }).join('');
  }

  open() {
    if (this.isOpen) return;
    
    this.isOpen = true;
    const sidebar = document.getElementById('mobile-sidebar');
    const body = document.body;
    
    if (sidebar) {
      sidebar.classList.remove('translate-x-full');
      sidebar.classList.add('translate-x-0');
      body.style.overflow = 'hidden';
    }
  }

  close() {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    const sidebar = document.getElementById('mobile-sidebar');
    const body = document.body;
    
    if (sidebar) {
      sidebar.classList.remove('translate-x-0');
      sidebar.classList.add('translate-x-full');
      body.style.overflow = '';
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  attachEventListeners() {
    // Close button
    document.addEventListener('click', (e) => {
      if (e.target.closest('#mobile-sidebar-close')) {
        this.close();
      }
    });

    // Backdrop click
    document.addEventListener('click', (e) => {
      if (e.target.matches('#mobile-sidebar-backdrop')) {
        this.close();
      }
    });

    // Mobile dropdown toggles
    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('.mobile-dropdown-toggle');
      if (toggle) {
        e.preventDefault();
        const container = toggle.closest('.mobile-dropdown-container');
        const menu = container.querySelector('.mobile-dropdown-menu');
        const icon = toggle.querySelector('.mobile-dropdown-icon');
        
        const isOpen = menu.style.maxHeight && menu.style.maxHeight !== '0px';
        
        if (isOpen) {
          menu.style.maxHeight = '0px';
          icon.style.transform = 'rotate(0deg)';
        } else {
          menu.style.maxHeight = menu.scrollHeight + 'px';
          icon.style.transform = 'rotate(180deg)';
        }
      }
    });

    // Close on navigation item click (except dropdown toggles)
    document.addEventListener('click', (e) => {
      if (e.target.closest('#mobile-sidebar a[href]') && 
          !e.target.closest('.mobile-dropdown-toggle')) {
        setTimeout(() => this.close(), 150);
      }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }
}

// Make available globally
window.MobileSidebar = MobileSidebar;
