export default class Cl_vGeneral {
    constructor({ formName }) {
        this._formName = "";
        this._controlador = null;
        this.vista = null;
        this.formName = formName;
    }
    set formName(formName) {
        this._formName = formName;
    }
    get formName() {
        return this._formName;
    }
    // Aceptar null aquí para evitar error al reasignar desde la vista principal
    set controlador(controlador) {
        this._controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    crearHTMLElement({ elementName, isForm = false, }) {
        let domElementName = isForm
            ? elementName
            : `${this.formName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
        if (!domElement) {
            let msg = `Elemento ${domElementName} no encontrado`;
            throw new Error(msg);
        }
        return domElement;
    }
    crearHTMLInputElement({ elementName, }) {
        return this.crearHTMLElement({ elementName });
    }
    show({ ver = true }) {
        if (this.vista) {
            this.vista.style.display = ver ? "block" : "none";
        }
    }
}
