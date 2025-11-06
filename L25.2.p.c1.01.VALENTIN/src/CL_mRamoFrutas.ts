import { CL_mRamo } from './CL_mRamo';

export class CL_mRamoFrutas extends CL_mRamo {
    private llevaExtra: boolean;

    constructor(codigo: string, costoNeto: number, envase: number, llevaExtra: boolean) {
        super(codigo, costoNeto, envase);
        this.llevaExtra = llevaExtra;
        this.precioVenta = this.calcularPrecioVenta();
    }
    
    public calcularPrecioVenta(): number {
        let precio = this._getCostoNeto(); 
        
        if (this.llevaExtra) { 
            precio *= 0.85;
        }
        
        return precio;
    }
    
    public getTipoRamo(): string {
        return `FRUTAS (${this.llevaExtra ? 'Con Extra' : 'Sin Extra'})`;
    }
}