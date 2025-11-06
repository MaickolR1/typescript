export class CL_vRamoFlores {
    mostrarRamo(ramo, outputId = 'ramos-individuales') { 
        const resultadoDiv = document.getElementById(outputId);
        if (!resultadoDiv) return;

        const p = document.createElement('p');
        p.innerHTML = `<strong>Ramo de Flores (Cód. ${ramo.getCodigo()})</strong> | Tipo: ${ramo.esNatural() ? 'NATURAL (+8%)' : 'ARTIFICIAL (-10%)'} | Envase Mediano: ${ramo.esEnvaseMediano() ? 'Sí' : 'No'} | Precio Final: <strong>$${ramo.getPrecioVenta().toFixed(2)}</strong>`;
        resultadoDiv.appendChild(p);
    }
}