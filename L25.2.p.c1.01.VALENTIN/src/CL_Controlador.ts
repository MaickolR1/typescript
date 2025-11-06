import { CL_mTienda } from './CL_mTienda';
import { CL_mRamoFlores } from './CL_mRamoFlores';
import { CL_mRamoFrutas } from './CL_mRamoFrutas';
import { CL_mRamo } from './CL_mRamo';
import { CL_vTienda } from './CL_vTienda';
import { CL_vRamoFlores } from './CL_vRamoFlores';
import { CL_vRamoFrutas } from './CL_vRamoFrutas';

interface FormData {
    codigo: string;
    costo: string;
    envase: string;
    ramoTipo: 'flores' | 'frutas';
    tipoExtra: string;
}

export class CL_Controlador {
    private tienda: CL_mTienda;
    private vTienda: CL_vTienda;
    private vRamoFlores: CL_vRamoFlores;
    private vRamoFrutas: CL_vRamoFrutas;
    
    private todosLosRamos: CL_mRamo[] = [];

    constructor() {
        this.tienda = new CL_mTienda();
        this.vTienda = new CL_vTienda();
        this.vRamoFlores = new CL_vRamoFlores();
        this.vRamoFrutas = new CL_vRamoFrutas();
    }

    public ejecutar(): void {
        this.todosLosRamos = [
            new CL_mRamoFlores('22', 100.00, 2, 'A'), 
            new CL_mRamoFlores('11', 50.00, 3, 'A'),  
            new CL_mRamoFlores('55', 150.00, 1, 'N'), 
            new CL_mRamoFlores('88', 200.00, 2, 'N'), 
            new CL_mRamoFrutas('44', 100.00, 2, true), 
            new CL_mRamoFrutas('33', 50.00, 3, false),
            new CL_mRamoFrutas('77', 200.00, 2, false),
            new CL_mRamoFrutas('44', 150.00, 1, true),
        ];

        this.reprocesarTodo(this.todosLosRamos);
    }
    
    public procesarRamoDesdeFormulario(data: FormData): void {
        let nuevoRamo: CL_mRamo | null = null;
        const envaseNum = Number(data.envase);
        const costoNum = Number(data.costo);
        const outputDiv = document.getElementById('nuevo-ramo-individual');
        
        if (outputDiv) {
            outputDiv.innerHTML = ''; 
        }

        if (data.ramoTipo === 'flores') {
            const tipo = data.tipoExtra === 'A' || data.tipoExtra === 'N' ? data.tipoExtra : 'A';
            nuevoRamo = new CL_mRamoFlores(data.codigo, costoNum, envaseNum, tipo as 'A' | 'N');
            this.vRamoFlores.mostrarRamo(nuevoRamo as CL_mRamoFlores, 'nuevo-ramo-individual');
            
        } else if (data.ramoTipo === 'frutas') {
            const llevaExtra = data.tipoExtra === 'SI';
            nuevoRamo = new CL_mRamoFrutas(data.codigo, costoNum, envaseNum, llevaExtra);
            this.vRamoFrutas.mostrarRamo(nuevoRamo as CL_mRamoFrutas, 'nuevo-ramo-individual');
        }
        
        if (nuevoRamo) {
            this.todosLosRamos.push(nuevoRamo);
            this.reprocesarTodo(this.todosLosRamos);
        }
    }

    private reprocesarTodo(ramos: CL_mRamo[]): void {
        this.tienda = new CL_mTienda();
        
        ramos.forEach(ramo => {
            this.tienda.procesarRamo(ramo);
        });

        this.actualizarResultadosGlobales();
    }

    private actualizarResultadosGlobales(): void {
        const totalVendido = this.tienda.getTotalVendido();
        const porcentaje = this.tienda.getPorcentajeFloresNaturalesMedianas();
        const numNaturales = this.tienda.getFloresNaturales();
        const numNaturalesMedianas = this.tienda.getFloresNaturalesMedianas();

        this.vTienda.mostrarResultadosFinales(totalVendido, porcentaje, numNaturales, numNaturalesMedianas);
    }
}