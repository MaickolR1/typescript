export class CL_vTienda {
    mostrarResultadosFinales(totalVendido, porcentaje, numNaturales, numNaturalesMedianas) {
        const totalDiv = document.getElementById('resultado-total-vendido');
        const porcentajeDiv = document.getElementById('resultado-porcentaje');
        const naturalesDiv = document.getElementById('cantidad-naturales');
        const naturalesMedianasDiv = document.getElementById('cantidad-naturales-medianas');

        if (totalDiv) {
            totalDiv.textContent = `$${totalVendido.toFixed(2)}`;
        }
        if (porcentajeDiv) {
            porcentajeDiv.textContent = `${porcentaje.toFixed(2)}%`;
        }
        if (naturalesDiv) {
            naturalesDiv.textContent = numNaturales;
        }
        if (naturalesMedianasDiv) {
            naturalesMedianasDiv.textContent = numNaturalesMedianas;
        }
    }
}