import "./app/home";

let customElements:any;
const prefix: string = "ce";
const selector: string = "vf";
let customInnerHTML = [
    "<style>", 
    require("./vf.component.scss"), 
    "</style>", 
    require("./vf.component.html")
    ].join(" ");

if(!document.head["createShadowRoot"])
    customInnerHTML = customInnerHTML.replace(":host", `${prefix}-${selector}`);

export class VfComponent extends HTMLElement {
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
            this.innerHTML = customInnerHTML;
        }  
    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {

    }
}

document.addEventListener("DOMContentLoaded",function() {
    (window as any).customElements.define(`${prefix}-${selector}`,VfComponent);
});
