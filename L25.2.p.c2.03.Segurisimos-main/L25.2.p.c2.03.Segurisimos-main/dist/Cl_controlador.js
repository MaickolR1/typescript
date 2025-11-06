import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_mVida from "./Cl_mVida.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPolizaVida(data) {
        let mVida = new Cl_mVida({
            id: data.id,
            montoAsegurar: data.montoAsegurar,
            porcentajeCobertura: data.porcentajeCobertura,
            edad: data.edad,
        });
        this.modelo.procesarPoliza(mVida);
        this.reportarPoliza({ mPoliza: mVida });
    }
    procesarPolizaVehiculo(data) {
        let mVehiculo = new Cl_mVehiculo({
            id: data.id,
            montoAsegurar: data.montoAsegurar,
            porcentajeCobertura: data.porcentajeCobertura,
            anio: data.anio,
        });
        this.modelo.procesarPoliza(mVehiculo);
        this.reportarPoliza({ mPoliza: mVehiculo });
    }
    reportarPoliza({ mPoliza }) {
        this.vista.reportarPoliza({
            dataPoliza: mPoliza.toJSON(),
            totalPagado: this.modelo.totalPagado(),
            cantidadPolizas: this.modelo.cantidadPolizas(),
            promedioMontoPagado: this.modelo.promedioMontoPagado(),
        });
        this.vista.show();
    }
}
