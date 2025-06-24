/**
 * Utility functions for the header component
 */

// Utility function for base URL
export function getBaseUrl() {
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
