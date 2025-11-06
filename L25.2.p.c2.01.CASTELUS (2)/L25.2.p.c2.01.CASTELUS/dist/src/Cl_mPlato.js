// Cl_mPlato.ts
/**
 * Clase base abstracta que contiene los atributos y métodos comunes a todos los platos.
 */
export default class Cl_mPlato {
    constructor({ codigo = "", origen = 0, costo = 0, }) {
        this._codigo = codigo;
        this._origen = +origen;
        this._costo = +costo;
    }
    // Rasgo Heredado: Cálculo de la ganancia. Utiliza el método polimórfico precioFinal().
    get ganancia() {
        return this.precioFinal() - this._costo;
    }
    // Rasgo Heredado: Getter para que la clase mayor acceda al origen.
    get origen() {
        return this._origen;
    }
    // Getters
    get codigo() {
        return this._codigo;
    }
    get costo() {
        return this._costo;
    }
}
