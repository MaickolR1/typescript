export default class Cl_mAseguradora {
    constructor() {
        this.acMontoPagado = 0;
        this.cntPolizas = 0;
    }
    procesarPoliza(poliza) {
        this.cntPolizas++;
        this.acMontoPagado += poliza.montoAPagar();
    }
    totalPagado() {
        return this.acMontoPagado;
    }
    cantidadPolizas() {
        return this.cntPolizas;
    }
    promedioMontoPagado() {
        if (this.cntPolizas)
            return this.acMontoPagado / this.cntPolizas;
        return 0;
    }
}
