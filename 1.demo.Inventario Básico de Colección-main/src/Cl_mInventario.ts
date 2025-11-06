import Cl_mArticulo, { Artículo } from "./Cl_mArticulo.js";

import { ahora } from "./tools/index.js";

export type CriterioOrdenamiento =
  | "titulo"
  | "dueño"
  | "cantidad"
  | "fechaRegistro";

export default class Cl_mInventario {
  private inventario: Cl_mArticulo[] = [];

  // 1. Agregar o Incrementar Conteo
  agregarItem({
    item,
    callback,
  }: {
    item: Cl_mArticulo;
    callback: (error: string | false) => void;
  }): void {
    // -> validamos el ítem (Título, Dueño, Cantidad > 0)
    let error = item.error();
    if (error) {
      callback(error);
      return;
    }

    // -> Usamos FIND (Regla de Negocio: Título Y Dueño iguales)
    let itemExistente = this.inventario.find(
      (i) => i.titulo === item.titulo && i.dueño === item.dueño
    );

    if (itemExistente) {
      // -> Lógica de CONTEO: Si existe, se incrementa la cantidad
      itemExistente.cantidad += item.cantidad;
      callback(false); // Éxito
    } else {
      // -> Lógica de AGREGAR: Si NO existe

      // -> Esta es la lógica de negocio.
      item.fechaRegistro = ahora();

      this.inventario.push(item);
      callback(false); // Éxito
    }
  }

  // 2. Listar (sin ordenar)
  listar(): Artículo[] {
    let lista: Artículo[] = [];
    this.inventario.forEach((item) => {
      lista.push(item.toJSON());
    });
    return lista;
  }

  // 3. Listar con Ordenamiento (SORT)
  // -> (lógica de SORT estaba perfecta)
  listarOrdenado(criterio: CriterioOrdenamiento): Artículo[] {
    let lista: Artículo[] = this.listar(); // Obtenemos una copia

    lista.sort((a, b) => {
      switch (criterio) {
        case "titulo":
          return a.titulo.localeCompare(b.titulo); // A-Z

        case "dueño":
          return a.dueño.localeCompare(b.dueño); // A-Z

        case "cantidad":
          return b.cantidad - a.cantidad; // Mayor a Menor

        case "fechaRegistro":
          // -> Comparamos el objeto Date directamente (Más reciente primero)
          return b.fechaRegistro!.getTime() - a.fechaRegistro!.getTime();

        default:
          return 0;
      }
    });

    return lista;
  }
}
