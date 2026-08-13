/**
 * Header and Drawer Mobile Navigation
 */

export const initNavigation = () => {
    const header = document.querySelector('.header');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const navDrawer = document.querySelector('.nav-drawer');
    const drawerCloseBtn = document.querySelector('.drawer-close-btn');
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

    // Header scroll background effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // Toggle Drawer Open/Close
    const openDrawer = () => {
        navDrawer?.classList.add('active');
        drawerOverlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        navDrawer?.classList.remove('active');
        drawerOverlay?.classList.remove('active');
        document.body.style.overflow = '';
    };

    hamburgerBtn?.addEventListener('click', openDrawer);
    drawerCloseBtn?.addEventListener('click', closeDrawer);
    drawerOverlay?.addEventListener('click', closeDrawer);

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navDrawer?.classList.contains('active')) {
            closeDrawer();
        }
    });

    // Close drawer when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
        });
    });

    // Highlight current active page link based on current pathname
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        
        if (currentPath === '/' || currentPath.endsWith('index.html')) {
            if (href === '/' || href === 'index.html' || href === '../index.html') {
                link.classList.add('active');
            }
        } else if (href !== '/' && currentPath.includes(href.replace('../pages/', '').replace('./pages/', '').replace('pages/', ''))) {
            link.classList.add('active');
        }
    });
};
