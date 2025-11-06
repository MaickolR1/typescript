export default class Cl_Mestudiante {
    constructor({ nombre, cedula, sexo, nota, valor, minAprueba }) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.sexo = sexo;
        this.nota = nota;    
        this.valor = valor;
        this.minAprueba = minAprueba;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get nombre() {
        return this._nombre;            
    }

    set cedula(value) {
        this._cedula = value;
    }

    get cedula() {
        return this._cedula;            
    }

    set sexo(value) {
        this._sexo = value.toUpperCase();     
        if (this._sexo!=='M' && this._sexo!=='F')
            this._sexo='F'       
    }

    get sexo() {                
        return this._sexo;            
    }

    set nota(value) {
        this._nota = value;
    }

    get nota() {
        return this._nota;            
    }

    set valor(value) {
        this._valor = value;
    }                                

    get valor() {
        return this._valor;            
    }

    set minAprueba(value) {
        this._minAprueba = value;
    }

    get minAprueba() {
        return this._minAprueba;            
    }
}