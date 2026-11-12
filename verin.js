
const accessButton = document.getElementById("access-button");
const systemLog = document.querySelector(".system-log");
const systemStatus = document.querySelector(".system-status");

accessButton.addEventListener("click", async () => {

    accessButton.disabled = true;
    accessButton.textContent = "ACCESO DENEGADO";

    const addMessage = (message, warning = false) => {
        const line = document.createElement("p");
        line.textContent = "> " + message;

        if (warning) line.classList.add("warning");

        systemLog.appendChild(line);
        return line;
    };

    const wait = (ms) =>
        new Promise(resolve => setTimeout(resolve, ms));

    // PRIMER RECHAZO
    addMessage("Solicitud de acceso rechazada.", true);

    await wait(1200);

    // CUENTA REGRESIVA
    for (let seconds = 5; seconds > 0; seconds--) {
        accessButton.textContent = `REINTENTO EN ${seconds}...`;
        await wait(1000);
    }

    // AUTORIZACIÓN
    systemStatus.innerHTML = '<i></i> EN LÍNEA';

    addMessage("Nueva verificación iniciada...");
    await wait(1000);

    addMessage("Identidad reconocida.");
    await wait(900);

    addMessage("Acceso autorizado.");

    accessButton.textContent = "ACCESO CONCEDIDO";

    // MENSAJE DE VERIN
    await wait(1200);

    const greeting = document.createElement("p");

    greeting.textContent =
        "VERIN: Pensé que no volverías.";

    greeting.style.color = "#D2B66F";
    greeting.style.marginTop = "20px";

    systemLog.appendChild(greeting);

    await wait(1800);

    const warning = document.createElement("p");

    warning.textContent =
        "VERIN: Actualmente alguien está hackeando mi sistema... pero hola de nuevo.";

    warning.style.color = "#48D8D0";
    warning.style.marginTop = "12px";

    systemLog.appendChild(warning);

    // REINICIO
    await wait(4500);

    document.body.style.transition = "opacity 1.5s";
    document.body.style.opacity = "0";

    await wait(1600);

    location.reload();

});
