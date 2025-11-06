export default class Cl_vTeatro {
    // El constructor de Cl_vTeatro no debe crear Cl_vFamilia.
    // Esa responsabilidad debe ser de Cl_principal.
    constructor() {
        this._controlador = null;
        this.salida = document.getElementById("mainForm_salida");
        if (!this.salida)
            throw new Error("Elemento salida no encontrado");
        // No se necesita this.vFamilia aquí, ya que el controlador lo maneja.
    }
    set controlador(controlador) {
        this._controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    /**
     * Muestra el pago de la familia y limpia la salida para el total.
     * @param nombre Nombre de la familia.
     * @param pago Monto a pagar.
     */
    mostrarFamilia(nombre, pago) {
        this.salida.innerHTML += `La familia **${nombre}** debe pagar **$${pago.toFixed(2)}**<br>`;
    }
    /**
     * Muestra la recaudación total del teatro.
     * @param total Monto total acumulado.
     */
    mostrarTotalTeatro(total) {
        this.salida.innerHTML += `<br>El teatro recibe **$${total.toFixed(2)}** en total<hr>`;
    }
    /**
     * Limpia la salida antes de un nuevo proceso.
     */
    limpiarSalida() {
        this.salida.innerHTML = "";
    }
}
