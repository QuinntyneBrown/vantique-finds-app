import {
    HeaderComponent,
    HomePageComponent,

    Router
} from "./app";


customElements.register("vf-router", Router);
customElements.register("vf-header", HeaderComponent);
customElements.register("vf-home-page", HomePageComponent);