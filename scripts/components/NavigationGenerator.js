/**
 * Navigation generators for different screen sizes
 */
import { getBaseUrl } from './utils.js';

export class NavigationGenerator {
  // Generate desktop navigation
  static generateDesktopNav(menuItems) {
    return menuItems.map(item => {
      if (item.megamenu) {
        return this.generateMegaMenu(item);
      } else if (item.dropdown) {
        return this.generateDropdown(item);
      } else {
        return this.generateSimpleLink(item);
      }
    }).join('');
  }

  // Generate mega menu
  static generateMegaMenu(item) {
    return `
      <div class="relative group" data-megamenu-container>
        <button class="text-white hover:text-red-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 touch-manipulation" data-megamenu-trigger>
          ${item.name}
          <svg class="w-4 h-4 ml-1 inline-block transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        ${this.generateMegaMenuContent(item)}
      </div>
    `;
  }

  // Generate mega menu content
  static generateMegaMenuContent(item) {
    const isFormations = item.name === 'Formations';
    const isAutresPrestations = item.name === 'Autres prestations';
    const isSingleCategory = item.categories.length === 1;
    
    return `
      <div class="megamenu-dropdown absolute top-full mt-0 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-red-600 rounded-b-lg z-50 ${isFormations || isAutresPrestations ? 'w-[600px] max-w-[90vw]' : isSingleCategory ? 'min-w-[320px] max-w-[420px] mx-auto' : 'w-screen max-w-[min(90vw,1152px)]'}" 
           style="left: 50%; transform: translateX(-50%);">
        <div class="p-6">
          ${isFormations ? this.generateFormationsLayout(item) : isAutresPrestations ? this.generateAutresPrestationsLayout(item) : this.generateStandardLayout(item)}
          ${this.generateCallToAction(item)}
        </div>
      </div>
    `;
  }

  // Generate Formations specific layout (2-column grid)
  static generateFormationsLayout(item) {
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

  // Generate layout for "Autres prestations" menu
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

  // Generate standard layout for other menus
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

  // Generate call to action footer
  static generateCallToAction(item) {
    const isFormations = item.name === 'Formations';
    const isSingleCategory = item.categories.length === 1;

    return `
      <div class="mt-6 pt-4 border-t border-gray-200">
        ${isFormations ? `
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
        ` : isSingleCategory ? `
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
    `;
  }

  // Generate dropdown menu
  static generateDropdown(item) {
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
  }

  // Generate simple link
  static generateSimpleLink(item) {
    return `
      <a href="${typeof item.href === 'function' ? item.href() : item.href}" 
         class="text-white hover:text-red-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
        ${item.name}
      </a>
    `;
  }

  // Generate tablet navigation (simplified for medium screens)
  static generateTabletNav(menuItems) {
    return menuItems.map(item => {
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
        return this.generateDropdown(item);
      } else {
        return this.generateSimpleLink(item);
      }
    }).join('');
  }
}
