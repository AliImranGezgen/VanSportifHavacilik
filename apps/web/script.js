/* ----------------------------------------------------
   Van Sportif Havacılık Kulübü - Script
   Behaviors: Smooth scrolling, Sticky glass nav, Hamburger toggle, Active link observer
   Author: Antigravity AI
   ---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT DOM ELEMENTS
    const header = document.querySelector('.main-header');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 2. STICKY / GLASSNAV EFFECT ON SCROLL
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Initialize state on load and bind to window scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // 3. MOBILE HAMBURGER MENU TOGGLE
    const toggleMobileMenu = () => {
        const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        
        // Toggle active classes
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Update ARIA expand accessibility attribute
        hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    };

    const closeMobileMenu = () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    };

    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on overlay space (outside menu container on mobile)
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburgerBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // 4. SMOOTH SCROLL & CLOSE MENU ON NAV LINK CLICK
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu immediately
            closeMobileMenu();

            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Calculate header height offset
                    const headerOffset = 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 5. INTERSECTION OBSERVER FOR ACTIVE NAVBAR INDICATOR
    // Highlights the current visible section in the header menu automatically
    const observerOptions = {
        root: null, // viewport
        rootMargin: '-20% 0px -60% 0px', // check elements in the center third of viewport
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Clear active states on all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active-section');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-section');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all main sections with ids
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
});
