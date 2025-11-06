/**
 * Clase principal que procesa los platos (Almuerzo o Cena) y calcula las estadísticas del restaurante.
 */
export default class Cl_mRestaurante {
    constructor() {
        this._cntInternacionales = 0;
        this._cntTotalPlatos = 0;
        this._acGananciaNacional = 0;
        this._acGananciaTotal = 0;
        this._acTotalPagado = 0; // Inicialización
    }
    procesarPlato(plato) {
        this._cntTotalPlatos++;
        const gananciaActual = plato.ganancia;
        const precioFinalActual = plato.precioFinal();
        // Acumulación
        this._acGananciaTotal += gananciaActual;
        this._acTotalPagado += precioFinalActual; // Acumular Total Pagado
        // Contador de Platos Internacionales
        if (plato.origen === 2) {
            this._cntInternacionales++;
        }
        // Acumulador de Ganancia Nacional
        if (plato.origen === 1) {
            this._acGananciaNacional += gananciaActual;
        }
    }
    // Getters para el reporte final
    get cntInternacionales() {
        return this._cntInternacionales;
    }
    get cntTotalPlatos() {
        return this._cntTotalPlatos;
    }
    get acGananciaNacional() {
        return this._acGananciaNacional;
    }
    get acTotalPagado() {
        return this._acTotalPagado;
    }
    // Porcentaje de platos internacionales
    porcPlatosInternacionales() {
        if (this._cntTotalPlatos === 0)
            return 0;
        return (this._cntInternacionales / this._cntTotalPlatos) * 100;
    }
    // Porcentaje de Ganancia Nacional (respecto al Total Pagado, según resultados esperados)
    porcGananciaNacional() {
        if (this._acTotalPagado === 0)
            return 0;
        // Fórmula corregida: (Ganancia Nacional / Total Pagado) * 100
        return (this._acGananciaNacional / this._acTotalPagado) * 100;
    }
}
