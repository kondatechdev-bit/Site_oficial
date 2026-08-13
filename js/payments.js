/**
 * Konda Tech Payments & Support Module
 */
import { paymentsData } from '../data/payments.js';

export function initPayments() {
    const container = document.getElementById('payments-grid');
    if (!container) return;

    let currentCategory = 'all';
    let searchQuery = '';

    const filterTabsContainer = document.getElementById('payment-filters');
    const searchInput = document.getElementById('payment-search-input');

    // Create Toast Container if not exists
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    // Show Toast Notification
    window.showToast = (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6 9 17l-5-5"/>
            </svg>
            <span>${message}</span>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };

    // Copy to clipboard helper
    window.copyTextToClipboard = (text, label) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                window.showToast(`${label || 'Informação'} copiado(a) para a área de transferência!`);
            }).catch(() => {
                fallbackCopy(text, label);
            });
        } else {
            fallbackCopy(text, label);
        }
    };

    function fallbackCopy(text, label) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            window.showToast(`${label || 'Informação'} copiado(a)!`);
        } catch (err) {
            window.showToast('Erro ao copiar dados', 'error');
        }
        document.body.removeChild(textarea);
    }

    // Render Filters
    if (filterTabsContainer) {
        const categories = [
            { id: 'all', label: 'Todos os Canais' },
            { id: 'bancos', label: 'IBANs Bancários (Angola)' },
            { id: 'express', label: 'Multicaixa & Mobile Money' },
            { id: 'digital', label: 'Carteiras Digitais & Cripto' }
        ];

        filterTabsContainer.innerHTML = categories.map(c => `
            <button class="filter-tab ${c.id === 'all' ? 'active' : ''}" data-category="${c.id}">
                ${c.label}
            </button>
        `).join('');

        filterTabsContainer.querySelectorAll('.filter-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                filterTabsContainer.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.getAttribute('data-category');
                renderPayments();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderPayments();
        });
    }

    function renderPayments() {
        const filtered = paymentsData.filter(item => {
            const matchesCat = currentCategory === 'all' || item.category === currentCategory;
            const matchesSearch = !searchQuery || 
                item.title.toLowerCase().includes(searchQuery) ||
                item.type.toLowerCase().includes(searchQuery) ||
                item.details.some(d => d.value.toLowerCase().includes(searchQuery));
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <h3>Nenhum canal de pagamento encontrado</h3>
                    <p style="color: var(--color-text-muted); font-size: var(--fs-sm); margin-top: 0.5rem;">
                        Tente pesquisar por outro banco, IBAN ou método de apoio.
                    </p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(p => `
            <article class="card payment-card reveal">
                <div class="payment-card-header">
                    <div class="payment-logo-box">
                        <img src="${p.logo}" alt="${p.title}" class="payment-logo" onerror="this.outerHTML='<div class=\\'payment-logo-fallback\\'>${p.title.substring(0, 3)}</div>'" />
                    </div>
                    <div>
                        <span class="status-pill ready" style="margin-bottom: 0.25rem;">
                            <span class="status-dot"></span> ${p.badge}
                        </span>
                        <h3 style="font-size: var(--fs-base); margin-top: 0.25rem;">${p.title}</h3>
                        <span style="font-size: var(--fs-xs); color: var(--color-text-dim);">${p.type}</span>
                    </div>
                </div>

                <p style="font-size: var(--fs-xs); color: var(--color-text-muted); margin-bottom: 1.25rem; line-height: 1.5;">
                    ${p.instructions}
                </p>

                <div class="payment-details-list">
                    ${p.details.map(d => `
                        <div class="payment-detail-item">
                            <div class="payment-detail-info">
                                <span class="payment-detail-label">${d.label}</span>
                                <strong class="payment-detail-value">${d.value}</strong>
                            </div>
                            <button class="btn btn-sm btn-secondary copy-btn" 
                                    onclick="window.copyTextToClipboard('${d.copyValue}', '${d.label}')"
                                    aria-label="Copiar ${d.label}">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                                </svg>
                                Copiar
                            </button>
                        </div>
                    `).join('')}
                </div>

                <div class="payment-card-footer">
                    <span style="font-size: 0.75rem; color: var(--color-text-dim);">
                        Titular: <strong style="color: var(--color-text-main);">${p.accountName}</strong>
                    </span>
                </div>
            </article>
        `).join('');
    }

    renderPayments();

    // Support Form Handler
    const notifyForm = document.getElementById('notify-receipt-form');
    if (notifyForm) {
        notifyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const refInput = document.getElementById('receipt-ref');
            const nameInput = document.getElementById('receipt-name');
            const emailInput = document.getElementById('receipt-email');

            if (refInput && nameInput) {
                window.showToast('Comprovativo registado! Muito obrigado pelo seu apoio à Konda Tech.');
                notifyForm.reset();
            }
        });
    }
}
