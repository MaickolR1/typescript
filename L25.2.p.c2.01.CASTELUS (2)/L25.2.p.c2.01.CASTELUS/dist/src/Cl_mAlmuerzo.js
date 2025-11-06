// Cl_mAlmuerzo.ts
import Cl_mPlato from "./Cl_mPlato.js";
/**
 * Clase derivada de Cl_mPlato para platos tipo Almuerzo.
 * Implementa su propia lógica de cálculo de precio final.
 */
export default class Cl_mAlmuerzo extends Cl_mPlato {
    constructor({ codigo = "", origen = 0, costo = 0, llevaSopa = false, }) {
        // Hereda e inicializa los atributos de la clase padre
        super({ codigo, origen, costo });
        this._llevaSopa = llevaSopa;
    }
    // Sobreescribe el método abstracto precioFinal() con la lógica del Almuerzo.
    precioFinal() {
        let incremento;
        if (this._llevaSopa) {
            incremento = 0.5; // 50% si lleva sopa
        }
        else {
            incremento = 0.3; // 30% en otro caso
        }
        // Utiliza el atributo _costo heredado.
        return this._costo * (1 + incremento);
    }
}
