import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vEstudiante {
    public controlador: Cl_controlador | null = null;
    private inCedula: HTMLInputElement;
    private inNombre: HTMLInputElement;
    private inMes: HTMLInputElement;
    private inNivel: HTMLInputElement;
    private btProcesar: HTMLElement;

    constructor() {
     this.inCedula = document.getElementById("inCedula") as HTMLInputElement;
     this.inNombre = document.getElementById("inNombre") as HTMLInputElement;
     this.inMes = document.getElementById("inMes") as HTMLInputElement;
     this.inNivel = document.getElementById("inNivel") as HTMLInputElement;
     this.btProcesar = document.getElementById("btProcesar") as HTMLElement;

     if (!this.inCedula || !this.inNombre || !this.inMes || !this.inNivel || !this.btProcesar) 
            throw new Error ("elemento del Dom no encontrado");
        this.btProcesar.onclick = ()=> {
         if (!this.controlador) throw new Error("no hay controlador");
         this.controlador.ProcesarEstudiante();
         };
        
    };
    get Cedula(): string {
        if (!this.inCedula) throw new Error("elemento inCedula no encontrado");
        return this.inCedula.value;
    };
    get Nombre(): string {
        if (!this.inNombre) throw new Error("elemento inNombre no encontrado");
        return this.inNombre.value;
    };
    get Mes(): number {
        if (!this.inMes) throw new Error("elemento inMes no encontrado");
        return +this.inMes.value;
    };
    get Nivel(): number {
        if (!this.inNivel) throw new Error("elemento inNivel no encontrado");
        return +this.inNivel.value;
    };
}    
        
            
            
        
        
    