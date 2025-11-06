// -> Nombre de archivo: Cl_controladorInventario.ts
// -> (Tu código estaba perfecto)

import Cl_mArticulo, { Artículo } from "./Cl_mArticulo.js";
import Cl_mInventario, { CriterioOrdenamiento } from "./Cl_mInventario.js";
import Cl_vInventario from "./Cl_vInventario.js";

export default class Cl_controladorInventario {
  public modelo: Cl_mInventario;
  public vista: Cl_vInventario;

  constructor(modelo: Cl_mInventario, vista: Cl_vInventario) {
    this.modelo = modelo;
    this.vista = vista;
  }

  // 1. Petición de la Vista para agregar
  agregarItem({
    itemData,
    callback,
  }: {
    itemData: Artículo; // -> Recibe el {titulo, dueño, cantidad}
    callback: (error: string | false) => void;
  }): void {
    // -> Instancia el Modelo de artículo
    const newItem = new Cl_mArticulo(itemData);

    // -> Se lo pasa al Modelo de Inventario (que tiene la lógica de find/push)
    this.modelo.agregarItem({
      item: newItem,
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }

  // 2. Petición de la Vista para obtener la lista (para el refresh)
  articulosRegistrados(): Artículo[] {
    return this.modelo.listar();
  }

  // 3. Petición de la Vista para ordenar
  ordenarArticulos(criterio: CriterioOrdenamiento): void {
    // -> Pide la lista ordenada al Modelo
    const listaOrdenada = this.modelo.listarOrdenado(criterio);

    // -> "Empuja" (push) la lista ordenada a la Vista
    this.vista.mostrarArticulosOrdenados(listaOrdenada);
  }
}
