import { loadStyles } from "../utils";
let template = require("./header.component.html");
let styles = require("./header.component.scss");

let customElements:any;
const prefix: string = "ce";
const selector: string = "header";


let customInnerHTML = [
    "<style>", 
    require("./header.component.scss"), 
    "</style>", 
    require("./header.component.html")
    ].join(" ");

if(!document.head["createShadowRoot"]) {
    styles = styles.replace(new RegExp(":host", 'g'), `${prefix}-${selector}`)
    loadStyles(styles);
}
    

export class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes () {
        return [];
    }

    connectedCallback() {

        if(document.head["createShadowRoot"]) {
            let shadowRoot = (this as any).attachShadow({mode: 'open'});
            shadowRoot.innerHTML = customInnerHTML;            
        } else {
            this.innerHTML = template;
        }  
    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {

    }
}

document.addEventListener("DOMContentLoaded",function() {
    (window as any).customElements.define(`${prefix}-${selector}`,HeaderComponent);
});
