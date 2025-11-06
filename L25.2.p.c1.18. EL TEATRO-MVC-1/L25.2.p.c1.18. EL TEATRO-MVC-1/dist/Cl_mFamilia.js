// Archivo: Cl_mFamilia.ts
export default class Cl_mFamilia {
    constructor(nombre, cantAdulto, cantNino) {
        this.PRECIO_ADULTO = 10;
        this.PRECIO_NINO = 5;
        this.nombre = nombre;
        this.cantAdulto = cantAdulto;
        this.cantNino = cantNino;
    }
    // Setters (correctos)
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    set CantAdulto(cantAdulto) {
        this.cantAdulto = cantAdulto;
    }
    set CantNino(cantNino) {
        this.cantNino = cantNino;
    }
    // Getters (correctos)
    get Nombre() {
        return this.nombre;
    }
    get CantAdulto() {
        return this.cantAdulto;
    }
    get CantNino() {
        return this.cantNino;
    }
    /**
     * Calcula el monto total que la familia debe pagar.
     * Requerimiento 1: Cuánto paga cada familia.
     */
    precio() {
        let pagoAdultos = this.cantAdulto * this.PRECIO_ADULTO;
        let pagoNinos = this.cantNino * this.PRECIO_NINO;
        return pagoAdultos + pagoNinos;
    }
}
