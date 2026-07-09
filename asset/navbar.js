/* ==========================================
   COMPONENT LOADER - JavaScript
   File: assets/js/components.js
   ========================================== */

/**
 * Load HTML component ke dalam elemen target
 * @param {string} componentPath - Path ke file komponen HTML
 * @param {string} targetId - ID elemen target tempat komponen akan dimuat
 * @param {function} callback - Fungsi callback setelah komponen dimuat (opsional)
 */
function loadComponent(componentPath, targetId, callback) {
    const target = document.getElementById(targetId);
    if (!target) {
        console.error(`Target element with ID "${targetId}" not found.`);
        return;
    }

    fetch(componentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            target.innerHTML = html;
            
            // Set active link berdasarkan halaman saat ini
            setActiveNavLink();
            
            if (callback && typeof callback === 'function') {
                callback();
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
            target.innerHTML = `<p style="color:red;">Error loading component: ${error.message}</p>`;
        });
}

/**
 * Set active class pada nav link berdasarkan URL saat ini
 */
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');
        if (!href) return;

        // halaman yang sam
        if (currentPath === href || currentPath.endsWith(href)) {
            link.classList.add('active');
        }

        // semua halaman dalam folder /tour/
        if (
            currentPath.includes('/tour/') &&
            href.includes('/tour/tour.html')
        ) {
            link.classList.add('active');
        }

        // semua halaman destination
        if (
            currentPath.includes('/destination/') &&
            href.includes('/destination/destination.html')
        ) {
            link.classList.add('active');
        }

        // semua halaman guide
        if (
            currentPath.includes('/guide/') &&
            href.includes('/guide/guide.html')
        ) {
            link.classList.add('active');
        }

        // semua halaman faq
        if (
            currentPath.includes('/faq/') &&
            href.includes('/faq/faq.html')
        ) {
            link.classList.add('active');
        }
    });
}

/**
 * Load semua komponen di halaman
 * Komponen ditandai dengan atribut data-component
 */
function loadAllComponents() {
    const components = document.querySelectorAll('[data-component]');
    
    components.forEach(element => {
        const componentPath = element.getAttribute('data-component');
        loadComponent(componentPath, element.id);
    });
}

// Auto-load komponen saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    loadAllComponents();
});