export default class Cl_mEstudiante {
    private _nombre: string = "";
    private _cedula: string = "";
    private _mes: number = 0;
    private _nivel: number = 0;

    constructor({nombre = "", cedula = "", mes = 0, nivel = 0}) {
        this._nombre = nombre;
        this._cedula = cedula;
        this._mes = mes;
        this._nivel = nivel;
    }
    Monto():number{
        let monto:number = 0;
        switch (this._nivel) {
            case 1:
                monto = 50;
                break;
            case 2:
                monto = 100;
                break;
            default:
                monto = 0;
                break;
        }
        return monto * this._mes;
    }
    Adicional():number{
        let adicional:number = 0;
        if(this._nivel === 2){
            adicional = 20;
        }
        return adicional;
    }
    public set nombre(nombre:string){
        this._nombre = nombre;
    }
    public set cedula(cedula:string){
        this._cedula = cedula;
    }
    public set mes(mes:number){
        this._mes = mes;
    }
    public set nivel(nivel:number){
        this._nivel = nivel;
    }
    public get nombre():string{
        return this._nombre;
    }
    public get cedula():string{
        return this._cedula;
    }
    public get mes():number{
        return this._mes;
    }
    public get nivel():number{
        return this._nivel;
    }
    
}