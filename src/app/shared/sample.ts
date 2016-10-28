export class Sample extends HTMLElement {
    constructor() {
        super();
    }
    createShadowRoot: any;

    createdCallback() {
        var template = document.querySelector('#t1');
        var clone = (template as any).content.cloneNode(true);
        var root = this.createShadowRoot();
        root.appendChild(clone);
        console.log("View created");
    }

    attachedCallback() {
        console.log("View attached");
    }

    detachedCallback() {
        console.log("View detached");
    }

    attributeChangedCallback(attrName, oldVal, newVale) {
        console.log(`attribute ${attrName} changed from ${oldVal} to ${newVale}`);
    }
}