/**
 * Event handlers for header interactions
 */
export class EventHandlers {
  constructor(headerComponent) {
    this.header = headerComponent;
    this.lastScrollY = window.scrollY;
    this.scrollThreshold = 10;
  }

  // Setup mobile menu interactions
  setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    mobileMenuButton?.addEventListener('click', () => {
      this.header.mobileSidebar.toggle();
    });

    // Touch support for mobile menu
    mobileMenuButton?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.header.mobileSidebar.toggle();
    });
  }

  // Setup mega menu interactions for better responsive handling
  setupMegaMenus() {
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
}
