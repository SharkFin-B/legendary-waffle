import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('landmix-analysis')
export class LandMixAnalysis extends LitElement {
    override render() {
        return html`
            <h3>I'm the land-mix analysis portion of the appraisal form. This is where math comes in....ugh. This is where the rest of the original apn form data will go. This might also be soils but seems slightly wrong I'm a little confused.</h3>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'landmix-analysis': LandMixAnalysis;
    }
}