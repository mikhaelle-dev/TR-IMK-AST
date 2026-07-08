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
        // Hapus class active dari semua link
        link.classList.remove('active');
        
        // Ambil href dari link
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Bandingkan dengan path saat ini
        // Cek apakah href cocok dengan currentPath
        if (currentPath.endsWith(href) || 
            currentPath === href || 
            currentPath === '/' + href) {
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