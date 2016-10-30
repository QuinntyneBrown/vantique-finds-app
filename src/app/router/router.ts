let customElements:any;
let template = require("./router.html");

const prefix: string = "ce";
const selector: string = "router";

(function (history) {
    var pushState = history.pushState;
    history.pushState = function (state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({ state: state });
        }
        // ... whatever else you want to do
        // maybe call onhashchange e.handler
        return pushState.apply(history, arguments);
    }
})(window.history);

export class RouterComponent {
    constructor(private _root:any, private _routes:Array<{ path:string, component:any }>) {        
        window.addEventListener('popstate ', this._onChanged);
        (history as any).onpushstate = (e) => { this._onChanged(e.state); }
        this._onChanged();
    }
    
    private _onChanged(state?: any) {
        let path = window.location.pathname;

        if (state && state.route)
            path = state.route;
                      
        for (var i = 0; i < this._routes.length; i++) {
            if(path === this._routes[i].path) {
                this._setRouterElement(this._routes[i].component);    
            }
        }
    }

    private _setRouterElement(html:string) {
        this._rootAsHTML = document.createElement("div");
        this._rootAsHTML.innerHTML = this._root.innerHTML;        
        (this._rootAsHTML.querySelector("ce-router") as HTMLElement).innerHTML = html;
        this._root.innerHTML = this._rootAsHTML.innerHTML;
    }    


    private _rootAsHTML;
}

