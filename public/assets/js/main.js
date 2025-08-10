(function ($) {
    "use strict";

    // Global flag to prevent multiple initializations
    window.secufleetCountersInitialized = false;

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Enhanced Facts counter initialization function
    function initializeCounters() {
        console.log('Attempting to initialize counters...');
        
        // Check if already initialized
        if (window.secufleetCountersInitialized) {
            console.log('Counters already initialized, skipping...');
            return;
        }

        // Verify all dependencies are available
        if (!window.jQuery || !$.fn.waypoint || !$.fn.counterUp) {
            console.log('Dependencies not ready yet. jQuery:', !!window.jQuery, 'Waypoint:', !!($.fn && $.fn.waypoint), 'CounterUp:', !!($.fn && $.fn.counterUp));
            return false;
        }

        const $counterElements = $('[data-toggle="counter-up"]');
        console.log('Found counter elements:', $counterElements.length);

        if ($counterElements.length === 0) {
            console.log('No counter elements found, will retry later...');
            return false;
        }

        let initializedCount = 0;
        $counterElements.each(function() {
            const $this = $(this);
            
            // Only initialize if not already initialized
            if (!$this.data('waypoint') && !$this.data('counterup-nums') && !$this.hasClass('counter-initialized')) {
                try {
                    $this.counterUp({
                        delay: 10,
                        time: 2000
                    });
                    $this.addClass('counter-initialized');
                    initializedCount++;
                    console.log('Initialized counter for element:', this);
                } catch (error) {
                    console.error('Error initializing counter:', error);
                }
            }
        });

        if (initializedCount > 0) {
            window.secufleetCountersInitialized = true;
            console.log('Successfully initialized', initializedCount, 'counters');
            return true;
        }
        
        return false;
    }

    // Multiple initialization strategies for maximum reliability

    // Strategy 1: DOM ready with retries
    $(document).ready(function() {
        console.log('DOM ready, attempting counter initialization...');
        
        function tryInitWithRetry(attempts = 0) {
            const maxAttempts = 20; // 2 seconds total (20 * 100ms)
            
            if (initializeCounters()) {
                return; // Success!
            }
            
            if (attempts < maxAttempts) {
                setTimeout(() => tryInitWithRetry(attempts + 1), 100);
            } else {
                console.warn('Failed to initialize counters after', maxAttempts, 'attempts');
            }
        }
        
        // Start trying after a small delay to ensure React has rendered
        setTimeout(() => tryInitWithRetry(), 200);
    });

    // Strategy 2: Window load event
    $(window).on('load', function() {
        console.log('Window loaded, checking counter initialization...');
        if (!window.secufleetCountersInitialized) {
            setTimeout(initializeCounters, 100);
        }
    });

    // Strategy 3: Use MutationObserver to detect when new counter elements are added (for React routing)
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
            let shouldReinitialize = false;
            
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                            // Check if the node itself or its children contain counter elements
                            if ((node.matches && node.matches('[data-toggle="counter-up"]')) ||
                                (node.querySelector && node.querySelector('[data-toggle="counter-up"]'))) {
                                shouldReinitialize = true;
                                console.log('Detected new counter elements added to DOM');
                            }
                        }
                    });
                }
            });
            
            if (shouldReinitialize) {
                // Reset the global flag to allow re-initialization
                window.secufleetCountersInitialized = false;
                setTimeout(initializeCounters, 150);
            }
        });
        
        // Start observing after DOM is ready
        $(document).ready(function() {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    // Strategy 4: Global function for manual triggering (for debugging or edge cases)
    window.reinitializeCounters = function() {
        console.log('Manual counter reinitialization triggered');
        window.secufleetCountersInitialized = false;
        // Reset all elements
        $('[data-toggle="counter-up"]').removeClass('counter-initialized');
        initializeCounters();
    };
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);



////////////////////////////////////////////////////
/////////////////// ON Fleet////////////
//////////////////////////////////////////////////
// function changeContentFleet(section) {
//     const contentData = {
//         'courier': {
//             image: '/client/images/onfleet/industry-courier.png',
//             subtitle: 'Courier',
//             features: [
//                 'Gain up to 40% efficiency with route optimization',
//                 'Simplify driver onboarding',
//                 'Provide clients real-time updates on all deliveries'
//             ]
//         },
//         'grocery': {
//             image: '/client/images/onfleet/industry-grocery.png',
//             subtitle: 'Grocery',
//             features: [
//                 'Manage grocery deliveries effectively',
//                 'Ensure freshness with real-time tracking',
//                 'Optimize delivery routes for efficiency'
//             ]
//         },
//         'restaurant': {
//             image: '/client/images/onfleet/industry-courier.png',
//             subtitle: 'Restaurant',
//             features: [
//                 'Deliver food hot and fresh',
//                 'Real-time order tracking for customers',
//                 'Optimize delivery routes to reduce time'
//             ]
//         },
//         'coffee': {
//             image: '/client/images/onfleet/industry-courier.png',
//             subtitle: 'coffee',
//             features: [
//                 'Deliver coffee hot and fresh',
//                 'Real-time order tracking for customers',
//                 'Optimize delivery routes to reduce time'
//             ]
//         },
//     };

//     const content = contentData[section];
//     const contentImage = document.getElementById('content-image');
//     const contentSubtitle = document.getElementById('content-subtitle');
//     const contentList = document.getElementById('content-list');

//     contentImage.classList.remove('slide-in');
//     contentSubtitle.classList.remove('slide-in');
//     contentList.classList.remove('slide-in');

//     contentImage.src = content.image;
//     contentSubtitle.innerText = content.subtitle;
    
//     contentList.innerHTML = '';
//     content.features.forEach(feature => {
//         const li = document.createElement('li');
//         li.innerText = feature;
//         contentList.appendChild(li);
//     });
    

//     contentImage.offsetHeight; 

//     setTimeout(() => {
//         contentImage.classList.add('slide-in');
//         contentSubtitle.classList.add('slide-in');
//         contentList.classList.add('slide-in');
//     }, 50);


//     const items = document.querySelectorAll('.item');
//     items.forEach(item => item.classList.remove('selected-item')); // Remove 'selected-item' class from all items
//     document.querySelector(`[onclick="changeContentFleet('${section}')"]`).classList.add('selected-item'); // Add 'selected-item' class to the clicked item
// }

//  changeContentFleet('courier');


//////////////////////////////////////////////////////////
//////////////////////FAQ////////////////////////////////
/////////////////////////////////////////////////////

