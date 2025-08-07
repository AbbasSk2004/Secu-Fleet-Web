'use client';

import { useEffect } from 'react';

const BootstrapProvider = ({ children }) => {
  useEffect(() => {
    // Ensure Bootstrap is properly initialized on the client side
    if (typeof window !== 'undefined') {
      console.log('BootstrapProvider: Checking for dependencies...');
      
      // Wait for jQuery and Bootstrap to be available
      const checkDependencies = () => {
        if (window.jQuery && window.bootstrap) {
          console.log('BootstrapProvider: Bootstrap and jQuery are ready');
          console.log('jQuery version:', window.jQuery.fn.jquery);
          console.log('Bootstrap version:', window.bootstrap.VERSION || '4.0.0-beta.2');
          
          // Initialize any Bootstrap components that need manual initialization
          if (window.bootstrap.Tooltip) {
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
          }
          if (window.bootstrap.Popover) {
            const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
            popoverTriggerList.map(function (popoverTriggerEl) {
              return new window.bootstrap.Popover(popoverTriggerEl);
            });
          }
        } else {
          console.log('BootstrapProvider: Dependencies not ready yet, checking again...');
          console.log('jQuery available:', !!window.jQuery);
          console.log('Bootstrap available:', !!window.bootstrap);
          // Check again in 100ms if dependencies aren't ready yet
          setTimeout(checkDependencies, 100);
        }
      };

      // Start checking for dependencies
      checkDependencies();
    }
  }, []);

  return <>{children}</>;
};

export default BootstrapProvider;