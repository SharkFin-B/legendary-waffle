import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('improvement-analysis')
export class ImprovementAnalysis extends LitElement {
    override render() {
        return html`
            <h3>I'm the improvement analysis portion of the appraisal form. Again, I don't think we can easily get this data.</h3>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'improvement-analysis': ImprovementAnalysis;
    }
}