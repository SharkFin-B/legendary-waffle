import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/radio/radio.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';

@customElement('land-identification')
export class LandIdentification extends LitElement {
    static override styles = css`
        :host {
            font-family: Barlow;
        }

        .land-identification {
            margin: 1.5rem;
        }

        p {
            font-style: italic;
            color: #6750a4;
            font-weight: 600;
        }

        form { 
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
        }

        .radio-group {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .checkbox-group {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
        }
        
        .row.buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        md-text-button, md-outlined-button {
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
            <section class="land-identification">
                <p>I'm the land identification form portion of the appraisal form. Only has fields from the AgWare software, but will probably not contain this info later on if we do this.</p>

                <form @submit=${this.alertValues}>
                    <md-outlined-text-field
                        label="Sale Index"
                        name="sale-index"
                        required
                    ></md-outlined-text-field>
                    <md-outlined-text-field
                        label="Sale Category"
                        name="sale-category"
                    ></md-outlined-text-field>
                    <md-outlined-text-field
                        label="Access Group"
                        name="access-group"
                        required
                    ></md-outlined-text-field>
                    <md-outlined-text-field
                        label="Prior Index"
                        name="prior-index"
                    ></md-outlined-text-field>
                    <md-outlined-text-field
                        label="Primary Commodity"
                        name="primary-commodity"
                    ></md-outlined-text-field>
                    <md-outlined-text-field
                        label="Assured Grazing"
                        name="assured-grazing"
                    ></md-outlined-text-field>
                    <md-outlined-text-field
                        label="Rule Set"
                        name="rule-set"
                    ></md-outlined-text-field>
                    <section class="radio-group">
                        <div class="unimproved-sale">
                            <md-radio name="sale-type" value="unimproved" id="unimproved-sale"></md-radio>
                            <label for="unimproved-sale">Unimproved</label>
                        </div>
                        <div class="improved-sale">
                            <md-radio name="sale-type" value="improved" id="improved-sale"></md-radio>
                            <label for="improved-sale">Improved</label>
                        </div>
                    </section>
                    <section class="checkbox-group">
                        <label>
                            <md-checkbox aria-label="Sale is a lease" name="lease"></md-checkbox>
                            Lease
                        </label>
                        <label>
                            <md-checkbox aria-label="Resale" name="resale"></md-checkbox>
                            Resale
                        </label>
                        <label>
                            <md-checkbox aria-label="Private Sale" name="private-sale"></md-checkbox>
                            Private Sale
                        </label>
                    </section>
                    <section class="row buttons">
                        <md-text-button type="reset">Reset</md-text-button>
                        <md-outlined-button type="submit">Submit</md-outlined-button>
                    </section>
                </form>
            </section>
        `;
    }

    alertValues(event: SubmitEvent) {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        const index = data.get('sale-index') || '<empty>';
        const category = data.get('sale-category') || '<empty>';
        const ruleSet = data.get('rule-set') || '<empty';
        const accessGroup = data.get('access-group') || '<empty>';
        const priorIndex = data.get('prior-index') || '<empty>';
        const primaryCommodity = data.get('primary-commodity') || '<empty>';
        const grazing = data.get('assured-grazing') || '<empty>';
        const saleType = data.get('sale-type') || '<empty>';
        const privateSale = data.get('private-sale') || '<empty>';
        const lease = data.get('lease') || '<empty>';
        const resale = data.get('resale') || '<empty>';

        alert(`Sale Index: ${index}, Sale Category: ${category}, Rule Set: ${ruleSet}, Access Group: ${accessGroup}, Prior Index: ${priorIndex}, Primary Commodity: ${primaryCommodity}, Assured Grazing: ${grazing}, Sale Type: ${saleType}, My Private Sale: ${privateSale}, Lease: ${lease}, Resale: ${resale}`);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'land-identification': LandIdentification;
    }
}