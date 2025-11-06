import { Artículo } from "./Cl_mArticulo.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
import Cl_controladorInventario from "./Cl_controladorInventario.js";
import { formatearFecha } from "./tools/index.js";

export default class Cl_vInventario extends Cl_vGeneral {
  private btAgregarItem: HTMLButtonElement;
  private divArticulosRegistrados: HTMLDivElement;

  // Botones de ordenamiento
  private btOrdenarTitulo: HTMLButtonElement;
  private btOrdenarDueno: HTMLButtonElement;

  private btOrdenarCantidad: HTMLButtonElement;
  private btOrdenarFecha: HTMLButtonElement;

  // -> Definimos el tipo de controlador específico
  get controladorInventario(): Cl_controladorInventario | null {
    return this.controlador as Cl_controladorInventario | null;
  }

  constructor() {
    super({ formName: "inventario" }); // -> El ID base es "inventario"

    this.btAgregarItem = this.crearHTMLButtonElement("btAgregarItem", {
      onclick: () => this.agregarItem(),
    });

    // --- Botones de ordenamiento ---
    // -> Estos botones llaman al Controlador, que llama al Modelo (sort)
    // -> y luego el Controlador le "empuja" la lista ordenada a la Vista.
    this.btOrdenarTitulo = this.crearHTMLButtonElement("btOrdenarTitulo", {
      onclick: () => this.controladorInventario!.ordenarArticulos("titulo"),
    });

    // -> CORRECCIÓN: "btOrdenarDueno" (sin ñ) para el ID HTML
    this.btOrdenarDueno = this.crearHTMLButtonElement("btOrdenarDueno", {
      onclick: () => this.controladorInventario!.ordenarArticulos("dueño"),
    });

    this.btOrdenarCantidad = this.crearHTMLButtonElement("btOrdenarCantidad", {
      onclick: () => this.controladorInventario!.ordenarArticulos("cantidad"),
    });

    this.btOrdenarFecha = this.crearHTMLButtonElement("btOrdenarFecha", {
      onclick: () =>
        this.controladorInventario!.ordenarArticulos("fechaRegistro"),
    });

    // -> Este es el <div> donde se renderizará la tabla completa
    this.divArticulosRegistrados = this.crearHTMLElement(
      "divArticulosRegistrados",
      {
        type: tHTMLElement.CONTAINER,
        // -> El refresh() por defecto llama a la lista sin ordenar
        refresh: () => this.mostrarArticulosRegistrados(),
      }
    ) as HTMLDivElement;
  }

  // 1. Muestra la lista por defecto (la pide al controlador)
  mostrarArticulosRegistrados() {
    let inventario = this.controladorInventario?.articulosRegistrados();

    if (inventario) {
      this._generarTablaHTML(inventario);
    } else {
      this.divArticulosRegistrados.innerHTML =
        "<p>No hay artículos registrados.</p>";
    }
  }

  // 2. Muestra la lista que el controlador le pasa (ya ordenada)
  // -> Este método es llamado por el Controlador
  mostrarArticulosOrdenados(listaOrdenada: Artículo[]) {
    this._generarTablaHTML(listaOrdenada);
  }

  // 3. Método privado para renderizar el HTML
  // -> generar la tabla completa está perfecta.
  private _generarTablaHTML(inventario: Artículo[]) {
    let htmlContent = `
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Dueño</th>
              <th>Cantidad</th>
              <th>Fecha Registro</th>
            </tr>
          </thead>
        <tbody>
    `;

    inventario.forEach((item: Artículo) => {
      // ->  herramienta de fechas
      const fechaFormateada = formatearFecha(item.fechaRegistro!);

      htmlContent += `
        <tr>
          <td>${item.titulo}</td>
          <td>${item.dueño}</td>
          <td>${item.cantidad}</td>
          <td>${fechaFormateada}</td>
        </tr>
      `;
    });

    htmlContent += `
        </tbody>
      </table>
    `;

    this.divArticulosRegistrados.innerHTML = htmlContent;
  }

  // 4. Método para agregar (desde el prompt)
  agregarItem() {
    let titulo = prompt("Ingrese el título del artículo:");
    if (!titulo) return;

    let dueno = prompt("Ingrese el nombre del dueño:");
    if (!dueno) return;

    let cantidadStr = prompt("Ingrese la cantidad (por defecto 1):");
    let cantidad = parseInt(cantidadStr || "1");

    // -> se encargará de asignarla si es un ítem nuevo.
    this.controladorInventario!.agregarItem({
      itemData: {
        titulo: titulo,
        dueño: dueno,
        cantidad: cantidad,
        // fechaRegistro
      },
      callback: (error: string | false) => {
        if (error) {
          alert(`Error al registrar artículo: ${error}`);
        } else {
          this.refresh(); // Refresca la vista (llama a mostrarArticulosRegistrados)
        }
      },
    });
  }
}
