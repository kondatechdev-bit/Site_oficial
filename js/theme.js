/**
 * Theme toggle system (Dark / Light Mode)
 */
import { getIcon } from './utils.js';

export const initTheme = () => {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    
    // Detect stored preference or system default
    const savedTheme = localStorage.getItem('konda-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'dark'); // Default to dark for tech vibe
    
    setTheme(initialTheme);
    
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    });
};

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('konda-theme', theme);
    
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
        if (theme === 'dark') {
            btn.innerHTML = getIcon('sun', 18);
            btn.setAttribute('aria-label', 'Mudar para Modo Claro');
            btn.setAttribute('title', 'Modo Claro');
        } else {
            btn.innerHTML = getIcon('moon', 18);
            btn.setAttribute('aria-label', 'Mudar para Modo Escuro');
            btn.setAttribute('title', 'Modo Escuro');
        }
    });
};
