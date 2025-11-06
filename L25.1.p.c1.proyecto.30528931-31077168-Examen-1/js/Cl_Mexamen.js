export default class Cl_Mexamen {
    constructor(valor, minAprueba) {
        this.valor = valor;
        this.minAprueba = minAprueba;
        this.totalAprobados = 0;
        this.totalChicas = 0;
        this.totalChicasAprobadas = 0;
        this.totalEstudiantes = 0;
        this.mejorNota = 0;
        this.estudianteMejorNota = 0;

    }
    procesarestudiante(estudiante) {
        this.totalEstudiantes = this.totalEstudiantes + 1;
        if (estudiante.nota >= this.minAprueba) {
            this.totalAprobados = this.totalAprobados + 1;
        }
        if (estudiante.sexo == "F") {
            this.totalChicas = 1;
        }
        if (estudiante.nota >= this.minAprueba && estudiante.sexo == "F") {
            return this.totalChicasAprobadas = this.totalChicasAprobadas + 1;
        }

        if (estudiante.nota > this.mejorNota) {
            this.mejorNota = estudiante.nota;
            this.estudianteMejorNota = estudiante;
        }
    }

    porcentaje_aprobados() {
        this.nota >= this.minAprueba;
        this.totalAprobados = (this.totalAprobados / this.totalEstudiantes) * 100;
        return this.totalAprobados;

    }
    estudmejornota() {
        this.nota = this.totalEstudiantes > this.nota;
        return this.mejorNota;
    }

    porcentchicasaprobadas() {
        this.totalChicas = this.totalChicas / this.totalChicasAprobadas * 100;
        return this.totalChicas;

    }

    cantidadtotaldeestudiantes() {
        return this.totalEstudiantes
    }

    nombredelestudiantemenornota() {

        this.nombre = this.nota < this.totalEstudiantes;
    }

}