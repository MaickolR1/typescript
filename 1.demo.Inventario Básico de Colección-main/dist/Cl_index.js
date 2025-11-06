/**
 * Se requiere de una aplicación de INVENTARIO BÁSICO DE COLECCIÓN que controle una lista
 * de artículos o ítems, permitiendo registrar sus datos y llevar un control de la cantidad.
 * * DATOS A REGISTRAR POR CADA ARTÍCULO:
 * - Título: El nombre o descripción del artículo (ej: "Toalla Verde", "Libro TypeScript").
 * - Dueño: La persona responsable o dueña del artículo.
 * - Cantidad: El conteo de unidades de ese artículo.
 * - Fecha de Registro: La fecha exacta (año, mes y día) de la adición al inventario.
 *
 * REGLAS DEL NEGOCIO Y FUNCIONALIDADES CLAVE:
 * - **Control de Conteo:** Si se intenta agregar un artículo con el **mismo Título** y el **mismo Dueño** que ya existe, la aplicación no lo duplica, sino que **incrementa su propiedad Cantidad** (usando el método Array.prototype.find()).
 * - **Datos Obligatorios:** Los campos Título y Dueño son obligatorios.
 * - **Gestión de la Lista:** La APP debe permitir:
 * - **Agregar** nuevos artículos.
 * - **Listar** todos los artículos registrados.
 * - **Ordenar** la lista (usando Array.prototype.sort()) por: Título, Dueño, Cantidad y Fecha de Registro (Año, Mes, Día).
 */
// -> Nombre de archivo: Cl_index.ts
// -> (Tu código estaba perfecto, solo se actualizan los nombres)
/**
 * Requerimientos del Inventario:
 * - Datos: Título, Dueño, Cantidad, Fecha de Registro.
 * - Reglas:
 * - Si Título + Dueño existen, se incrementa Cantidad (usa FIND).
 * - Título y Dueño son obligatorios.
 * - Funciones:
 * - Agregar.
 * - Listar.
 * - Ordenar (Título, Dueño, Cantidad, Fecha) (usa SORT).
 */
import Cl_controladorInventario from "./Cl_controladorInventario.js";
import Cl_mInventario from "./Cl_mInventario.js";
import Cl_vInventario from "./Cl_vInventario.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mInventario();
        this.vista = new Cl_vInventario();
        // -> Inyectamos el Modelo y la Vista en el Controlador
        let controlador = new Cl_controladorInventario(this.modelo, this.vista);
        // -> Inyectamos el Controlador en la Vista
        this.vista.controlador = controlador;
        // -> Hacemos el primer renderizado (llama a mostrarArticulosRegistrados)
        this.vista.refresh();
    }
}
