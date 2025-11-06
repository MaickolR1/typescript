import Cl_mPlato from "./Cl_mPlato.js";

/**
 * Clase derivada de Cl_mPlato para platos tipo Almuerzo.
 * Implementa su propia lógica de cálculo de precio final.
 */
export default class Cl_mAlmuerzo extends Cl_mPlato {
  private _llevaSopa: boolean;

  constructor({
    codigo = "",
    origen = 0,
    costo = 0,
    llevaSopa = false,
  }: {
    codigo: string;
    origen: number;
    costo: number;
    llevaSopa: boolean;
  }) {
    // Hereda e inicializa los atributos de la clase padre
    super({ codigo, origen, costo });
    this._llevaSopa = llevaSopa;
  }

  // Sobreescribe el método abstracto precioFinal() con la lógica del Almuerzo.
  public precioFinal(): number {
    let incremento: number;
    if (this._llevaSopa) {
      incremento = 0.5; // 50% si lleva sopa
    } else {
      incremento = 0.3; // 30% en otro caso
    }

    // 1. Calcular el precio después del incremento porcentual.
    let precioBase = this._costo * (1 + incremento);

    // 2. Aplicar el Cargo por Servicio Internacional si el origen es 2.
    if (this._origen === 2) {
      precioBase += 2.0; // Añadir el cargo fijo de $2.00
    }

    return precioBase;
  }
}
