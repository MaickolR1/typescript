import { CL_mRamo } from './CL_mRamo';
import { CL_mRamoFlores } from './CL_mRamoFlores';
import { CL_mRamoFrutas } from './CL_mRamoFrutas';

export class CL_mTienda {
    private acumVentas: number = 0;
    private totalRamosProcesados: number = 0;
    private totalFloresNaturales: number = 0; 
    private ramosFloresNaturalesMedianos: number = 0;

    constructor() {
    }

    public procesarRamo(ramo: CL_mRamo): void {
        const precio = ramo.getPrecioVenta();
        
        this.acumVentas += precio;
        this.totalRamosProcesados++;

        // Aquí TypeScript reduce el tipo: si es una instancia de CL_mRamoFlores, 
        // trata 'ramo' como CL_mRamoFlores dentro de este bloque.
        if (ramo instanceof CL_mRamoFlores) {
            
            // Llamamos a los métodos específicos de CL_mRamoFlores sin error
            if (ramo.esNatural()) {
                this.totalFloresNaturales++; 
                
                // esEnvaseMediano está en la clase base y se puede llamar
                if (ramo.esEnvaseMediano()) { 
                    this.ramosFloresNaturalesMedianos++;
                }
            }
        }
    }

    public getTotalVendido(): number {
        return this.acumVentas;
    }
    
    public getPorcentajeFloresNaturalesMedianas(): number {
        if (this.totalFloresNaturales === 0) {
            return 0;
        }
        return (this.ramosFloresNaturalesMedianos / this.totalFloresNaturales) * 100;
    }

    public getFloresNaturales(): number {
        return this.totalFloresNaturales;
    }

    public getFloresNaturalesMedianas(): number {
        return this.ramosFloresNaturalesMedianos;
    }
}