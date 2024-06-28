import { LitElement, html } from "lit";
import { customElement } from "lit/decorators";

@customElement('appraisal-data')
export class AppraisalData extends LitElement {
    override render() {
        return html`
                <!-- Data Tables, get data from RangeAg sources based on land id in step 1-->
                <appraisal-apn></appraisal-apn>
                <appraisal-ratings></appraisal-ratings>
                <appraisal-fixtures></appraisal-fixtures>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-data': AppraisalData;
    }
}