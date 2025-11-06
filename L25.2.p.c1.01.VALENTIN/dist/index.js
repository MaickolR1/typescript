import { CL_Controlador } from './CL_Controlador.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = new CL_Controlador();
    
    app.ejecutar();

    const form = document.getElementById('nuevo-ramo-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const data = {
                codigo: document.getElementById('codigo').value,
                costo: document.getElementById('costo').value,
                envase: document.getElementById('envase').value,
                ramoTipo: document.getElementById('ramoTipo').value,
                tipoExtra: document.getElementById('tipoExtra').value,
            };

            app.procesarRamoDesdeFormulario(data);
        });
    }
});