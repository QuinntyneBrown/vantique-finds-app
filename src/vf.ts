import { HeaderComponent } from "./app/shared/header.component";
import {
    HomePageComponent,

    Router,
    View } from "./app";

const template = require("./vf.html");

class VF extends HTMLElement {
    constructor() {
        super();        
    }
    
    connectedCallback() {
        this.innerHTML = template;
    }

}
customElements.define("vf-app", VF);

customElements.define("ce-home-page", HomePageComponent);

customElements.define("ce-header", HeaderComponent);
customElements.define("ce-router", Router);
customElements.define("ce-view", View);

