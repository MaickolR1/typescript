// -> Definimos la interfaz Artículo aquí mismo, como en tu ejemplo de Cl_mContacto.
export interface Artículo {
  titulo: string;
  dueño: string;
  cantidad: number;
  fechaRegistro?: Date; // -> La fecha es opcional al crear, el modelo la gestionará.
}

export default class Cl_mArticulo {
  private _titulo: string = "";
  private _dueño: string = "";
  private _fechaRegistro: Date; // -> Se inicializará en el constructor
  private _cantidad: number = 0;

  // ->constructor para que coincida con la interfaz Artículo
  constructor({ titulo, dueño, cantidad, fechaRegistro }: Artículo) {
    this.titulo = titulo;
    this.dueño = dueño;
    this.cantidad = cantidad;
    // -> Si la fecha no viene, se asigna la actual.
    // -> Aunque Cl_mInventario la sobrescribirá al ser un item NUEVO.
    this._fechaRegistro = fechaRegistro || new Date();
  }

  // --- Getters y Setters ---

  set titulo(titulo: string) {
    this._titulo = titulo.trim(); // -> Usamos trim() como en tu ejemplo
  }
  get titulo(): string {
    return this._titulo;
  }

  set dueño(dueño: string) {
    this._dueño = dueño.trim().toUpperCase(); // -> Replicamos tu lógica de Cl_mContacto
  }
  get dueño(): string {
    return this._dueño;
  }

  set fechaRegistro(fecha: Date) {
    this._fechaRegistro = fecha;
  }
  get fechaRegistro(): Date {
    return this._fechaRegistro;
  }

  set cantidad(cant: number) {
    // -> Aseguramos que la cantidad sea un número válido
    this._cantidad = isNaN(cant) ? 0 : cant;
  }
  get cantidad(): number {
    return this._cantidad;
  }

  // --- Validación (Reglas de Negocio) ---
  error(): string | false {
    if (this._titulo.length === 0)
      return "El título del artículo no puede estar vacío.";

    if (this._dueño.length === 0)
      return "Debe especificar el dueño del artículo.";

    // -> Aseguramos que la cantidad sea al menos 1 al agregar
    if (this._cantidad <= 0) return "La cantidad debe ser de al menos 1.";

    return false;
  }

  // --- Exportación de datos (toJSON) ---
  toJSON(): Artículo {
    return {
      titulo: this._titulo,
      dueño: this._dueño,
      fechaRegistro: this._fechaRegistro,
      cantidad: this._cantidad,
    };
  }
}
