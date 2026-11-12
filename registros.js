
const registros = [
    {
        fecha: "12.08.2023",
        titulo: "Consolidación de la Red de Cristal",
        imagen: "IMG/symmetria-torres.png",
        descripcion: "La integración de la infraestructura urbana alcanzó su fase de consolidación. La Red de Cristal cubre la totalidad del valle y garantiza la continuidad operativa del Sector A."
    },
    {
        fecha: "04.11.2023",
        titulo: "Expansión del Sector A",
        imagen: "IMG/symmetria-ventanal.png",
        descripcion: "La expansión residencial del Sector A alcanzó los niveles previstos. Las nuevas unidades habitacionales fueron integradas a la red central."
    },
    {
        fecha: "19.02.2024",
        titulo: "Observación del perímetro",
        imagen: "IMG/symmetria-nocturna.png",
        descripcion: "Se detectaron variaciones menores en los indicadores de actividad del perímetro industrial. El sistema mantiene la clasificación de estabilidad."
    },
    {
        fecha: "07.06.2024",
        titulo: "Actualización del corredor industrial",
        imagen: "IMG/el-barro.png",
        descripcion: "Las tareas de reorganización territorial continúan en el Sector B. La Agencia Central informa que no existen alteraciones relevantes."
    },
    {
        fecha: "21.09.2024",
        titulo: "Incidencia de registro",
        imagen: "IMG/symmetria-ventanal.png",
        descripcion: "Se ha detectado una inconsistencia entre dos registros históricos. La incidencia fue derivada al sistema central."
    },
    {
        fecha: "??.??.????",
        titulo: "ARCHIVO NO ENCONTRADO",
        imagen: "IMG/symmetria-nocturna.png",
        descripcion: "No existe información disponible para este registro."
    }
];

let registroActual = 0;

function mostrarRegistro() {
    const registro = registros[registroActual];

    document.querySelector(".city").style.backgroundImage =
        `linear-gradient(to top, rgba(0,0,0,.65), transparent 55%), url("${registro.imagen}")`;

    document.getElementById("recordNumber").textContent =
        `REGISTRO ${String(registroActual + 1).padStart(3, "0")} / 006`;

    document.querySelector(".date").textContent = registro.fecha;
    document.querySelector(".record h2").textContent = registro.titulo;
    document.querySelector(".record > p:not(.eyebrow):not(.date)").textContent =
        registro.descripcion;
}

document.getElementById("prevRecord").addEventListener("click", () => {
    registroActual = (registroActual - 1 + registros.length) % registros.length;
    mostrarRegistro();
});

document.getElementById("nextRecord").addEventListener("click", () => {
    registroActual = (registroActual + 1) % registros.length;
    mostrarRegistro();
});

mostrarRegistro();
