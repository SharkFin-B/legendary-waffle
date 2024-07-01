import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import './identification/appraisal-identification';
import './data/appraisal-data';
import './insights/appraisal-insights';
import './additions/appraisal-additions';

@customElement('appraisal-form') 
export class AppraisalForm extends LitElement {
    static override styles = css`
        .appraisal-form {
            display: grid;
            gap: 1.5rem;
        }
        h1 {
            font-family: Barlow;
            color: #6750a4;
        }
    `;

    override render() {
        return html`
            <h1>Appraisal Form</h1>
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