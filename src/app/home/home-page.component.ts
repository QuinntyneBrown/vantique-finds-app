const template = require("./home-page.component.html");

export class HomePageComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = template;
    }
}