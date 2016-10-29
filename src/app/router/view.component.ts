import { loadStyles } from "../utils";
let customElements:any;
let template = require("./view.component.html");

const prefix: string = "ce";
const selector: string = "view";

export class ViewComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes () {
        return [];
    }

    connectedCallback() {
		if(document.head["createShadowRoot"]) {
            this._root = (this as any).attachShadow({mode: 'open'});
            this._root.innerHTML = template;            
        } else {
            this.innerHTML = template;
        }  
    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {

    }

	private _root;
}

document.addEventListener("DOMContentLoaded",function() {
    (window as any).customElements.define(`${prefix}-${selector}`,ViewComponent);
});
