import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/text-button.js';

@customElement('appraisal-ratings')
export class AppraisalRatings extends LitElement {
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
            display: grid;
            gap: 1rem;
        }

        .data-row {
            display: grid;
            grid-template-columns: auto 1fr;
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
                <p>I'm the ratings form portion of the appraisal form. I think I would be the soils section of the RangeAg Insights Report but I could be wrong. However, if this would be soils then this shouldn't be in the data section, it should be in the insights section.</p>

                <p>Row #1</p>
                <form  @submit=${this.alertValues}>
                    <section class="data-row">
                        <md-outlined-text-field
                            label="Name"
                            name="rating-name"
                            required
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Rating"
                            name="rating"
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
        const ratingName = data.get('rating-name') || '<empty>';
        const rating = data.get('rating') || '<empty>';

        alert(`Name: ${ratingName}, Rating: ${rating}`);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-ratings': AppraisalRatings;
    }
}