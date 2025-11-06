/**El Colegio “Virgen de Coromoto” desea contratar sus servicios para que le elabore un software que
le permita llevar el control de las inscripciones de sus estudiantes, de tal manera que se pueda
informar entre otras cosas, cuál es el monto total que se debe cancelar.
El administrador del colegio indica que por cada estudiante que se inscriba se cuenta con la cédula,
nombre, mes en que está realizando la inscripción, donde. 1 Julio y 2 Septiembre; nivel que va a
cursar, donde: 1 Primaria y 2 Bachillerato. Así mismo, se sabe que el monto de la inscripción para
un estudiante de Primaria es de 50$ y Bachillerato es de 100$. Es importante resaltar, que para los
estudiantes que van a cursar Bachillerato, además del monto de la inscripción, se debe cancelar un
monto adicional por el material del curso de inglés de 20$.
Cada vez que se termine de procesar la inscripción del estudiante, se debe mostrar su cédula,
nombre y monto total a cancelar.
Además, es significativo para el colegio conocer: i) el porcentaje de representantes que realizaron
la inscripción en el mes de Julio, y ii) el monto final que queda en caja.
El administrador del colegio informa que procesa los siguientes estudiantes: (cedula, nombre, mes,
nivel), (111, Pedro, 1, 1), (222, Ana, 2, 2), (333, Luis, 1, 2), (444, Rita, 2, 1), (555, Juan, 1, 1).
**/
import Cl_vColegio from "./Cl_vColegio.js";
import Cl_mColegio from "./Cl_mColegio.js";
import Cl_controlador from "./Cl_controlador.js";
export default class Cl_principal {
    constructor() {
        const modelo = new Cl_mColegio();
        const vista = new Cl_vColegio();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}
