/**
 * 7.	PEAJE CARDENAL
 * El peaje cardenal cobra 3 tipos de tarifas (1, 2 ó 3) de vehículos:
 * 1=bs.10 particulares, 2=bs.20 transporte, 3=bs.50 carga.
 * Conociendo la placa y el tipo de vehículo se desea informar, por cada vehículo:
 * su tarifa a pagar y por el peaje: el porcentaje de cada tipo de vehículo y el
 * monto total para el municipio, sabiendo que es el 40% de todo lo cobrado.
 * Al ser consultada por la forma como desean que se presente la salida, el peaje
 * cardenal suministra el siguiente formato, sobre la base de los siguientes datos:
 * (placa, tipo vehículo)
 * (KBS11E, 1) (XXES12, 2) (YXZQE1, 3) (KBS23E, 1)
 * Vehículo con placa KBS11E su tarifa a pagar 10 Bs
 * Vehículo con placa XXES12 su tarifa a pagar 20 Bs
 * Vehículo con placa YXZQE1 su tarifa a pagar 50 Bs
 * Vehículo con placa KBS23E su tarifa a pagar 10 Bs
 *
 * Porcentaje de vehículo tipo particular 50%
 * Porcentaje de vehículo tipo transporte 25%
 * Porcentaje de vehículo tipo carga 25%
 * Monto total para el municipio: 36 Bs
 */
import Cl_vPeaje from "./Cl_vPeaje.js";
import Cl_mPeaje from "./Cl_mPeaje.js";
import Cl_controlador from "./Cl_controlador.js";
export default class Cl_principal {
    constructor() {
        let vista = new Cl_vPeaje();
        let modelo = new Cl_mPeaje();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}
