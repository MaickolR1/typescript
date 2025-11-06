export default class Cl_controlador {
    constructor(modelo, vista) {
      this.modelo = modelo;
      this.vista = vista;
    }
    procesarestudiante() {
      this.modelo.procesarestudiante(this.vista.procesarestudiante());
      this.vista.reportarestudiantes(
      this.modelo.porcentaje_aprobados(),
      this.modelo.estudmejornota(),
      this.modelo.porcentchicasaprobadas(),
      this.modelo.cantidadtotaldeestudiantes(),
      this.modelo.nombredelestudiantemenornota()
      );
    }
  }