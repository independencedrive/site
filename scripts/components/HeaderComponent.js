/**
 * Main Header Component - Simplified and modular
 */
import { navigationData } from './navigationData.js';
import { NavigationGenerator } from './NavigationGenerator.js';
import { EventHandlers } from './EventHandlers.js';

export class HeaderComponent {
  constructor(containerId = 'header-container') {
    this.container = document.getElementById(containerId);
    this.mobileMenuOpen = false;
    this.mobileSidebar = new window.MobileSidebar(); // Initialize mobile sidebar
    this.eventHandlers = new EventHandlers(this);
    this.init();
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
              ${NavigationGenerator.generateDesktopNav(navigationData.menuItems)}
            </nav>

            <!-- Tablet Navigation - Simplified -->
            <nav class="hidden lg:flex xl:hidden items-center space-x-1">
              ${NavigationGenerator.generateTabletNav(navigationData.menuItems)}
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
    // Setup all event handlers
    this.eventHandlers.setupMobileMenu();
    this.eventHandlers.setupMegaMenus();
    this.eventHandlers.setupScrollHandler();
    
    // Attach mobile sidebar event listeners
    this.mobileSidebar.attachEventListeners();
  }

  // Initialize component
  init() {
    // Always render immediately if possible
    this.render();
  }
}
