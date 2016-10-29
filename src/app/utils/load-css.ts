export function loadStyles(styles) {    
    function addStyleTagToHead() {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(styles));
        document.head.appendChild(style);
    }

    if (document.readyState === "complete" || document.readyState === 'interactive') {            
        addStyleTagToHead();
    }
    else {
        function onDocumentLoad() {                
            addStyleTagToHead();
            window.removeEventListener("DOMContentLoaded", onDocumentLoad);
        }
        window.addEventListener("DOMContentLoaded", onDocumentLoad);
    }    
}