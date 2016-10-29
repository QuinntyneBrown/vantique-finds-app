let customElements:any;
const prefix: string = "ce";
const selector: string = "header";
let customInnerHTML = [
    "<style>", 
    require("./header.component.scss"), 
    "</style>", 
    require("./header.component.html")
    ].join(" ");

if(!document.head["createShadowRoot"])
    customInnerHTML = customInnerHTML.replace(":host", `${prefix}-${selector}`);

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
            this.innerHTML = customInnerHTML;
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
