export default class Cl_vEstudiante {
    constructor() {
        this.controlador = null;
        this.inCedula = document.getElementById("inCedula");
        this.inNombre = document.getElementById("inNombre");
        this.inMes = document.getElementById("inMes");
        this.inNivel = document.getElementById("inNivel");
        this.btProcesar = document.getElementById("btProcesar");
        if (!this.inCedula || !this.inNombre || !this.inMes || !this.inNivel || !this.btProcesar)
            throw new Error("elemento del Dom no encontrado");
        this.btProcesar.onclick = () => {
            if (!this.controlador)
                throw new Error("no hay controlador");
            this.controlador.ProcesarEstudiante();
        };
    }
    ;
    get Cedula() {
        if (!this.inCedula)
            throw new Error("elemento inCedula no encontrado");
        return this.inCedula.value;
    }
    ;
    get Nombre() {
        if (!this.inNombre)
            throw new Error("elemento inNombre no encontrado");
        return this.inNombre.value;
    }
    ;
    get Mes() {
        if (!this.inMes)
            throw new Error("elemento inMes no encontrado");
        return +this.inMes.value;
    }
    ;
    get Nivel() {
        if (!this.inNivel)
            throw new Error("elemento inNivel no encontrado");
        return +this.inNivel.value;
    }
    ;
}
