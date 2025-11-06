export default class Cl_vFamilia {
    constructor() {
        this.controlador = null;
        // IDs corregidos para coincidir con el HTML
        this.inNombre = document.getElementById("familiaForm_inNombre");
        this.inCantAdulto = document.getElementById("familiaForm_inCantAdulto");
        this.inCantNino = document.getElementById("familiaForm_inCantNino" // ID faltante en el original
        );
        this.btProcesar = document.getElementById("familiaForm_btProcesar");
        if (!this.inNombre ||
            !this.inCantAdulto ||
            !this.inCantNino ||
            !this.btProcesar) {
            throw new Error("Elementos del DOM no encontrados");
        }
        // Listener de evento de click para el botón Procesar (Corregido)
        this.btProcesar.onclick = () => {
            if (!this.controlador)
                throw new Error("No hay controlador");
            this.controlador.procesarFamilia();
        };
    }
    // Getters de valores (correctos)
    get nombre() {
        if (!this.inNombre)
            throw new Error("Elemento inNombre no encontrado");
        return this.inNombre.value;
    }
    get cantAdulto() {
        if (!this.inCantAdulto)
            throw new Error("Elemento inCantAdulto no encontrado");
        return +this.inCantAdulto.value; // El operador + convierte a número
    }
    get cantNino() {
        if (!this.inCantNino)
            throw new Error("Elemento inCantNino no encontrado");
        return +this.inCantNino.value; // El operador + convierte a número
    }
    /**
     * Reinicia los campos del formulario.
     */
    limpiar() {
        this.inNombre.value = "";
        this.inCantAdulto.value = "";
        this.inCantNino.value = "";
    }
}
