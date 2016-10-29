import "core-js/es6";
import "./app";

let customElements:any;
import { loadStyles } from "./app/utils";
let template = require("./vf.component.html");
let styles = require("./vf.component.scss");

const prefix: string = "ce";
const selector: string = "vf";
let customInnerHTML = ["<style>", styles, "</style>", template].join(" ");

if(!document.head["createShadowRoot"]) {
    styles = styles.replace(new RegExp(":host", 'g'), `${prefix}-${selector}`)
    loadStyles(styles);
}

export class VFComponent extends HTMLElement {
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
    (window as any).customElements.define(`${prefix}-${selector}`,VFComponent);
});
