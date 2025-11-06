import { CL_mRamo } from './CL_mRamo.js';
import { CL_mRamoFlores } from './CL_mRamoFlores.js';

export class CL_mTienda {
    #acumVentas = 0;
    #totalRamosProcesados = 0;
    #totalFloresNaturales = 0; 
    #ramosFloresNaturalesMedianos = 0;

    constructor() {
    }

    procesarRamo(ramo) {
        const precio = ramo.getPrecioVenta();
        
        this.#acumVentas += precio;
        this.#totalRamosProcesados++;

        if (ramo instanceof CL_mRamoFlores) {
            
            if (ramo.esNatural()) {
                this.#totalFloresNaturales++; 
                
                if (ramo.esEnvaseMediano()) {
                    this.#ramosFloresNaturalesMedianos++;
                }
            }
        }
    }

    getTotalVendido() {
        return this.#acumVentas;
    }
    
    getPorcentajeFloresNaturalesMedianas() {
        if (this.#totalFloresNaturales === 0) {
            return 0;
        }
        return (this.#ramosFloresNaturalesMedianos / this.#totalFloresNaturales) * 100;
    }

    getFloresNaturales() {
        return this.#totalFloresNaturales;
    }

    getFloresNaturalesMedianas() {
        return this.#ramosFloresNaturalesMedianos;
    }
}