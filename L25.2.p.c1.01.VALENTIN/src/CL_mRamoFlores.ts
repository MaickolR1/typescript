import { CL_mRamo } from './CL_mRamo';

export class CL_mRamoFlores extends CL_mRamo {
    private tipo: 'A' | 'N';

    constructor(codigo: string, costoNeto: number, envase: number, tipo: 'A' | 'N') {
        super(codigo, costoNeto, envase);
        this.tipo = tipo;
        this.precioVenta = this.calcularPrecioVenta();
    }
    
    public esNatural(): boolean {
        return this.tipo === 'N';
    }

    public calcularPrecioVenta(): number {
        let precio = this._getCostoNeto();
        
        if (this.tipo === 'A') { 
            precio *= 0.90;
        } else if (this.tipo === 'N') { 
            precio *= 1.08;
        }
        
        return precio;
    }
    
    public getTipoRamo(): string {
        return `FLORES (${this.tipo === 'N' ? 'Natural' : 'Artificial'})`;
    }
}