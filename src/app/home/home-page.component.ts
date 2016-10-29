import { Component } from "../decorators";
const template = require("./home-page.component.html");

@Component({
    selector:"ce-home-page"
})
export class HomePageComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = template;
    }
}