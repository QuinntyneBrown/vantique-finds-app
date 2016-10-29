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
        new RouterComponent(this._root,[
            { "path":"/","component":"<ce-home-page></ce-home-page>" },
            { "path": "/about", "component":"<ce-about-page></ce-about-page>"}
        ]);            

        setTimeout(() => {
            var navigate = function (path) {
                var current = window.location.href;
                window.location.href = current.replace(/(.*)$/, '') + path;
            }

            //navigate("about");
        }, 1000);
    }


    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {

    }
}

document.addEventListener("DOMContentLoaded",function() {
    (window as any).customElements.define(`${prefix}-${selector}`,VFComponent);
});
