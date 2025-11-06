// Cl_mRestaurante.ts (Corregida)
import Cl_mPlato from "./Cl_mPlato.js";

/**
 * Clase principal que procesa los platos (Almuerzo o Cena) y calcula las estadísticas del restaurante.
 */
export default class Cl_mRestaurante {
  private _cntInternacionales: number;
  private _cntTotalPlatos: number;
  private _acGananciaNacional: number;
  private _acGananciaTotal: number;
  private _acTotalPagado: number; // NUEVO: Acumulador del precio final total

  constructor() {
    this._cntInternacionales = 0;
    this._cntTotalPlatos = 0;
    this._acGananciaNacional = 0;
    this._acGananciaTotal = 0;
    this._acTotalPagado = 0; // Inicialización
  }

  public procesarPlato(plato: Cl_mPlato): void {
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
  public get cntInternacionales(): number {
    return this._cntInternacionales;
  }
  public get cntTotalPlatos(): number {
    return this._cntTotalPlatos;
  }
  public get acGananciaNacional(): number {
    return this._acGananciaNacional;
  }
  public get acTotalPagado(): number {
    return this._acTotalPagado;
  }

  // Porcentaje de platos internacionales
  public porcPlatosInternacionales(): number {
    if (this._cntTotalPlatos === 0) return 0;
    return (this._cntInternacionales / this._cntTotalPlatos) * 100;
  }

  // Porcentaje de Ganancia Nacional (respecto al Total Pagado, según resultados esperados)
  public porcGananciaNacional(): number {
    if (this._acTotalPagado === 0) return 0;
    // Fórmula corregida: (Ganancia Nacional / Total Pagado) * 100
    return (this._acGananciaNacional / this._acTotalPagado) * 100;
  }
}
