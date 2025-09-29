export default class Cl_mEstudiante {
    constructor({ nombre = "", cedula = "", mes = 0, nivel = 0 }) {
        this._nombre = "";
        this._cedula = "";
        this._mes = 0;
        this._nivel = 0;
        this._nombre = nombre;
        this._cedula = cedula;
        this._mes = mes;
        this._nivel = nivel;
    }
    Monto() {
        let monto = 0;
        switch (this._nivel) {
            case 1:
                monto = 50;
                break;
            case 2:
                monto = 100;
                break;
            default:
                monto = 0;
                break;
        }
        return monto * this._mes;
    }
    Adicional() {
        let adicional = 0;
        if (this._nivel === 2) {
            adicional = 20;
        }
        return adicional;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    set mes(mes) {
        this._mes = mes;
    }
    set nivel(nivel) {
        this._nivel = nivel;
    }
    get nombre() {
        return this._nombre;
    }
    get cedula() {
        return this._cedula;
    }
    get mes() {
        return this._mes;
    }
    get nivel() {
        return this._nivel;
    }
}
