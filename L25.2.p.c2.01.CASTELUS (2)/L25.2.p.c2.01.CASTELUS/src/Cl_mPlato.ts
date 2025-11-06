// Cl_mPlato.ts
/**
 * Clase base abstracta que contiene los atributos y métodos comunes a todos los platos.
 */
export default abstract class Cl_mPlato {
  protected _codigo: string;
  protected _origen: number; // 1=Nacional, 2=Internacional
  protected _costo: number;

  constructor({
    codigo = "",
    origen = 0,
    costo = 0,
  }: {
    codigo: string;
    origen: number;
    costo: number;
  }) {
    this._codigo = codigo;
    this._origen = +origen;
    this._costo = +costo;
  }

  // Método abstracto: Debe ser implementado OBLIGATORIAMENTE en las clases derivadas (polimorfismo).
  public abstract precioFinal(): number;

  // Rasgo Heredado: Cálculo de la ganancia. Utiliza el método polimórfico precioFinal().
  public get ganancia(): number {
    return this.precioFinal() - this._costo;
  }

  // Rasgo Heredado: Getter para que la clase mayor acceda al origen.
  public get origen(): number {
    return this._origen;
  }

  // Getters
  public get codigo(): string {
    return this._codigo;
  }
  public get costo(): number {
    return this._costo;
  }
}
