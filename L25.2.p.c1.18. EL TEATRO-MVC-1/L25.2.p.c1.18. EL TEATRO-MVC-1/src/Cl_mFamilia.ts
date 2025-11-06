// Archivo: Cl_mFamilia.ts
export default class Cl_mFamilia {
  private nombre: string;
  private cantAdulto: number;
  private cantNino: number;

  private readonly PRECIO_ADULTO = 10;
  private readonly PRECIO_NINO = 5;

  constructor(nombre: string, cantAdulto: number, cantNino: number) {
    this.nombre = nombre;
    this.cantAdulto = cantAdulto;
    this.cantNino = cantNino;
  }

  // Setters (correctos)
  set Nombre(nombre: string) {
    this.nombre = nombre;
  }
  set CantAdulto(cantAdulto: number) {
    this.cantAdulto = cantAdulto;
  }
  set CantNino(cantNino: number) {
    this.cantNino = cantNino;
  }

  // Getters (correctos)
  get Nombre(): string {
    return this.nombre;
  }
  get CantAdulto(): number {
    return this.cantAdulto;
  }
  get CantNino(): number {
    return this.cantNino;
  }

  /**
   * Calcula el monto total que la familia debe pagar.
   * Requerimiento 1: Cuánto paga cada familia.
   */
  public precio(): number {
    let pagoAdultos: number = this.cantAdulto * this.PRECIO_ADULTO;
    let pagoNinos: number = this.cantNino * this.PRECIO_NINO;
    return pagoAdultos + pagoNinos;
  }
}
