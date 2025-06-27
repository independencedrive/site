/**
 * Navigation data structure
 */
import { getBaseUrl } from './utils.js';

export const navigationData = {
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
          title: 'Permis B Traditionnel',
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
              href: () => getBaseUrl() + 'cours-theoriques/',
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
              href: () => '#',
              description: 'Formation théorique personnalisée',
              icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>`
            },
            {
              name: 'Formation passerelle',
              href: () => getBaseUrl() + 'formation-passerelle/',
              description: 'Formation de transition pour nouveaux conducteurs',
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
              name: "S'entraîner au code",
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
            }
          ]
        }
      ]
    },
    {
      name: "Label Qualiopi",
      href: () => getBaseUrl() + 'label-qualiopi/',
      active: false
    },
  ]
};
