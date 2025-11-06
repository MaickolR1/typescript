//**1. examen Se desea llevar un control de los estudiantes que 
// asisten a presentar un examen. Se tiene por cada 
//participante: nombre, cédula, sexo y nota. Se requiere 
//de un programa que permita el registro de esta 
//información, conociendo al principio de la ejecución el 
//valor del examen y el mínimo aprobatorio. 
//
//Estudiantes de prueba 
//nombre: 'Luis' 
//cedula: 1111 
//sexo: 'M' 
//nota: 12 
//nombre: 'Carla' 
//cedula: 2222 
//sexo: 'F' 
//nota: 16.5 
//nombre: Mery' 
//cedula: 3333 
//sexo: 'F' 
//Datos de inicialización para Cl_examen 
//valor: 20, 
//minAprueba: 9.6 
//Estructuras de datos recomendadas 
// Cl_examen: valor, minAprueba 
// Cl_estudiante: nombre, cedula (‘F’ - ‘M’), sexo 
//y nota 
//Primeros requerimientos 
// Porcentaje de aprobados 
// Estudiante con la mejor nota 
// Porcentaje de chicas aprobadas//

import Cl_Vexamen from "./Cl_Vexamen.js";
import Cl_Mexamen from "./Cl_Mexamen.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
    constructor() {
        let vista = new Cl_Vexamen();
        let valor = prompt("insertar el valor del examen");
        let minAprueba = prompt("insertar en minAprueba del examen");
        let modelo = new Cl_Mexamen(valor, minAprueba);
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;

    }

}

