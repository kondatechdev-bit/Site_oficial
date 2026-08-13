/**
 * Konda Tech Main Bootstrap Script
 */
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initProjects } from './projects.js';
import { initServices } from './services.js';
import { initForms } from './forms.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initAnimations();
    initProjects();
    initServices();
    initForms();
});
