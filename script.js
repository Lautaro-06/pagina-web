// script.js - Funcionalidades interactivas para la página
console.log('JavaScript cargando correctamente');

// Función para esperar a que elementos del DOM estén listos
function waitForElement(selector, callback, maxWait = 5000) {
    const startTime = Date.now();
    
    function checkElement() {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
        } else if (Date.now() - startTime < maxWait) {
            setTimeout(checkElement, 100);
        }
    }
    checkElement();
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando funcionalidades JavaScript...');
    initScrollEffect();
    createInteractiveButton();
    initFormValidation();
});