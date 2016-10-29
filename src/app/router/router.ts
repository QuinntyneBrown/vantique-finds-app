let customElements:any;
let template = require("./router.html");

const prefix: string = "ce";
const selector: string = "router";

export class RouterComponent {
    constructor(element:HTMLElement, private _routes:Array<{ path:string, component:any }>) {

        this._element = element;


    }

    private _element:HTMLElement;

    public connectedCallback() {
        window.addEventListener('popstate', this._onChanged);
        //this._clearRoutes();
        //this._addRoutes();
        this._onChanged();
        return this._element;
    }

    private _onChanged() {
        const path = window.location.pathname;        
        for(var i =0; i < this._routes.length; i++) {
            if(this._routes[i].path == "/") {
                var divEl = document.createElement("div");
                divEl.innerHTML = "<ce-home-page></ce-home-page>";                  
                this._element.appendChild(divEl);
            }
        }
    }
    
	private _root;
}

