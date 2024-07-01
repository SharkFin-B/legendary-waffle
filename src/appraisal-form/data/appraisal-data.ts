import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./apn";
import "./ratings";
import "./plantings";

@customElement('appraisal-data')
export class AppraisalData extends LitElement {
    static override styles = css`
        :host {
            font-family: Barlow;
        }
        .data {
            border: 1px solid #6650a46a;
            border-radius: 10px;
            display: grid;
            gap: 1rem;
        }
        h2 {
            padding: 0;
            margin: 0 0 0.5rem 0;
            color: #49454f;
        }
    `;

    override render() {
        return html`
            <h2>DATA</h2>
            <section class="data">
                <!-- Data Tables, get data from RangeAg sources based on land id in step 1-->
                <appraisal-apn></appraisal-apn>
                <appraisal-ratings></appraisal-ratings>
                <appraisal-plantings></appraisal-plantings>
            </section>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-data': AppraisalData;
    }
}