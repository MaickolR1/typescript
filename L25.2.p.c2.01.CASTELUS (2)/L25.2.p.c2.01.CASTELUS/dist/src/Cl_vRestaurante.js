// Cl_vRestaurante.ts (Actualizada para usar las nuevas vistas y el reporte completo)
import Cl_vPlato from "./Cl_vPlato.js";
import Cl_vAlmuerzo from "./Cl_vAlmuerzo.js";
import Cl_vCena from "./Cl_vCena.js";
export default class Cl_vRestaurante {
    constructor() {
        this._controlador = null;
        this.tablaSalida = document.getElementById("tabla_salida");
        this.lblCntPlatos = document.getElementById("lblCntPlatos");
        this.lblCntInt = document.getElementById("lblCntInt");
        this.lblPorcInt = document.getElementById("lblPorcInt");
        this.lblGananciaNacional = document.getElementById("lblGananciaNacional");
        this.lblTotalPagado = document.getElementById("lblTotalPagado");
        this.lblPorcGananciaNacional = document.getElementById("lblPorcGananciaNacional");
        this.slTipo = document.getElementById("platoForm_slTipo");
        if (!this.tablaSalida || !this.lblCntPlatos || !this.slTipo)
            throw new Error("Elementos de la Vista Restaurante no encontrados");
        this.vPlato = new Cl_vPlato();
        this.vAlmuerzo = new Cl_vAlmuerzo();
        this.vCena = new Cl_vCena();
        this.slTipo.onchange = () => this.cambiarVistaDetalle();
        this.cambiarVistaDetalle(); // Inicializa la vista de Almuerzo
    }
    set controlador(controlador) {
        this._controlador = controlador;
        this.vPlato.controlador = controlador;
        this.vAlmuerzo.controlador = controlador;
        this.vCena.controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    cambiarVistaDetalle() {
        const tipo = +this.slTipo.value;
        if (tipo === 1) {
            // Almuerzo
            this.vAlmuerzo.show({ ver: true });
            this.vCena.show({ ver: false });
        }
        else if (tipo === 2) {
            // Cena
            this.vAlmuerzo.show({ ver: false });
            this.vCena.show({ ver: true });
        }
        this.vPlato.limpiarInputsBase();
        this.vAlmuerzo.limpiarInputs();
        this.vCena.limpiarInputs();
    }
    reportarPlato(plato) {
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
    reportarRestaurante(resultados) {
        this.lblCntInt.innerHTML = resultados.cntInternacionales.toString();
        this.lblCntPlatos.innerHTML = resultados.cntTotalPlatos.toString();
        this.lblPorcInt.innerHTML = resultados.porcInternacionales.toFixed(2) + "%";
        this.lblGananciaNacional.innerHTML = `$${resultados.acGananciaNacional.toFixed(2)}`;
        this.lblTotalPagado.innerHTML = `$${resultados.acTotalPagado.toFixed(2)}`;
        this.lblPorcGananciaNacional.innerHTML =
            resultados.porcGananciaNacional.toFixed(2) + "%";
    }
}
