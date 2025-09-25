// ==UserScript==
// @name         ek.ua Toggle Dark Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Автоматически переключает темную тему без обновления страницы
// @match        https://ek.ua/*
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
