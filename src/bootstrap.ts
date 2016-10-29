export function bootstrap(options: { declarables: any[] }) {
    for (var i = 0; i < options.declarables.length; i++) {
        customElements.define(Reflect.getMetadata("selector", options.declarables[i], undefined), options.declarables[i]);
    }
}