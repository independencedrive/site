/**
 * Modern Page Template - Clean HTML5 + Tailwind CDN
 * Ultra-fast loading with modern components
 */

// Template configuration
const templateConfig = {
  title: "Independence Drive - École de Conduite Moderne",
  description: "École de conduite certifiée Qualiopi à Montpellier. Permis B, conduite accompagnée, formation accélérée. Votre indépendance commence ici.",
  keywords: "école conduite, permis B, Montpellier, auto-école, formation conduite, Qualiopi",
  author: "Independence Drive",
  viewport: "width=device-width, initial-scale=1.0",
  lang: "fr",
  charset: "UTF-8",
  favicon: "https://raw.githubusercontent.com/independencedrive/site/main/media/images/logo_300x172.jpeg",
  ogImage: "https://raw.githubusercontent.com/independencedrive/site/main/media/images/home-tiny.webp"
};

// Generate clean HTML head
function generateHead(pageTitle = "", pageDescription = "") {
  const fullTitle = pageTitle ? `${pageTitle} | ${templateConfig.title}` : templateConfig.title;
  const description = pageDescription || templateConfig.description;
  
  return `
    <meta charset="${templateConfig.charset}">
    <meta name="viewport" content="${templateConfig.viewport}">
    <meta name="description" content="${description}">
    <meta name="keywords" content="${templateConfig.keywords}">
    <meta name="author" content="${templateConfig.author}">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${fullTitle}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${templateConfig.ogImage}">
    <meta property="og:url" content="${window.location.href}">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${fullTitle}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${templateConfig.ogImage}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/jpeg" href="${templateConfig.favicon}">
    
    <title>${fullTitle}</title>
    
    <!-- Tailwind CSS CDN - Latest version -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Tailwind Configuration -->
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
              'serif': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'serif'],
              'mono': ['system-ui', 'monospace']
            },
            colors: {
              'brand': {
                50: '#fef2f2',
                100: '#fee2e2', 
                200: '#fecaca',
                300: '#fca5a5',
                400: '#f87171',
                500: '#ef4444',
                600: '#dc2626',
                700: '#b91c1c',
                800: '#991b1b',
                900: '#7f1d1d'
              }
            }
          }
        }
      }
    </script>
  `;
}

// Page Template Class
class PageTemplate {
  constructor(options = {}) {
    this.options = {
      title: options.title || "",
      description: options.description || "",
      includeHeader: options.includeHeader !== false,
      includeFooter: options.includeFooter !== false,
      bodyClass: options.bodyClass || "bg-white font-sans",
      ...options
    };
  }

  // Generate complete page structure
  generatePage(content = "") {
    return `
      <!DOCTYPE html>
      <html lang="${templateConfig.lang}" class="scroll-smooth">
      <head>
        ${generateHead(this.options.title, this.options.description)}
      </head>
      <body class="${this.options.bodyClass}">
        
        ${this.options.includeHeader ? '<div id="header-container"></div>' : ''}
        
        <main class="min-h-screen">
          ${content}
        </main>
        
        ${this.options.includeFooter ? '<div id="footer-container"></div>' : ''}
        
        <!-- Component Scripts -->
        <script type="module">
          ${this.options.includeHeader ? `
            import HeaderComponent from './scripts/components/header.js';
            new HeaderComponent();
          ` : ''}
          
          ${this.options.includeFooter ? `
            import FooterComponent from './scripts/components/footer.js';  
            new FooterComponent();
          ` : ''}
        </script>
        
        <!-- Analytics and tracking can be added here -->
        
      </body>
      </html>
    `;
  }

  // Generate just the head section for existing pages
  generateHeadOnly() {
    return generateHead(this.options.title, this.options.description);
  }
}

// Page content components
const pageComponents = {
  // Hero section template
  hero: (options = {}) => `
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      ${options.backgroundImage ? `
        <div class="absolute inset-0 z-0">
          <img src="${options.backgroundImage}" 
               alt="${options.backgroundAlt || ''}" 
               class="w-full h-full object-cover opacity-40">
        </div>
      ` : ''}
      
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          ${options.title || 'Bienvenue'}
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          ${options.subtitle || 'Votre description ici'}
        </p>
        ${options.buttons ? `
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            ${options.buttons.map(btn => `
              <a href="${btn.href}" 
                 class="${btn.primary ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-900'} 
                        px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                ${btn.text}
              </a>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </section>
  `,

  // Services grid template
  servicesGrid: (services = []) => `
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Prestations</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez le forfait qui s'adapte le mieux à vos besoins et objectifs
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${services.map(service => `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div class="h-48 bg-gray-900 flex items-center justify-center overflow-hidden">
                <img src="${service.image}" 
                     alt="${service.title}"
                     class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300">
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">${service.title}</h3>
                <p class="text-gray-600 mb-4 line-clamp-3">${service.description}</p>
                <a href="${service.href}" 
                   class="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-200">
                  En savoir plus
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `,

  // Contact section template
  contactSection: (options = {}) => `
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ${options.title || 'Contactez-nous'}
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            ${options.subtitle || 'Nous sommes là pour répondre à toutes vos questions'}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="bg-red-100 p-3 rounded-lg">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">Téléphone</h3>
                <p class="text-gray-600">06 64 20 21 57</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-red-100 p-3 rounded-lg">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <p class="text-gray-600">independencedrive2018@gmail.com</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-red-100 p-3 rounded-lg">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">Adresse</h3>
                <p class="text-gray-600">83 Rue Michel Ange<br>34070 Montpellier</p>
              </div>
            </div>
          </div>
          
          <!-- CTA -->
          <div class="bg-gray-50 p-8 rounded-xl">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Prêt à commencer ?</h3>
            <p class="text-gray-600 mb-6">
              Contactez-nous dès maintenant pour discuter de vos objectifs et choisir la formation qui vous convient.
            </p>
            <a href="tel:0664202157" 
               class="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block text-center">
              Appelez maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  `
};

// Export everything
if (typeof window !== 'undefined') {
  window.PageTemplate = PageTemplate;
  window.pageComponents = pageComponents;
  window.templateConfig = templateConfig;
}

export { PageTemplate, pageComponents, templateConfig };
