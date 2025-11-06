export default class Cl_mTeatro {
    constructor() {
        this.acMontoTotal = 0;
    }
    /**
     * Procesa una familia y acumula su pago al total del teatro.
     */
    procesarFamilia(familia) {
        let montoFamilia = familia.precio();
        this.acMontoTotal = this.acMontoTotal + montoFamilia;
    }
    /**
     * Retorna la recaudación total del teatro.
     */
    montoTotal() {
        return this.acMontoTotal;
    }
}
