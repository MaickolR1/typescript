import Cl_mPlato from "./Cl_mPlato.js";

/**
 * Clase derivada de Cl_mPlato para platos tipo Cena.
 * Implementa su propia lógica de cálculo de precio final.
 */
export default class Cl_mCena extends Cl_mPlato {
  private _especialidad: number; // 1=vegetariano, 2=mar, 3=tierra

  constructor({
    codigo = "",
    origen = 0,
    costo = 0,
    especialidad = 0,
  }: {
    codigo: string;
    origen: number;
    costo: number;
    especialidad: number;
  }) {
    // Hereda e inicializa los atributos de la clase padre
    super({ codigo, origen, costo });
    this._especialidad = +especialidad;
  }

  // Sobreescribe el método abstracto precioFinal() con la lógica de la Cena.
  public precioFinal(): number {
    let incremento: number;
    // Lógica de incremento para Cenas:
    if (this._origen === 2) {
      // Internacional
      if (this._especialidad === 2) {
        // Platos internacionales del mar
        incremento = 0.6; // 60%
      } else {
        incremento = 0.4; // 40% (resto de casos internacionales)
      }
    } else {
      // Nacional o cualquier otro caso
      incremento = 0.4; // 40% (resto de los casos)
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
