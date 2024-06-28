import { LitElement, html } from "lit";
import { customElement } from "lit/decorators";

@customElement('appraisal-identification')
export class AppraisalIdentification extends LitElement {
    override render() {
        return html`
            <!-- Identification, we would use RangeAg map and land id tools -->
            <appraisal-map></appraisal-map>
            <land-identification></land-identification>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-identification': AppraisalIdentification;
    }
}