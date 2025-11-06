// Cl_controlador.ts (Actualizada)
import Cl_mRestaurante from "./Cl_mRestaurante.js";
import Cl_vRestaurante from "./Cl_vRestaurante.js";
import Cl_mAlmuerzo from "./Cl_mAlmuerzo.js";
import Cl_mCena from "./Cl_mCena.js";

// Tipos para la carga de datos
interface iPlatoBase {
  codigo: string;
  origen: number;
  costo: number;
}
interface iAlmuerzoData extends iPlatoBase {
  llevaSopa: string;
}
interface iCenaData extends iPlatoBase {
  especialidad: number;
}

export default class Cl_controlador {
  public modelo: Cl_mRestaurante;
  public vista: Cl_vRestaurante;

  constructor(modelo: Cl_mRestaurante, vista: Cl_vRestaurante) {
    this.modelo = modelo;
    this.vista = vista;
    this.vista.controlador = this;
  }

  // **********************************
  // ** MÉTODOS PARA CARGA AUTOMÁTICA (Cl_index) **
  // **********************************

  public procesarAlmuerzoAutomatico(data: iAlmuerzoData) {
    const llevaSopa = data.llevaSopa.toString().toLowerCase() === "si";
    const plato = new Cl_mAlmuerzo({ ...data, llevaSopa: llevaSopa });
    this.procesar(plato);
  }

  public procesarCenaAutomatico(data: iCenaData) {
    const plato = new Cl_mCena({ ...data, especialidad: data.especialidad });
    this.procesar(plato);
  }

  // **********************************
  // ** MÉTODO PARA CARGA MANUAL (VISTA) **
  // **********************************

  public procesarPlatoManual(dataDetalle: {
    tipo: number;
    detalle: string | number | boolean;
  }) {
    // 1. Obtener datos comunes de la Vista base
    const vPlatoBase = this.vista.vPlato;
    const datosBase = {
      codigo: vPlatoBase.codigo,
      origen: vPlatoBase.origen,
      costo: vPlatoBase.costo,
    };

    // 2. Crear el objeto Modelo específico
    let plato;

    if (dataDetalle.tipo === 1) {
      // Es un Almuerzo
      const llevaSopa = dataDetalle.detalle.toString().toLowerCase() === "si";
      plato = new Cl_mAlmuerzo({ ...datosBase, llevaSopa: llevaSopa });
      this.vista.vAlmuerzo.limpiarInputs(); // Limpia solo el input específico
    } else if (dataDetalle.tipo === 2) {
      // Es una Cena
      const especialidad = +dataDetalle.detalle;
      plato = new Cl_mCena({ ...datosBase, especialidad: especialidad });
      this.vista.vCena.limpiarInputs(); // Limpia solo el input específico
    } else {
      return;
    }

    // 3. Procesar y Reportar
    vPlatoBase.limpiarInputsBase();
    this.procesar(plato);
  }

  // **********************************
  // ** MÉTODO CENTRAL DE PROCESAMIENTO **
  // **********************************

  private procesar(plato: Cl_mAlmuerzo | Cl_mCena) {
    this.modelo.procesarPlato(plato);

    this.vista.reportarPlato(plato);

    this.vista.reportarRestaurante({
      cntInternacionales: this.modelo.cntInternacionales,
      cntTotalPlatos: this.modelo.cntTotalPlatos,
      porcInternacionales: this.modelo.porcPlatosInternacionales(),
      acGananciaNacional: this.modelo.acGananciaNacional,
      acTotalPagado: this.modelo.acTotalPagado,
      porcGananciaNacional: this.modelo.porcGananciaNacional(),
    });
  }
}
