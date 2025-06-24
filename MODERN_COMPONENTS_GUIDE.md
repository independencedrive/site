# Modern Component System - Usage Guide

## 🚀 **Ultra-Fast, Clean Architecture**

This modern component system uses:
- ✅ **Pure HTML5** + **Tailwind CSS CDN only**
- ✅ **Vanilla JavaScript ES6 modules** - No framework bloat
- ✅ **System-ui font-family** - Native OS fonts
- ✅ **Fast loading** - Minimal code, maximum performance
- ✅ **Fully responsive** - Mobile-first design

## 📁 **File Structure**

```
scripts/
├── components/
│   ├── header.js      # Modern header with mobile nav
│   ├── footer.js      # Structured footer with links
│   └── template.js    # Page templates and components
```

## 🔧 **How to Use**

### 1. **For New Pages (Recommended)**

Create a clean HTML page:

```html
<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title | Independence Drive</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
          }
        }
      }
    }
  </script>
</head>
<body class="bg-white font-sans">
  
  <!-- Header Container -->
  <div id="header-container"></div>
  
  <!-- Your Page Content -->
  <main class="min-h-screen">
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Your Content Here</h1>
        <!-- Add your Tailwind-styled content -->
      </div>
    </section>
  </main>
  
  <!-- Footer Container -->
  <div id="footer-container"></div>
  
  <!-- Load Components -->
  <script type="module">
    import('./scripts/components/header.js');
    import('./scripts/components/footer.js');
  </script>
  
</body>
</html>
```

### 2. **For Existing Pages**

Add these containers where you want header/footer:

```html
<!-- In <body> at the top -->
<div id="header-container"></div>

<!-- Your existing content -->

<!-- In <body> at the bottom -->
<div id="footer-container"></div>

<!-- Before closing </body> -->
<script type="module">
  import('./scripts/components/header.js');
  import('./scripts/components/footer.js');
</script>
```

### 3. **Using Page Templates**

For complex pages, use the template system:

```javascript
import { PageTemplate, pageComponents } from './scripts/components/template.js';

// Create page template
const template = new PageTemplate({
  title: "Permis B Automatique",
  description: "Formation permis B boîte automatique à Montpellier"
});

// Create hero section
const heroContent = pageComponents.hero({
  title: "Permis B Automatique",
  subtitle: "Apprenez à conduire en toute simplicité avec une transmission automatique",
  backgroundImage: "https://example.com/bg.jpg",
  buttons: [
    { text: "Réserver", href: "./contact", primary: true },
    { text: "En savoir plus", href: "#details", primary: false }
  ]
});

// Create services section
const servicesContent = pageComponents.servicesGrid([
  {
    title: "Formation Standard",
    description: "20h de conduite + code de la route",
    image: "https://example.com/service1.jpg",
    href: "./details"
  }
  // Add more services...
]);

// Combine content
const fullContent = heroContent + servicesContent;

// Generate complete page (optional - for new pages)
document.body.innerHTML = template.generatePage(fullContent);
```

## 🎨 **Component Features**

### **Header Component**
- ✅ Responsive navigation with mobile menu
- ✅ Dropdown menus with hover effects
- ✅ Auto-adjusting base URLs for all page levels
- ✅ Clean Tailwind styling with red brand colors
- ✅ Accessible mobile menu with slide animation

### **Footer Component**
- ✅ Structured content: company info, services, links, legal
- ✅ Contact information with icons
- ✅ Social media links with hover effects
- ✅ Responsive grid layout
- ✅ Copyright and certification badges

### **Template System**
- ✅ Pre-built page components (hero, services grid, contact)
- ✅ SEO-optimized meta tags and Open Graph
- ✅ Tailwind configuration with system-ui fonts
- ✅ Modular and reusable sections

## ⚡ **Performance Benefits**

1. **No Framework Overhead** - Pure vanilla JS
2. **CDN Delivery** - Tailwind served from fast CDN
3. **Modern ES6 Modules** - Efficient loading
4. **System Fonts** - No web font downloads
5. **Minimal JavaScript** - Only what's needed
6. **Responsive Images** - Optimized loading

## 🔄 **Migration Strategy**

1. **Start with new pages** using the full template system
2. **Gradually update existing pages** by adding containers and scripts
3. **Remove old CSS files** and inline styles
4. **Replace custom styling** with Tailwind classes
5. **Test thoroughly** on all devices and browsers

## 📱 **Mobile-First Features**

- Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Touch-friendly navigation and buttons
- Optimized mobile menu with slide-in animation
- Readable typography at all screen sizes
- Proper spacing and padding for mobile use

## 🎯 **Best Practices**

1. **Always use Tailwind classes** - No custom CSS
2. **Stick to system-ui fonts** - No web fonts
3. **Use semantic HTML5** - Proper structure
4. **Test on mobile first** - Then scale up
5. **Keep JavaScript minimal** - Only essential features
6. **Optimize images** - WebP format when possible

This system provides a modern, fast, and maintainable foundation for your website while keeping the codebase clean and simple.
