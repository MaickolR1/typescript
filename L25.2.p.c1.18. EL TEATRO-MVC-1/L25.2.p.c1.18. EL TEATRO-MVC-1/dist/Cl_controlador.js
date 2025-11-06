import Cl_mFamilia from "./Cl_mFamilia.js";
export default class Cl_controlador {
    constructor(modelo, vFamilia, vTeatro) {
        this.modelo = modelo;
        this.vFamilia = vFamilia;
        this.vTeatro = vTeatro; // Inicializar la vista de salida
    }
    /**
     * Lógica principal del proceso: lee datos, calcula, procesa y muestra.
     */
    procesarFamilia() {
        // 1. Obtener datos de la vista
        let nombre = this.vFamilia.nombre;
        let cantAdulto = this.vFamilia.cantAdulto;
        let cantNino = this.vFamilia.cantNino;
        // 2. Crear instancia del modelo menor (Cl_mFamilia)
        let familia = new Cl_mFamilia(nombre, cantAdulto, cantNino);
        // 3. Obtener el resultado de la familia
        let pagoFamilia = familia.precio();
        // 4. Procesar el resultado con el modelo mayor (Cl_mTeatro)
        this.modelo.procesarFamilia(familia);
        // 5. Mostrar la salida de la familia
        this.vTeatro.mostrarFamilia(nombre, pagoFamilia);
        // 6. Mostrar el total actualizado
        // NOTA: Para este ejercicio se requiere el total al final,
        // pero se muestra el total del teatro después de cada procesamiento
        // para facilitar la comprobación. Se sobrescribe en el método `procesarLote` (no creado aquí).
        this.vTeatro.mostrarTotalTeatro(this.modelo.montoTotal());
        // 7. Limpiar el formulario
        this.vFamilia.limpiar();
    }
    // Método de demostración para el caso de uso del ejercicio (Opcional: Procesamiento de Lote)
    procesarLote() {
        this.vTeatro.limpiarSalida(); // Limpia antes de empezar el lote
        let familias = [
            new Cl_mFamilia("Gil", 2, 3), // (2 adultos, 3 niños)
            new Cl_mFamilia("Ramos", 1, 5), // (1 adulto, 5 niños)
            new Cl_mFamilia("Pérez", 4, 0), // (4 adultos, 0 niños)
            new Cl_mFamilia("Carmona", 1, 2), // (1 adulto, 2 niños)
        ];
        familias.forEach((familia) => {
            this.modelo.procesarFamilia(familia);
            this.vTeatro.mostrarFamilia(familia.Nombre, familia.precio());
        });
        this.vTeatro.mostrarTotalTeatro(this.modelo.montoTotal());
    }
}
