export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarVehiculo() {
        this.modelo.procesarVehiculo(this.vista.procesarVehiculo());
        this.vista.reportarVehiculo({
            porcentajeTipo1: this.modelo.porcentajeTipo1(),
            porcentajeTipo2: this.modelo.porcentajeTipo2(),
            porcentajeTipo3: this.modelo.porcentajeTipo3(),
            montoMunicipio: this.modelo.montoMunicipio(),
        });
    }
}
