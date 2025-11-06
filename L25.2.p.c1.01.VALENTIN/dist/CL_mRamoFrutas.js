import { CL_mRamo } from './CL_mRamo.js';

export class CL_mRamoFrutas extends CL_mRamo {
    #llevaExtra;

    constructor(codigo, costoNeto, envase, llevaExtra) {
        super(codigo, costoNeto, envase);
        this.#llevaExtra = llevaExtra;
        this.precioVenta = this.calcularPrecioVenta();
    }
    
    calcularPrecioVenta() {
        let precio = this._getCostoNeto(); 
        
        if (this.#llevaExtra) { 
            precio *= 0.85;
        }
        
        return precio;
    }
    
    getTipoRamo() {
        return `FRUTAS (${this.#llevaExtra ? 'Con Extra' : 'Sin Extra'})`;
    }
}