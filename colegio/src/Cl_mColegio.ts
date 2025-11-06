import Cl_mEstudiante from "./Cl_mEstudiante.js";

export default class Cl_mColegio {
    private acMonto:number = 0;
    private acAdicional:number = 0;
    private cntMesJulio:number = 0;
    private cntMesSeptiembre:number = 0;
    private cntEstudiantes:number = 0;

    public ProcesarEstudiante(estudiante: Cl_mEstudiante): void {
        this.acMonto += estudiante.Monto();
        this.acAdicional += estudiante.Adicional();
        if (estudiante.mes === 1) {
            this.cntMesJulio++;
        } else {
            this.cntMesSeptiembre++;
        }
        this.cntEstudiantes++;
    }
    public PorcentajeMesJulio(): number {
        return (this.cntMesJulio / this.cntEstudiantes) * 100;
    }
    public MontoFinalCaja(): number {
        return this.acMonto + this.acAdicional;
    }
}