function closeConsultationOverlay() {
    const overlay = document.getElementById('consultationOverlay');
    if (overlay) overlay.classList.remove('show');
}

function showConsultationPopup() {
    let overlay = document.getElementById('consultationOverlay');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'consultationOverlay';
        overlay.className = 'consultation-overlay';
        overlay.innerHTML = `
            <div class="consultation-modal">
                <div class="consultation-check">✓</div>
                <h3>Consultation Request Sent!</h3>
                <p>Thank you for your interest. Our tour guide will contact you within 24 hours to schedule your consultation.</p>
                <button type="button" class="consultation-close-btn">Close</button>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.querySelector('.consultation-close-btn').addEventListener('click', closeConsultationOverlay);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeConsultationOverlay();
        });
    }

    overlay.classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach((btn) => {
        if (btn.textContent.trim().includes('Schedule a Consultation')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                showConsultationPopup();
            });
        }
    });
});
