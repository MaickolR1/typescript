// Cl_mCena.ts
import Cl_mPlato from "./Cl_mPlato.js";
/**
 * Clase derivada de Cl_mPlato para platos tipo Cena.
 * Implementa su propia lógica de cálculo de precio final.
 */
export default class Cl_mCena extends Cl_mPlato {
    constructor({ codigo = "", origen = 0, costo = 0, especialidad = 0, }) {
        // Hereda e inicializa los atributos de la clase padre
        super({ codigo, origen, costo });
        this._especialidad = +especialidad;
    }
    // Sobreescribe el método abstracto precioFinal() con la lógica de la Cena.
    precioFinal() {
        let incremento;
        // Lógica de incremento para Cenas:
        if (this._origen === 2) {
            // Internacional
            if (this._especialidad === 2) {
                // Platos internacionales del mar
                incremento = 0.6; // 60%
            }
            else {
                incremento = 0.4; // 40% (resto de casos internacionales)
            }
        }
        else {
            // Nacional o cualquier otro caso no especificado en la lógica del 60%
            incremento = 0.4; // 40% (resto de los casos)
        }
        return this._costo * (1 + incremento);
    }
}
