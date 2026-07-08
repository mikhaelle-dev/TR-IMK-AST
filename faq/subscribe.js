function isGmailEmail(email) {
    return /^[^\s@]+@gmail\.com$/i.test(email.trim());
}

function closeOverlay(id) {
    document.getElementById(id).classList.remove('show');
}

let toastTimer;
function showToast(msg) {
    const toast = document.getElementById('subscribeToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function showEmailError(input, errorEl, message) {
    input.classList.add('email-error');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('show');
    }
}

function clearEmailError(input, errorEl) {
    input.classList.remove('email-error');
    if (errorEl) {
        errorEl.classList.remove('show');
    }
}

function validateGmailInput(input, errorEl) {
    const email = input.value.trim();

    if (!email) {
        showEmailError(input, errorEl, 'Email is required');
        showToast('Email is required');
        input.focus();
        return false;
    }

    if (!isGmailEmail(email)) {
        showEmailError(input, errorEl, 'Email must use @gmail.com');
        showToast('Email must use @gmail.com');
        input.focus();
        return false;
    }

    clearEmailError(input, errorEl);
    return true;
}

function showSuccessPopup(title, message) {
    const overlay = document.getElementById('successOverlay');
    if (!overlay) return;
    const titleEl = overlay.querySelector('[data-popup-title]');
    const messageEl = overlay.querySelector('[data-popup-message]');
    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;
    overlay.classList.add('show');
}

function showSubscribeSuccess() {
    showSuccessPopup(
        'Subscription Successful!',
        'Thank you for joining the Artemis explorer community. Travel updates and inspiration will be sent to your Gmail.'
    );
}

function setupSubscribeForm(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button');
    const errorEl = form.querySelector('.email-error-msg');

    if (!emailInput || !submitBtn) return;

    emailInput.addEventListener('input', () => clearEmailError(emailInput, errorEl));

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!validateGmailInput(emailInput, errorEl)) return;
        showSubscribeSuccess();
        emailInput.value = '';
    });
}

function setupContactForm(formSelector, submitBtnSelector) {
    const form = document.querySelector(formSelector);
    const submitBtn = document.querySelector(submitBtnSelector);
    if (!form || !submitBtn) return;

    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
    const errorEl = form.querySelector('.email-error-msg');

    if (!emailInput) return;

    emailInput.addEventListener('input', () => clearEmailError(emailInput, errorEl));

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!validateGmailInput(emailInput, errorEl)) return;

        if (messageInput && !messageInput.value.trim()) {
            showToast('Please enter your message');
            messageInput.focus();
            return;
        }

        showSuccessPopup(
            'Thank You for Your Message!',
            'We have received your message. Our team will get back to you within 24 hours.'
        );
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupSubscribeForm('#subscribeForm');

    const successOverlay = document.getElementById('successOverlay');
    if (successOverlay) {
        successOverlay.addEventListener('click', (e) => {
            if (e.target === successOverlay) closeOverlay('successOverlay');
        });
    }

    setupContactForm('#contactForm', '#sendMessageBtn');
});
