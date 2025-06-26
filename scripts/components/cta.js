/**
 * CTA (Call-to-Action) Component - Modern Tailwind Implementation
 * Reusable component for displaying the 3 main reasons to choose Independence Drive
 */

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

function createCTASection() {
    return `
    <!-- CTA Section - 3 bonnes raisons de nous choisir -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Title -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    3 bonnes raisons de nous choisir !
                </h2>
                <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <!-- CTA Cards Grid -->
            <div class="grid md:grid-cols-3 gap-8">
                
                <!-- Card 1: Pré-inscription rapide -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
                    <!-- Check Icon -->
                    <div class="flex justify-center mb-6">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Card Content -->
                    <div class="mb-6">
                        <div class="mb-4">
                            <img 
                                src="${getBaseUrl()}media/images/pre-inscription.jpeg" 
                                alt="Independence Drive - Pré-inscription rapide" 
                                class="h-[200px] mx-auto rounded-lg object-cover"
                            >
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">
                            1. Pré-inscription rapide en ligne
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            Inscrivez-vous en quelques clics, choisissez la formule qui vous correspond et démarrez votre formation sans attendre !
                        </p>
                    </div>
                    
                    <!-- CTA Button -->
                    <a 
                        href="https://www.sarool.fr/ext/inscription-formule/?cle=41986111447775083" 
                        class="inline-block w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Choisissez votre formule
                    </a>
                </div>

                <!-- Card 2: Certification Qualiopi -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
                    <!-- Check Icon -->
                    <div class="flex justify-center mb-6">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Card Content -->
                    <div class="mb-6">
                        <div class="mb-4">
                            <img 
                                src="${getBaseUrl()}media/images/qualiopi-300px.png" 
                                alt="Qualiopi - processus certifié" 
                                class="h-[200px] mx-auto"
                            >
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">
                            2. Auto-école certifiée Qualiopi
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            Bénéficiez d'une formation de qualité, reconnue et certifiée Qualiopi pour un accompagnement fiable et professionnel.
                        </p>

                    </div>
                    
                    <!-- CTA Button -->
                    <a 
                        href="${getBaseUrl()}label-qualiopi/" 
                        class="inline-block w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                        En savoir plus
                    </a>
                </div>

                <!-- Card 3: Avis Clients Vérifiés -->
                <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
                    <!-- Check Icon -->
                    <div class="flex justify-center mb-6">
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Card Content -->
                    <div class="mb-6">
                        <div class="mb-4">
                            <img 
                                src="${getBaseUrl()}media/images/avis-clients.jpeg" 
                                alt="Independence Drive - Avis clients vérifiés" 
                                class="h-[200px] mx-auto rounded-lg object-cover"
                            >
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">
                            3. Avis Clients Vérifiés
                        </h3>
                        
                        <!-- Rating iframe with responsive container -->
                        <div class="mb-4 bg-gray-50 rounded-lg p-4">
                            <iframe 
                                src="https://www.opinionsystem.fr/company_rating.php?company_id=20771&professional_activity_id=0&rating_key=de698f07d205e341827574ce934d46a1&language=fr-FR&text_color=000000" 
                                scrolling="no" 
                                frameborder="0" 
                                allowtransparency="true"
                                class="w-full h-5 border-0"
                                title="Avis clients Independence Drive"
                            ></iframe>
                        </div>
                        
                        <p class="text-gray-600 leading-relaxed">
                            Découvrez pourquoi nos élèves nous recommandent : lisez leurs avis authentiques et rejoignez une communauté satisfaite !
                        </p>
                    </div>
                    
                    <!-- CTA Button -->
                    <a 
                        href="https://www.opinionsystem.fr/fr-fr/certificate/20771?referer=1" 
                        class="inline-block w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                        Voir tous les avis
                    </a>
                </div>
            </div>

            
        </div>
    </section>
    `;
}

// Load and inject CTA section
function loadCTASection() {
    const ctaContainer = document.getElementById('cta-container');
    if (ctaContainer) {
        ctaContainer.innerHTML = createCTASection();
    }
}

// Auto-load when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCTASection);
} else {
    loadCTASection();
}
