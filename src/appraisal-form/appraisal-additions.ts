import { LitElement, html } from "lit";
import { customElement } from "lit/decorators";

@customElement('appraisal-additions')
export class AppraisalAdditions extends LitElement {
    override render() {
        return html`
            <!-- Miscellaneous Details, allow user to upload or add whatever they want -->
            <appraisal-comments></appraisal-comments>
            <appraisal-photos></appraisal-photos>
            <appraisal-attachments></appraisal-attachments>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-additions': AppraisalAdditions;
    }
}