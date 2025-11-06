export default class Cl_mVehiculo {
    constructor({ placa = "", tipo = 1 }) {
        this._placa = "";
        this._tipo = 1;
        this.placa = placa;
        this.tipo = tipo;
    }
    tarifaAPagar() {
        if (this.tipo === 1)
            return 10;
        if (this.tipo === 2)
            return 20;
        if (this.tipo === 3)
            return 50;
        return 0;
    }
    set placa(placa) {
        this._placa = placa;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get placa() {
        return this._placa;
    }
    get tipo() {
        return this._tipo;
    }
}
