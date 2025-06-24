// Global Tailwind CSS Configuration for Independence Drive
// This ensures consistent styling across all pages with ZERO custom CSS and ONLY system-ui font

window.globalTailwindConfig = {
    theme: {
        extend: {
            colors: {
                primary: '#667eea',
                secondary: '#764ba2',
                accent: '#ff6b6b',
                success: '#10b981',
                warning: '#f59e0b',
                error: '#ef4444'
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }
        },
        // Override ALL default font families to use ONLY system-ui
        fontFamily: {
            'sans': ['system-ui', 'ui-sans-serif', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            'serif': ['system-ui', 'ui-serif', 'Georgia', 'serif'], 
            'mono': ['system-ui', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace']
        }
    }
};

// Apply the configuration to Tailwind
if (typeof tailwind !== 'undefined') {
    tailwind.config = window.globalTailwindConfig;
}

// Add global CSS styles for header, footer, sidebar using Tailwind approach
document.addEventListener('DOMContentLoaded', function() {
    // Apply pure Tailwind classes to body and layout elements
    const applyTailwindStyles = () => {
        // Body styling
        document.body.style.cssText = '';
        document.body.className = 'bg-gray-800 w-full min-h-screen overflow-x-hidden font-sans';
        
        // Header styling
        const header = document.getElementById('header');
        if (header) {
            header.style.cssText = '';
            header.className = 'sticky top-0 left-0 z-50';
        }
        
        // Footer styling  
        const footer = document.getElementById('footer');
        if (footer) {
            footer.style.cssText = '';
            footer.className = '';
        }
        
        // Sidebar styling
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.style.cssText = '';
            sidebar.className = 'hidden fixed top-0 right-0 w-full h-full bg-white z-40 p-8 overflow-y-auto';
        }
    };
    
    // Apply styles immediately
    applyTailwindStyles();
    
    // Also apply after a short delay to catch dynamically loaded content
    setTimeout(applyTailwindStyles, 100);
});
