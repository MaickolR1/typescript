import { CL_Controlador } from './CL_Controlador';

document.addEventListener('DOMContentLoaded', () => {
    const app = new CL_Controlador();
    
    app.ejecutar();

    const form = document.getElementById('nuevo-ramo-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const data = {
                codigo: (document.getElementById('codigo') as HTMLInputElement).value,
                costo: (document.getElementById('costo') as HTMLInputElement).value,
                envase: (document.getElementById('envase') as HTMLSelectElement).value,
                ramoTipo: (document.getElementById('ramoTipo') as HTMLSelectElement).value as 'flores' | 'frutas',
                tipoExtra: (document.getElementById('tipoExtra') as HTMLSelectElement).value,
            };

            app.procesarRamoDesdeFormulario(data);
        });
    }
});