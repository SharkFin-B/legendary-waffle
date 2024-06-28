import { LitElement, html } from "lit";
import { customElement } from "lit/decorators";

@customElement('appraisal-insights')
export class AppraisalInsights extends LitElement {
    override render() {
        return html`
                <!-- Analysis/Valuation/Insights, get from Growers Edge data team -->
                <sale-analysis></sale-analysis>
                <landmix-analysis></landmix-analysis>
                <income-anaysis></income-anaysis>
                <improvement-analysis></improvement-analysis>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-insights': AppraisalInsights;
    }
}