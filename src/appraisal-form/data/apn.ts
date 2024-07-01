import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/text-button.js';

@customElement('appraisal-apn')
export class AppraisalAPN extends LitElement {
    static override styles = css`
        :host {
            font-family: Barlow;
        }

        .ratings {
            margin: 1.5rem;
        }

        p {
            font-style: italic;
            color: #6750a4;
            font-weight: 600;
        }

        .row.buttons {
            display: grid;
            grid-template-columns: auto 1fr 1fr;
            gap: 1rem;
        }

        md-text-button {
            align-self: flex-start;
            display: flex;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .data-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
        }

        md-text-button, md-outlined-button, md-filled-button {
            --_label-text-weight: 600;
            --_label-text-font: Barlow;
            --_outline-width: 2px;
            --_outline-color: #6750a4;
        }

        md-outlined-text-field {
            --_label-text-font: Barlow;
            --_input-text-font: Barlow;
        }
    `;

    override render() {
        return html`
            <section class="ratings">
                <p>I'm the apn form portion of the appraisal form. I should only be the table, as the other data will be calculated with/in the insights area.</p>

                <p>Row #1</p>
                <form  @submit=${this.alertValues}>
                    <section class="data-row">
                        <md-outlined-text-field
                            label="County"
                            name="county"
                            required
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="APN"
                            name="apn"
                            required
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Improvement Assessment"
                            name="improvement-assessment"
                            required
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Land Assessment"
                            name="land-assessment"
                            required
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Acres"
                            name="acres"
                            required
                        ></md-outlined-text-field>
                    </section>
                    <section class="row buttons">
                        <md-text-button type="reset">Reset</md-text-button>
                        <md-outlined-button type="button">Add Row</md-outlined-button>
                        <md-filled-button type="submit">Submit</md-filled-button>
                    </section>
                </form>
            </section>
        `;
    }

    alertValues(event: SubmitEvent) {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        const county = data.get('county') || '<empty>';
        const apn = data.get('apn') || '<empty>';
        const improvementAssessment = data.get('improvement-assessment') || '<empty>';
        const landAssessment = data.get('land-assessment') || '<empty>';
        const acres = data.get('acres') || '<empty>';

        alert(`County: ${county}, APN: ${apn}, Improvement Assessment: ${improvementAssessment}, Land Assessment: ${landAssessment}, Acres: ${acres}`);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-apn': AppraisalAPN;
    }
}