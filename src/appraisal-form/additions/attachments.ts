import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('appraisal-attachments')
export class AppraisalAttachments extends LitElement {
    override render() {
        return html`
            <h3>I'm the attachments portion of the appraisal form. This would always be something the user has the option to add.</h3>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-attachments': AppraisalAttachments;
    }
}