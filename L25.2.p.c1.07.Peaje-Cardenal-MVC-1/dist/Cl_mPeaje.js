export default class Cl_mPeaje {
    constructor() {
        this.acTarifas = 0;
        this.cntVehiculos = 0;
        this.cntTipo1 = 0;
        this.cntTipo2 = 0;
        this.cntTipo3 = 0;
    }
    procesarVehiculo(vehiculo) {
        const tarifa = vehiculo.tarifaAPagar();
        this.acTarifas += tarifa;
        this.cntVehiculos++;
        if (vehiculo.tipo === 1)
            this.cntTipo1++;
        if (vehiculo["tipo"] === 2)
            this.cntTipo2++;
        if (vehiculo.tipo === 3)
            this.cntTipo3++;
    }
    porcentajeTipo1() {
        if (this.cntVehiculos === 0)
            return 0;
        return (this.cntTipo1 / this.cntVehiculos) * 100;
    }
    porcentajeTipo2() {
        if (this.cntVehiculos === 0)
            return 0;
        return (this.cntTipo2 / this.cntVehiculos) * 100;
    }
    porcentajeTipo3() {
        if (this.cntVehiculos === 0)
            return 0;
        return (this.cntTipo3 / this.cntVehiculos) * 100;
    }
    montoMunicipio() {
        return this.acTarifas * 0.4;
    }
}
