import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./sale";
import "./land-mix";
import "./income";
import "./improvement";

@customElement('appraisal-insights')
export class AppraisalInsights extends LitElement {
    static override styles = css`
        :host {
            font-family: Barlow;
        }
        .insights {
            border: 1px solid #6650a46a;
            border-radius: 10px;
        }
        h2 {
            padding: 0;
            margin: 0 0 0.5rem 0;
            color: #49454f;
        }
    `;

    override render() {
        return html`
            <h2>INSIGHTS</h2>
            <section class="insights">
                <!-- Analysis/Valuation/Insights, get from Growers Edge data team -->
                <sale-analysis></sale-analysis>
                <landmix-analysis></landmix-analysis>
                <income-analysis></income-analysis>
                <improvement-analysis></improvement-analysis>
            </section>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-insights': AppraisalInsights;
    }
}