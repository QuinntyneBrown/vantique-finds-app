let customElements: any;
let template = require("./route-link.html");

const prefix: string = "ce";
const selector: string = "route-link";
let customInnerHTML = [template].join(" ");

export class RouteLink extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [
            "href"
        ];
    }

    connectedCallback() {
        var _innerText = this.innerText;
        this._root = (this as any).attachShadow({ mode: 'open' });
        var el = document.createElement("div");
        el.innerHTML = customInnerHTML;
        el.innerText = _innerText;
        this._root.innerHTML = el.innerHTML;

        this.addEventListener("click", (e) => {
            window.history.pushState({ route:this._href }, null, this._href);
        });
        
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name, oldValue, newValue) {        
        this._href = newValue;
    }
    private _href: string;
    private _root;
}

document.addEventListener("DOMContentLoaded", function () {
    (window as any).customElements.define(`${prefix}-${selector}`, RouteLink);
});
