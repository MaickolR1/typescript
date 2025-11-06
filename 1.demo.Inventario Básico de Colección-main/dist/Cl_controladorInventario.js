// -> Nombre de archivo: Cl_controladorInventario.ts
// -> (Tu código estaba perfecto)
import Cl_mArticulo from "./Cl_mArticulo.js";
export default class Cl_controladorInventario {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    // 1. Petición de la Vista para agregar
    agregarItem({ itemData, callback, }) {
        // -> Instancia el Modelo de artículo
        const newItem = new Cl_mArticulo(itemData);
        // -> Se lo pasa al Modelo de Inventario (que tiene la lógica de find/push)
        this.modelo.agregarItem({
            item: newItem,
            callback: (error) => {
                callback(error);
            },
        });
    }
    // 2. Petición de la Vista para obtener la lista (para el refresh)
    articulosRegistrados() {
        return this.modelo.listar();
    }
    // 3. Petición de la Vista para ordenar
    ordenarArticulos(criterio) {
        // -> Pide la lista ordenada al Modelo
        const listaOrdenada = this.modelo.listarOrdenado(criterio);
        // -> "Empuja" (push) la lista ordenada a la Vista
        this.vista.mostrarArticulosOrdenados(listaOrdenada);
    }
}
