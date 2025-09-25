// ==UserScript==
// @name         ek.ua Toggle Dark Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Автоматически переключает темную тему без обновления страницы
// @match        https://ek.ua/*
// @updateURL    https://raw.githubusercontent.com/nelolka/ek_dark_theme_toggle/refs/heads/main/ek_script.js
// @downloadURL  https://raw.githubusercontent.com/nelolka/ek_dark_theme_toggle/refs/heads/main/ek_script.js
// @homepageURL  https://github.com/nelolka/ek_dark_theme_toggle/
// @supportURL   https://github.com/nelolka/ek_dark_theme_toggle/issues/
// @source       https://github.com/nelolka/ek_dark_theme_toggle/
// @run-at       document-start
// ==/UserScript==

(function() {
    function applyTheme(e) {
        document.documentElement.classList.toggle('dark-mode', e.matches);
        links.forEach(link => link.disabled = !e.matches);
    }
    const links = document.querySelectorAll('link[rel="stylesheet"][href*="dark"]');
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(mq);

    mq.addEventListener("change", applyTheme);
})();
