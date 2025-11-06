export class CL_vRamo {
    mostrarRamo(ramo) {
        console.log(`--- Ramo Procesado ---`);
        console.log(`  Código: ${ramo.getCodigo()}`);
        console.log(`  Tipo: ${ramo.getTipoRamo()}`);
        console.log(`  Precio Final: $${ramo.getPrecioVenta().toFixed(2)}`);
        console.log(`------------------------`);
    }
}