// -> Nombre de archivo: Cl_mInventario.ts
// -> (Tu código estaba casi perfecto aquí)
// -> Importamos 'ahora' de la herramienta de fechas que ya tenías
import { ahora } from "./tools/index.js";
export default class Cl_mInventario {
    constructor() {
        this.inventario = [];
    }
    // 1. Agregar o Incrementar Conteo
    agregarItem({ item, callback, }) {
        // -> Primero validamos el ítem (Título, Dueño, Cantidad > 0)
        let error = item.error();
        if (error) {
            callback(error);
            return;
        }
        // -> Usamos FIND (Regla de Negocio: Título Y Dueño iguales)
        let itemExistente = this.inventario.find((i) => i.titulo === item.titulo && i.dueño === item.dueño);
        if (itemExistente) {
            // -> Lógica de CONTEO: Si existe, se incrementa la cantidad
            itemExistente.cantidad += item.cantidad;
            callback(false); // Éxito
        }
        else {
            // -> Lógica de AGREGAR: Si NO existe
            // -> ¡IMPORTANTE! Asignamos la fecha de registro EXACTA aquí.
            // -> Esta es la lógica de negocio correcta.
            item.fechaRegistro = ahora();
            this.inventario.push(item);
            callback(false); // Éxito
        }
    }
    // 2. Listar (sin ordenar)
    listar() {
        let lista = [];
        this.inventario.forEach((item) => {
            lista.push(item.toJSON());
        });
        return lista;
    }
    // 3. Listar con Ordenamiento (SORT)
    // -> (Tu lógica de SORT estaba perfecta)
    listarOrdenado(criterio) {
        let lista = this.listar(); // Obtenemos una copia
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
                    return b.fechaRegistro.getTime() - a.fechaRegistro.getTime();
                default:
                    return 0;
            }
        });
        return lista;
    }
}
