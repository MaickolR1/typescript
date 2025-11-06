export class CL_mRamo {
    #codigo;
    #costoNeto;
    #envase;
    precioVenta = 0;
    
    constructor(codigo, costoNeto, envase) {
        this.#codigo = codigo;
        this.#costoNeto = costoNeto;
        this.#envase = envase;
    }
    
    calcularPrecioVenta() {
        return 0;
    }
    
    getPrecioVenta() {
        return this.precioVenta;
    }
    
    esEnvaseMediano() {
        return this.#envase === 2;
    }
    
    getCodigo() {
        return this.#codigo;
    }
    
    getTipoRamo() {
        return "GENÉRICO";
    }
    
    _getCostoNeto() {
        return this.#costoNeto;
    }
}