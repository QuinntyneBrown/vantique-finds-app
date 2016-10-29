var template = require(".//header.component.html");
import { Component } from "../decorators";

@Component({
    selector:"ce-header"
})
export class HeaderComponent extends HTMLElement {
    constructor() {
        super();        
    }

    connectedCallback() {
        this.innerHTML = template;
    }
}

