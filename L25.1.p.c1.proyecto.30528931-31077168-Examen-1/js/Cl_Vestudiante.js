export default class Cl_Vestudiante {
    constructor() {
      this.inNombre = document.getElementById("estudianteForm_inNombre");
      this.incedula = document.getElementById("estudianteForm_incedula");
      this.inSexo = document.getElementById("estudianteForm_inSexo");
      this.inNota = document.getElementById("estudianteForm_inNota");
      this.btProcesar = document.getElementById("estudianteForm_btProcesar");
    }
    get Nombre() {
      return this.inNombre.value;
    }
    get cedula() {
      return this.incedula.value;
    }
    get Sexo() {
      return this.inSexo.value;
    }
    get Nota() {
      return this.inNota.value;
       
    }
  }