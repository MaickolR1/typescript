import Cl_Vestudiante from "./Cl_Vestudiante.js";
import Cl_Mestudiante from "./Cl_Mestudiante.js";
export default class Cl_Vexamen {
  constructor() {
    this.controlador = null;
    this.salida = document.getElementById("mainForm_salida");
    this.Vestudiante = new Cl_Vestudiante();
    this.Vestudiante.btProcesar.onclick = () => this.controlador.procesarestudiante();

  }
  procesarestudiante() {
    this.Cl_Mestudiante = new Cl_Mestudiante({
      nombre: this.Vestudiante.Nombre,
      cedula: this.Vestudiante.cedula,
      sexo: this.Vestudiante.Sexo,
      nota: this.Vestudiante.Nota
    });
    return this.Cl_Mestudiante;
  }
  reportarestudiantes(porcentaje_aprobados, estudmejorNota, porcentchicasaprobadas, cantidadtotaldeestudiantes, nombredelestudiantemenornota) { {
    this.salida.innerHTML = `
   porcentaje de aprobados: ${porcentaje_aprobados}%<br>
   estudiante con la mejor nota:${estudmejorNota}<br>
   porcentaje de chicas aprobadas: ${porcentchicasaprobadas}%<br>
   cantidad de estudiantes : ${cantidadtotaldeestudiantes}<br>
   nombre del estudiante con menor nota ${nombredelestudiantemenornota}<br>
    `;
  }
}
}