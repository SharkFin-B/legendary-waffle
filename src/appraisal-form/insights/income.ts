import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('income-analysis')
export class IncomeAnalysis extends LitElement {
    override render() {
        return html`
            <h3>I'm the income analysis portion of the appraisal form. I don't think there is an easy way for us to get this info, might have to be an area of inputs for users.</h3>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'income-analysis': IncomeAnalysis;
    }
}