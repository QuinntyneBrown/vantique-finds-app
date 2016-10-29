import 'core-js/es6';
import 'reflect-metadata';
import { bootstrap } from "./bootstrap";
import * as app from "./app";
import { loadStyles } from "./app/utils/load-css";
import { Component } from "./app/decorators";

const template = require("./vf.html");
loadStyles(require("./vf.scss"));

@Component({
    selector:"ce-app"
})
class VF extends HTMLElement {
    constructor() {
        super();        
    }
    
    connectedCallback() {
        this.innerHTML = template;
    }

}

bootstrap({
    declarables: [
        VF,
        app.HeaderComponent,
        app.HomePageComponent,
        app.Router,
        app.View
    ]
})

