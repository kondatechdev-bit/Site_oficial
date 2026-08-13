/**
 * Pure JS Form Validation & Interactive Feedback
 */
import { showToast } from './utils.js';

export const initForms = () => {
    initContactForm();
    initSupportForm();
    initReferralBox();
};

const initContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const messageInput = document.getElementById('contact-message');

        // Clear error states
        contactForm.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('error'));

        // Validate Name
        if (!nameInput?.value.trim()) {
            showFieldError(nameInput, 'Por favor, informe seu nome completo.');
            isValid = false;
        }

        // Validate Email
        if (!emailInput?.value.trim() || !validateEmail(emailInput.value)) {
            showFieldError(emailInput, 'Por favor, insira um e-mail válido.');
            isValid = false;
        }

        // Validate Message
        if (!messageInput?.value.trim() || messageInput.value.trim().length < 10) {
            showFieldError(messageInput, 'Sua mensagem deve conter no mínimo 10 caracteres.');
            isValid = false;
        }

        if (isValid) {
            const btn = contactForm.querySelector('button[type="submit"]');
            if (btn) btn.disabled = true;

            showToast('Enviando mensagem para a equipe Konda Tech...', 'info');

            setTimeout(() => {
                showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success', 5000);
                contactForm.reset();
                if (btn) btn.disabled = false;
            }, 1200);
        }
    });
};

const initSupportForm = () => {
    const supportForm = document.getElementById('support-form');
    if (!supportForm) return;

    supportForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const emailInput = document.getElementById('support-email');
        const issueInput = document.getElementById('support-issue');

        if (!emailInput?.value.trim() || !validateEmail(emailInput.value)) {
            showFieldError(emailInput, 'Insira um e-mail válido para contato.');
            isValid = false;
        }

        if (!issueInput?.value.trim()) {
            showFieldError(issueInput, 'Descreva o problema ou dúvida.');
            isValid = false;
        }

        if (isValid) {
            showToast('Ticket de suporte registrado com sucesso! Protocolo enviado.', 'success');
            supportForm.reset();
        }
    });
};

const initReferralBox = () => {
    const generateBtn = document.getElementById('generate-ref-btn');
    const refCodeInput = document.getElementById('ref-code-input');
    const copyRefBtn = document.getElementById('copy-ref-btn');

    if (generateBtn && refCodeInput) {
        generateBtn.addEventListener('click', () => {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let code = 'KONDA-';
            for (let i = 0; i < 6; i++) {
                code += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            refCodeInput.value = `https://kondatech.dev/invite?ref=${code}`;
            showToast('Seu link único de indicação foi gerado!', 'success');
        });
    }

    if (copyRefBtn && refCodeInput) {
        copyRefBtn.addEventListener('click', () => {
            if (!refCodeInput.value) {
                showToast('Gere seu link primeiro!', 'error');
                return;
            }
            navigator.clipboard.writeText(refCodeInput.value);
            showToast('Link de indicação copiado!', 'success');
        });
    }
};

const showFieldError = (inputEl, message) => {
    if (!inputEl) return;
    const parent = inputEl.closest('.form-group');
    if (parent) {
        parent.classList.add('error');
        const errEl = parent.querySelector('.form-error');
        if (errEl) errEl.textContent = message;
    }
};

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
