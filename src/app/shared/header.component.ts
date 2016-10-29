var template = require(".//header.component.html");

export class HeaderComponent extends HTMLElement {
    constructor() {
        super();        
    }

    connectedCallback() {
        this.innerHTML = template;
    }
}

