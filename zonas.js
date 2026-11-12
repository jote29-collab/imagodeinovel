
const sectores = {
    symmetria: {
        codigo: "SECTOR A // CLASIFICACIÓN 01",
        titulo: "SYMMETRIA",
        descripcion: "Centro administrativo y tecnológico de la civilización. La estabilidad social constituye el principal indicador de desarrollo.",
        datos: [
            ["ESTABILIDAD SOCIAL", "99,98%"],
            ["INTEGRIDAD DEL SISTEMA", "100%"],
            ["TRANSPORTE", "RED MAGNÉTICA ACTIVA"],
            ["SUPERVISIÓN", "CONTINUA"],
            ["ESTADO GENERAL", "ESTABLE"]
        ],
        mensaje: "VERIN: Symmetria representa el equilibrio alcanzado por nuestra civilización. No existe necesidad de modificar un sistema que funciona."
    },

    barro: {
        codigo: "SECTOR EXTERIOR // CLASIFICACIÓN 04",
        titulo: "EL BARRO",
        descripcion: "Periferia industrial y residencial. El sector mantiene una actividad productiva esencial para el funcionamiento de Symmetria.",
        datos: [
            ["ACTIVIDAD INDUSTRIAL", "OPERATIVA"],
            ["INFRAESTRUCTURA", "DEGRADADA"],
            ["SUPERVISIÓN", "REFORZADA"],
            ["INCIDENCIAS", "EN OBSERVACIÓN"],
            ["ESTADO GENERAL", "CONTROLADO"]
        ],
        mensaje: "VERIN: Las diferencias entre sectores responden a necesidades de distribución. No deben interpretarse como desigualdades."
    }
};

const detailPanel = document.getElementById("sector-details");

document.querySelectorAll(".consult-button").forEach(button => {
    button.addEventListener("click", () => {
        const sector = sectores[button.dataset.sector];

        document.getElementById("detail-code").textContent = sector.codigo;
        document.getElementById("detail-title").textContent = sector.titulo;
        document.getElementById("detail-description").textContent = sector.descripcion;
        document.getElementById("verin-message").textContent = sector.mensaje;

        const dataContainer = document.getElementById("detail-data");
        dataContainer.innerHTML = "";

        sector.datos.forEach(([label, value]) => {
            const item = document.createElement("div");
            item.className = "detail-item";

            const name = document.createElement("span");
            name.textContent = label;

            const result = document.createElement("strong");
            result.textContent = value;

            item.append(name, result);
            dataContainer.appendChild(item);
        });

        detailPanel.hidden = false;
        detailPanel.scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("close-details").addEventListener("click", () => {
    detailPanel.hidden = true;
});