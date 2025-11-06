// Cl_vRestaurante.ts (Actualizada para usar las nuevas vistas y el reporte completo)
import Cl_vPlato from "./Cl_vPlato.js";
import Cl_vAlmuerzo from "./Cl_vAlmuerzo.js";
import Cl_vCena from "./Cl_vCena.js";
import Cl_mPlato from "./Cl_mPlato.js";
import Cl_controlador from "./Cl_controlador.js";

interface ResultadoRestaurante {
  cntInternacionales: number;
  cntTotalPlatos: number;
  porcInternacionales: number;
  acGananciaNacional: number;
  acTotalPagado: number;
  porcGananciaNacional: number;
}

export default class Cl_vRestaurante {
  private _controlador: Cl_controlador | null = null;
  private tablaSalida: HTMLElement;

  // Elementos para las estadísticas finales
  private lblCntPlatos: HTMLElement;
  private lblCntInt: HTMLElement;
  private lblPorcInt: HTMLElement;
  private lblGananciaNacional: HTMLElement;
  private lblTotalPagado: HTMLElement;
  private lblPorcGananciaNacional: HTMLElement;

  public vPlato: Cl_vPlato;
  public vAlmuerzo: Cl_vAlmuerzo;
  public vCena: Cl_vCena;

  private slTipo: HTMLSelectElement;

  constructor() {
    this.tablaSalida = document.getElementById("tabla_salida") as HTMLElement;

    this.lblCntPlatos = document.getElementById("lblCntPlatos") as HTMLElement;
    this.lblCntInt = document.getElementById("lblCntInt") as HTMLElement;
    this.lblPorcInt = document.getElementById("lblPorcInt") as HTMLElement;
    this.lblGananciaNacional = document.getElementById(
      "lblGananciaNacional"
    ) as HTMLElement;
    this.lblTotalPagado = document.getElementById(
      "lblTotalPagado"
    ) as HTMLElement;
    this.lblPorcGananciaNacional = document.getElementById(
      "lblPorcGananciaNacional"
    ) as HTMLElement;

    this.slTipo = document.getElementById(
      "platoForm_slTipo"
    ) as HTMLSelectElement;

    if (!this.tablaSalida || !this.lblCntPlatos || !this.slTipo)
      throw new Error("Elementos de la Vista Restaurante no encontrados");

    this.vPlato = new Cl_vPlato();
    this.vAlmuerzo = new Cl_vAlmuerzo();
    this.vCena = new Cl_vCena();

    this.slTipo.onchange = () => this.cambiarVistaDetalle();
    this.cambiarVistaDetalle(); // Inicializa la vista de Almuerzo
  }

  set controlador(controlador: Cl_controlador | null) {
    this._controlador = controlador;
    this.vPlato.controlador = controlador;
    this.vAlmuerzo.controlador = controlador;
    this.vCena.controlador = controlador;
  }
  get controlador(): Cl_controlador | null {
    return this._controlador;
  }

  private cambiarVistaDetalle(): void {
    const tipo = +this.slTipo.value;
    if (tipo === 1) {
      // Almuerzo
      this.vAlmuerzo.show({ ver: true });
      this.vCena.show({ ver: false });
    } else if (tipo === 2) {
      // Cena
      this.vAlmuerzo.show({ ver: false });
      this.vCena.show({ ver: true });
    }
    this.vPlato.limpiarInputsBase();
    this.vAlmuerzo.limpiarInputs();
    this.vCena.limpiarInputs();
  }

  public reportarPlato(plato: Cl_mPlato): void {
    const origen = plato.origen === 1 ? "Nacional" : "Internacional";
    const pFinal = plato.precioFinal().toFixed(2);
    const ganancia = plato.ganancia.toFixed(2);
    const gananciaNac = plato.origen === 1 ? ganancia : "0.00";

    // Agregamos el resultado a la tabla
    this.tablaSalida.innerHTML += `
        <tr>
            <td>${plato.codigo}</td>
            <td>${origen}</td>
            <td>$${plato.costo.toFixed(2)}</td>
            <td>$${ganancia}</td>
            <td><strong>$${pFinal}</strong></td>
            <td>$${gananciaNac}</td>
        </tr>
    `;
  }

  public reportarRestaurante(resultados: ResultadoRestaurante): void {
    this.lblCntInt.innerHTML = resultados.cntInternacionales.toString();
    this.lblCntPlatos.innerHTML = resultados.cntTotalPlatos.toString();
    this.lblPorcInt.innerHTML = resultados.porcInternacionales.toFixed(2) + "%";
    this.lblGananciaNacional.innerHTML = `$${resultados.acGananciaNacional.toFixed(
      2
    )}`;
    this.lblTotalPagado.innerHTML = `$${resultados.acTotalPagado.toFixed(2)}`;
    this.lblPorcGananciaNacional.innerHTML =
      resultados.porcGananciaNacional.toFixed(2) + "%";
  }
}
