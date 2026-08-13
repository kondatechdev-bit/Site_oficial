/**
 * Services Renderer & Interactive Estimate Preview Widget
 */
import { servicesData } from '../data/services.js';
import { getIcon } from './utils.js';

export const initServices = () => {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    renderServices(servicesData);
    initEstimateCalculator();
};

const renderServices = (services) => {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = services.map(s => `
        <article class="card service-card reveal">
            <div class="service-icon">
                ${getIcon(s.icon, 28)}
            </div>
            <span class="badge badge-primary" style="align-self:flex-start; margin-bottom:0.75rem;">
                ${s.category}
            </span>
            <h3 style="font-size: var(--fs-lg); margin-bottom:0.75rem;">${s.title}</h3>
            <p style="font-size: var(--fs-sm); margin-bottom:1.25rem;">${s.description}</p>
            
            <div class="service-list">
                ${s.items.map(item => `
                    <div class="service-item">
                        <span style="color: var(--color-accent);">${getIcon('check', 16)}</span>
                        <span>${item}</span>
                    </div>
                `).join('')}
            </div>

            <div style="margin-top:auto; padding-top:1.25rem; border-top:1px solid var(--color-border); display:flex; align-items:center; justify-content:space-between;">
                <div>
                    <div style="font-size:var(--fs-xs); color:var(--color-text-dim);">Entregáveis:</div>
                    <div style="font-size:0.75rem; color:var(--color-text-muted);">${s.deliverables}</div>
                </div>
                <a href="../pages/contato.html" class="btn btn-sm btn-secondary">
                    Solicitar
                </a>
            </div>
        </article>
    `).join('');
};

const initEstimateCalculator = () => {
    const calcContainer = document.getElementById('estimate-calculator');
    if (!calcContainer) return;

    calcContainer.innerHTML = `
        <div class="card" style="background: linear-gradient(135deg, var(--color-surface), var(--color-bg-secondary)); border: 1px solid var(--color-border-hover); padding: 2.5rem;">
            <div style="text-align:center; margin-bottom: 2rem;">
                <span class="section-tag">${getIcon('bar-chart-3', 14)} Simulador de Projetos</span>
                <h2>Calculadora Interativa de Estimativa</h2>
                <p>Selecione os módulos do seu projeto para obter uma estimativa inicial de prazo e complexidade.</p>
            </div>

            <div class="grid-2" style="margin-bottom: 2rem;">
                <div>
                    <label class="form-label" style="margin-bottom:0.5rem; display:block;">Tipo de Aplicação:</label>
                    <select id="calc-type" class="form-control">
                        <option value="web" data-days="15">Site Institucional / Landing Page</option>
                        <option value="app-mobile" data-days="30">Aplicativo Mobile (Android / iOS)</option>
                        <option value="web-system" data-days="45">Sistema Web / Dashboard ERP</option>
                        <option value="desktop" data-days="40">Software Desktop Corporativo</option>
                        <option value="game" data-days="60">Jogo 2D / 3D Voxel</option>
                    </select>
                </div>

                <div>
                    <label class="form-label" style="margin-bottom:0.5rem; display:block;">Módulos Adicionais:</label>
                    <div style="display:flex; flex-direction:column; gap:0.5rem;">
                        <label style="display:flex; align-items:center; gap:0.5rem; font-size:var(--fs-sm); cursor:pointer;">
                            <input type="checkbox" class="calc-addon" data-days="10" checked /> Autenticação & Gestão de Usuários
                        </label>
                        <label style="display:flex; align-items:center; gap:0.5rem; font-size:var(--fs-sm); cursor:pointer;">
                            <input type="checkbox" class="calc-addon" data-days="15" checked /> Integração com SILVIA IA / Automação
                        </label>
                        <label style="display:flex; align-items:center; gap:0.5rem; font-size:var(--fs-sm); cursor:pointer;">
                            <input type="checkbox" class="calc-addon" data-days="12" /> Pagamentos & Monetização Konda ADs
                        </label>
                    </div>
                </div>
            </div>

            <div style="background-color: var(--color-bg-primary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <div style="font-size: var(--fs-xs); color: var(--color-text-dim);">Prazo Médio Estimado:</div>
                    <div id="calc-result" style="font-size: var(--fs-xl); font-weight: 800; color: var(--color-accent); font-family: var(--font-mono);">
                        -- dias
                    </div>
                </div>
                <a href="../pages/contato.html" class="btn btn-primary">
                    Enviar este Escopo para Orçamento ${getIcon('arrow-right', 16)}
                </a>
            </div>
        </div>
    `;

    const updateCalc = () => {
        const typeSelect = document.getElementById('calc-type');
        const addons = document.querySelectorAll('.calc-addon');
        const resultEl = document.getElementById('calc-result');

        if (!typeSelect || !resultEl) return;

        let totalDays = parseInt(typeSelect.options[typeSelect.selectedIndex].getAttribute('data-days') || '15', 10);

        addons.forEach(chk => {
            if (chk.checked) {
                totalDays += parseInt(chk.getAttribute('data-days') || '0', 10);
            }
        });

        resultEl.textContent = `Aproximadamente ${totalDays} dias úteis`;
    };

    document.getElementById('calc-type')?.addEventListener('change', updateCalc);
    document.querySelectorAll('.calc-addon').forEach(chk => chk.addEventListener('change', updateCalc));

    updateCalc();
};
