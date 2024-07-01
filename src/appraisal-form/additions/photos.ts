import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('appraisal-photos')
export class AppraisalPhotos extends LitElement {
    override render() {
        return html`
            <h3>I'm the photos portion of the appraisal form. This would always be something the user has the option to add.</h3>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-photos': AppraisalPhotos;
    }
}