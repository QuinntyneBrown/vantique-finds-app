import 'core-js/es6';

import { HeaderComponent } from "./app/shared/header.component";
import {
    HomePageComponent,

    Router,
    View
} from "./app";


import { loadStyles } from "./app/utils/load-css";

const template = require("./vf.html");


loadStyles(require("./vf.scss"));

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

