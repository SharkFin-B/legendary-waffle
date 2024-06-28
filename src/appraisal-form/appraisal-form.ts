import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import './appraisal-identification';
import './appraisal-data';
import './appraisal-insights';
import './appraisal-additions';

@customElement('appraisal-form') 
export class AppraisalForm extends LitElement {
    static override styles = css``;

    override render() {
        return html`
            <section class="appraisal-form">
                <appraisal-identification></appraisal-identification>
                <appraisal-data></appraisal-data>
                <appraisal-insights></appraisal-insights>
                <appraisal-additions></appraisal-additions>
            </section>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-form': AppraisalForm;
    }
}