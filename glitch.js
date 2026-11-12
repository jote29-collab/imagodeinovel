// Fallas ocasionales del sistema: VERIN sigue diciendo que todo esta bien.
(function () {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const valores = document.querySelectorAll(".indicator strong");
    const punto = document.querySelector(".status-dot");
    if (valores.length < 3) return;

    const fallas = [
        () => glitchTexto(valores[0], "61,07%"),
        () => glitchTexto(valores[1], "9█,█%"),
        () => glitchTexto(valores[2], "NO REGISTRADO"),
        () => glitchPunto()
    ];

    function glitchTexto(el, falso) {
        const original = el.textContent;
        el.textContent = falso;
        el.classList.add("glitch");
        setTimeout(() => {
            el.textContent = original;
            el.classList.remove("glitch");
        }, 700);
    }

    function glitchPunto() {
        if (!punto) return;
        punto.classList.add("glitch-dot");
        setTimeout(() => punto.classList.remove("glitch-dot"), 1400);
    }

    function siguiente(min, max) {
        setTimeout(() => {
            fallas[Math.floor(Math.random() * fallas.length)]();
            siguiente(14000, 28000);
        }, min + Math.random() * (max - min));
    }

    siguiente(6000, 10000);
})();
