// -> Nombre de archivo: Cl_mArticulo.ts
// -> (Este reemplaza tu Cl_mItem.ts)
export default class Cl_mArticulo {
    // -> Ajustamos el constructor para que coincida con la interfaz iItem
    constructor({ titulo, dueño, cantidad, fechaRegistro }) {
        this._titulo = "";
        this._dueño = "";
        this._cantidad = 0;
        this.titulo = titulo;
        this.dueño = dueño;
        this.cantidad = cantidad;
        // -> Si la fecha no viene, se asigna la actual.
        // -> Aunque Cl_mInventario la sobrescribirá al ser un item NUEVO.
        this._fechaRegistro = fechaRegistro || new Date();
    }
    // --- Getters y Setters ---
    set titulo(titulo) {
        this._titulo = titulo.trim(); // -> Usamos trim() como en tu ejemplo
    }
    get titulo() {
        return this._titulo;
    }
    set dueño(dueño) {
        this._dueño = dueño.trim().toUpperCase(); // -> Replicamos tu lógica de Cl_mContacto
    }
    get dueño() {
        return this._dueño;
    }
    set fechaRegistro(fecha) {
        this._fechaRegistro = fecha;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set cantidad(cant) {
        // -> Aseguramos que la cantidad sea un número válido
        this._cantidad = isNaN(cant) ? 0 : cant;
    }
    get cantidad() {
        return this._cantidad;
    }
    // --- Validación (Reglas de Negocio) ---
    error() {
        if (this._titulo.length === 0)
            return "El título del artículo no puede estar vacío.";
        if (this._dueño.length === 0)
            return "Debe especificar el dueño del artículo.";
        // -> Aseguramos que la cantidad sea al menos 1 al agregar
        if (this._cantidad <= 0)
            return "La cantidad debe ser de al menos 1.";
        return false;
    }
    // --- Exportación de datos (toJSON) ---
    toJSON() {
        return {
            titulo: this._titulo,
            dueño: this._dueño,
            fechaRegistro: this._fechaRegistro,
            cantidad: this._cantidad,
        };
    }
}
