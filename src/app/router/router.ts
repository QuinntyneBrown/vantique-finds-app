let customElements:any;
let template = require("./router.html");

const prefix: string = "ce";
const selector: string = "router";

export class RouterComponent extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes () {
        return [
            "routes"
        ];
    }

    connectedCallback() {
		if(document.head["createShadowRoot"]) {
            this._root = (this as any).attachShadow({mode: 'open'});
            this._root.innerHTML = template;            
        } else {
            this.innerHTML = template;
        }  

        window.addEventListener('popstate', this._onChanged);
        //this._clearRoutes();
        //this._addRoutes();
        this._onChanged();
    }

    private _onChanged() {
        const path = window.location.pathname;        
    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {

        switch (name) {
            case "routes":
                this.routes = JSON.parse(newValue);
            break;
        }
        
        
    }

    private _routes;
    public set routes(value) {
        this._routes = value;
    }
    
    public get routes() {
        return this._routes;
    }
    
	private _root;
}

document.addEventListener("DOMContentLoaded",function() {
    (window as any).customElements.define(`${prefix}-${selector}`,RouterComponent);
});
