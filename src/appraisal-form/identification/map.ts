import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('appraisal-map') 
export class AppraisalMap extends LitElement {
    static override styles = css`
        :host {
            font-family: Barlow;
        }
        .map {
            margin: 0 1.5rem;
        }
        p {
            color: #49454f;
            font-weight: 600;
        }
    `;

    override render() {
        return html`
            <section class="map">
                <p>I'm the appraisal map form portion of the appraisal form. I would ideally be the RangeAg map component and fill in some of the data for the other portions.</p>
            </section>
        `;
    }
}