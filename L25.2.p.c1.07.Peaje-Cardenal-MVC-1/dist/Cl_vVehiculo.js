export default class Cl_vVehiculo {
    constructor() {
        this.controlador = null;
        this.inPlaca = document.getElementById("vehiculoForm_inPlaca");
        this.inTipo = document.getElementById("vehiculoForm_inTipo");
        this.btProcesar = document.getElementById("vehiculoForm_btProcesar");
        // Validar que los elementos existen
        if (!this.inPlaca || !this.inTipo || !this.btProcesar)
            throw new Error("Elementos del DOM no encontrados");
        this.btProcesar.onclick = () => {
            if (!this.controlador)
                throw new Error("No hay controlador");
            this.controlador.procesarVehiculo();
        };
    }
    get placa() {
        if (!this.inPlaca)
            throw new Error("Elemento inPlaca no encontrado");
        return this.inPlaca.value;
    }
    get tipo() {
        if (!this.inTipo)
            throw new Error("Elemento inTipo no encontrado");
        return +this.inTipo.value;
    }
}
