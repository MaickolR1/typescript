import { CL_mRamoFrutas } from './CL_mRamoFrutas';

export class CL_vRamoFrutas {
    public mostrarRamo(ramo: CL_mRamoFrutas, outputId: string = 'ramos-individuales'): void {
        const resultadoDiv = document.getElementById(outputId);
        if (!resultadoDiv) return;
        
        const extra = ramo.getTipoRamo().includes('Con Extra');
        const p = document.createElement('p');
        p.innerHTML = `<strong>Ramo de Frutas (Cód. ${ramo.getCodigo()})</strong> | Extra: ${extra ? 'Sí (-15%)' : 'No'} | Envase Mediano: ${ramo.esEnvaseMediano() ? 'Sí' : 'No'} | Precio Final: <strong>$${ramo.getPrecioVenta().toFixed(2)}</strong>`;
        resultadoDiv.appendChild(p);
    }
}