import { CL_mRamo } from './CL_mRamo.js';

export class CL_mRamoFlores extends CL_mRamo {
    #tipo;

    constructor(codigo, costoNeto, envase, tipo) {
        super(codigo, costoNeto, envase);
        this.#tipo = tipo;
        this.precioVenta = this.calcularPrecioVenta();
    }
    
    esNatural() {
        return this.#tipo === 'N';
    }

    calcularPrecioVenta() {
        let precio = this._getCostoNeto();
        
        if (this.#tipo === 'A') { 
            precio *= 0.90;
        } else if (this.#tipo === 'N') { 
            precio *= 1.08;
        }
        
        return precio;
    }
    
    getTipoRamo() {
        return `FLORES (${this.#tipo === 'N' ? 'Natural' : 'Artificial'})`;
    }
}