/* ==========================================
   BACK BUTTON COMPONENT - JavaScript
   ========================================== */

// ---------- STATE ----------
let toastTimer = null;

// ---------- FUNCTIONS ----------

/**
 * Menampilkan toast notification
 * @param {string} msg - Pesan yang akan ditampilkan
 */
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = msg;
    toast.classList.add('show');

    if (toastTimer) {
        clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

/**
 * Handler untuk klik tombol back
 * Default: menampilkan toast + kembali ke halaman sebelumnya
 */
function handleBackClick() {
    showToast('Kembali ke halaman sebelumnya');

    // Opsi 1: Kembali ke halaman sebelumnya (history.back)
    // history.back();

    // Opsi 2: Redirect ke halaman tertentu
    // window.location.href = '/home/index.html';

    // Opsi 3: Custom action
    // console.log('Back button clicked');
}

// ---------- INISIALISASI ----------
document.addEventListener('DOMContentLoaded', function () {
    // Pastikan elemen toast ada
    if (!document.getElementById('toast')) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
});