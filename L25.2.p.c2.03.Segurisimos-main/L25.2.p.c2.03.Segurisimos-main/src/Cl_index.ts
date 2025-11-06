/**
 * SEGURÍSIMOS
 * Una empresa Aseguradora requiere un programa para el control de sus pólizas.
 * Cada póliza posee un número de identificación único, monto a asegurar y el
 * porcentaje de cobertura. El monto a pagar por las pólizas de Vida depende
 * la edad del cliente: menores de 18 años la póliza es el 5% del monto a
 * asegurar, caso contrario el 10%. Para los vehículos, el monto a pagar
 * por la póliza es el 7% si el año es menor que el 2000, y el 12% en otros
 * casos. Mostrar el Monto a Pagar por cada Póliza y el monto de la cobertura,
 * y por la Aseguradora el Promedio de Monto Pagado.
 * Se tienen los siguientes datos de prueba:
 * Pólizas de vida {id, montoAsegurar, porcentajeCobertura, edad}:
 * {22, 10000, 80, 15}
 * {11, 500, 90, 22}
 * {55, 2000, 70, 18}
 * {88, 1500, 90, 30}
 * Pólizas de Vehiculo {id, montoAsegurar, porcentajeCobertura, anio}:
 * {33, 2000, 80, 2000}
 * {90, 1500, 90, 2005}
 * {77, 1000, 90, 1995}
 * {44, 2500, 85, 2010}
 */
import Cl_mAseguradora from "./Cl_mAseguradora.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vAseguradora from "./Cl_vAseguradora.js";
import Cl_mVida from "./Cl_mVida.js";
import Cl_mVehiculo from "./Cl_mVehiculo.js";
import { polizasVida, polizasVehiculos } from "./_data.js";
export default class Cl_index {
  private controlador: Cl_controlador;
  constructor() {
    let vista = new Cl_vAseguradora();
    let modelo = new Cl_mAseguradora();
    this.controlador = new Cl_controlador(modelo, vista);
    vista.controlador = this.controlador;
    this.iniciarData();
  }
  iniciarData() {
    this.controlador.procesarPolizaVida(new Cl_mVida(polizasVida[0]));
    this.controlador.procesarPolizaVida(new Cl_mVida(polizasVida[1]));
    this.controlador.procesarPolizaVida(new Cl_mVida(polizasVida[2]));
    this.controlador.procesarPolizaVehiculo(
      new Cl_mVehiculo(polizasVehiculos[0])
    );
    this.controlador.procesarPolizaVehiculo(
      new Cl_mVehiculo(polizasVehiculos[1])
    );
    this.controlador.procesarPolizaVehiculo(
      new Cl_mVehiculo(polizasVehiculos[2])
    );
  }
}
