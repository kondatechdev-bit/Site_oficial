/**
 * Dynamic Projects Renderer & Detail Modal
 */
import { projectsData } from '../data/projects.js';
import { getIcon } from './utils.js';

export const initProjects = () => {
    const projectsGrid = document.getElementById('projects-grid');
    const filterContainer = document.getElementById('project-filters');

    if (!projectsGrid) return;

    // Render Filters
    if (filterContainer) {
        const categories = ['Todos', ...new Set(projectsData.map(p => p.category))];
        filterContainer.innerHTML = categories.map((cat, idx) => `
            <button class="tab-btn ${idx === 0 ? 'active' : ''}" data-category="${cat}">
                ${cat}
            </button>
        `).join('');

        filterContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (!btn) return;

            filterContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedCat = btn.getAttribute('data-category');
            renderProjects(selectedCat);
        });
    }

    renderProjects('Todos');
};

const renderProjects = (category = 'Todos') => {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    const filtered = category === 'Todos'
        ? projectsData
        : projectsData.filter(p => p.category === category);

    projectsGrid.innerHTML = filtered.map(p => `
        <article class="card project-card reveal active">
            <div>
                <div class="project-header">
                    <div class="project-icon">
                        ${getIcon(p.icon, 24)}
                    </div>
                    <span class="status-pill ${p.statusType}">
                        <span class="status-dot"></span>
                        ${p.status}
                    </span>
                </div>
                <h3 class="project-title">${p.name}</h3>
                <div class="project-subtitle">${p.subtitle}</div>
                <p class="project-desc">${p.description}</p>
                
                <div class="project-techs">
                    ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>

            <div class="project-footer">
                <div class="project-timeline">
                    ${getIcon('clock', 14)} ${p.timeline}
                </div>
                <button class="btn btn-sm btn-outline view-project-btn" data-id="${p.id}">
                    ${p.ctaText} ${getIcon('arrow-right', 14)}
                </button>
            </div>
        </article>
    `).join('');

    // Attach click handlers for detail modal
    projectsGrid.querySelectorAll('.view-project-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-id');
            const project = projectsData.find(p => p.id === projectId);
            if (project) openProjectModal(project);
        });
    });
};

const openProjectModal = (project) => {
    let modalOverlay = document.querySelector('.modal-overlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        document.body.appendChild(modalOverlay);
    }

    modalOverlay.innerHTML = `
        <div class="modal-container">
            <button class="modal-close-btn" aria-label="Fechar modal">
                ${getIcon('x', 18)}
            </button>
            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
                <div class="project-icon" style="width:56px; height:56px;">
                    ${getIcon(project.icon, 28)}
                </div>
                <div>
                    <span class="badge badge-accent">${project.badge}</span>
                    <h2 style="font-size: var(--fs-xl); margin-top:0.25rem;">${project.name}</h2>
                </div>
            </div>
            
            <p style="color: var(--color-accent); font-weight:600; margin-bottom:1rem;">
                ${project.subtitle}
            </p>
            
            <p style="margin-bottom:1.5rem; line-height:1.7;">
                ${project.longDescription}
            </p>

            <h4 style="margin-bottom:0.75rem;">Destaques Principais:</h4>
            <ul style="margin-bottom:1.5rem; display:flex; flex-direction:column; gap:0.5rem;">
                ${project.highlights.map(h => `
                    <li style="display:flex; align-items:center; gap:0.5rem; font-size: var(--fs-sm); color: var(--color-text-muted);">
                        <span style="color: var(--color-emerald);">${getIcon('check', 16)}</span> ${h}
                    </li>
                `).join('')}
            </ul>

            <h4 style="margin-bottom:0.75rem;">Tecnologias Envolvidas:</h4>
            <div class="project-techs" style="margin-bottom:2rem;">
                ${project.technologies.map(t => `<span class="tech-tag" style="font-size:0.8rem; padding:0.3rem 0.6rem;">${t}</span>`).join('')}
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; padding-top:1rem; border-top:1px solid var(--color-border);">
                <span class="project-timeline" style="font-size:0.9rem;">
                    ${getIcon('clock', 16)} Prazo Estimado: ${project.timeline}
                </span>
                <button class="btn btn-primary modal-close-btn-cta">
                    Entendi, Fechar
                </button>
            </div>
        </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    modalOverlay.querySelector('.modal-close-btn')?.addEventListener('click', closeModal);
    modalOverlay.querySelector('.modal-close-btn-cta')?.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
};
