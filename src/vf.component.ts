import "core-js/es6";
import "./app";
import { 
    RouterComponent,
    HomePageComponent

} from "./app";

let customElements:any;
import { loadStyles } from "./app/utils";
let template = require("./vf.component.html");
let styles = require("./vf.component.scss");

const prefix: string = "ce";
const selector: string = "vf";

export class VFComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes () {
        return [];
    }

    _root:any;

    connectedCallback() {
        this._root  = (this as any).attachShadow({mode: 'open'});
        this._root.innerHTML = ["<style>", styles, "</style>", template].join(" ");
        var el = document.createElement("div");
        el.innerHTML = this._root.innerHTML;        
        var router = new RouterComponent(el,[{ "path":"/","component":HomePageComponent }]);        
        el.querySelector("ce-router").appendChild(router.connectedCallback().firstChild as HTMLElement);
        this._root.innerHTML = el.innerHTML;
    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {

    }
}

document.addEventListener("DOMContentLoaded",function() {
    (window as any).customElements.define(`${prefix}-${selector}`,VFComponent);
});
