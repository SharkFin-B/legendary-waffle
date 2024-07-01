import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./land-identification";
import "./map";

@customElement('appraisal-identification')
export class AppraisalIdentification extends LitElement {
    static override styles = css`
        :host {
            font-family: Barlow;
        }
        .identification {
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
            <h2>IDENTIFICATION</h2>
            <section class="identification">
                <!-- Identification, we would use RangeAg map and land id tools -->
                <appraisal-map></appraisal-map>
                <land-identification></land-identification>
            </section>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-identification': AppraisalIdentification;
    }
}