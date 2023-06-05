const IngresoBienvenida = () => {
    alert("Bienvenidos a cladiaskin");
    let solicitar = prompt("Desea solicitar un turno con cladiaskin? s/n");
    if (solicitar == "s") {
        guardarDatos();
    } else {
        console.log("Salio del if");
    }
};

const guardarDatos = () => {
    const nombre = prompt("ingrese su nombre");
    const edad = prompt("edad");
    tratamiento();
};

const tratamiento = () => {
    let tratamiento = prompt(
        "Tratamientos disponibles: Dermapiling / Lifting / Pestañas / Limpieza"
    );
    let fecha = prompt("Ingrese dia: Fecha *Solo numero*");

    if (
        tratamiento == "Dermapiling" ||
        tratamiento == "Lifting" ||
        tratamiento == "Limpieza" ||
        tratamiento == "Pestañas"
    ) {
        precio(tratamiento);
    }
};

const precio = (dato) => {
    const Dermapiling = 1500; // Dermapiling contiene su valor. Ya es un Entero
    const Lifting = 200;
    const Limpieza = 700;
    const Pestañas = 400;

    if (dato == "Dermapiling") {
        alert(Dermapiling); // a partir de aca empezas a trabajar el precio
    }
};
