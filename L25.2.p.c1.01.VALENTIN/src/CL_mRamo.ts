export class CL_mRamo {
    private codigo: string;
    private costoNeto: number;
    private envase: number;
    public precioVenta: number = 0;
    
    constructor(codigo: string, costoNeto: number, envase: number) {
        this.codigo = codigo;
        this.costoNeto = costoNeto;
        this.envase = envase;
    }
    
    public calcularPrecioVenta(): number {
        return 0;
    }
    
    public getPrecioVenta(): number {
        return this.precioVenta;
    }
    
    public esEnvaseMediano(): boolean {
        return this.envase === 2;
    }
    
    public getCodigo(): string {
        return this.codigo;
    }
    
    public getTipoRamo(): string {
        return "GENÉRICO";
    }
    
    protected _getCostoNeto(): number {
        return this.costoNeto;
    }
}