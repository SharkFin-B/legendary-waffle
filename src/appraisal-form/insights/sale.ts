import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/text-button.js';

@customElement('sale-analysis')
export class SaleAnalysis extends LitElement {
    static override styles = css`
        :host {
            font-family: Barlow;
        }

        .analysis {
            margin: 1.5rem;
        }

        form {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
        }

        .column {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        p {
            font-style: italic;
            color: #6750a4;
            font-weight: 600;
        }

        md-outlined-text-field {
            --_label-text-font: Barlow;
            --_input-text-font: Barlow;
        }
        
        md-text-button {
            align-self: flex-start;
            display: flex;
        }

        .data-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
            width: 100%;
        }

        md-text-button, md-outlined-button, md-filled-button {
            --_label-text-weight: 600;
            --_label-text-font: Barlow;
            --_outline-width: 2px;
            --_outline-color: #6750a4;
        }
    `;

    override render() {
        return html`
            <section class="analysis">
                <p>I'm the sales analysis portion of the appraisal form. I hold a ton of data and I think we can get most of it from open sources (aka usda quickstats). Basically the id info would then pull the latest sale of the chosen land.</p>

                <form>
                    <section class="column">
                        <md-outlined-text-field
                            label="Grantor"
                            name="grantor"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Granteee"
                            name="grantee"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Sale Date"
                            name="sale-date"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="DOM"
                            name="dom"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Prior Sale Date"
                            name="prior-sale-date"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Prior CEV Price"
                            name="prior-cev-price"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Analysis Code"
                            name="analysis-code"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Source"
                            name="source"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Motivation"
                            name="motivation"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Highest & Best Use"
                            name="best-use"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Address"
                            name="address"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="City"
                            name="city"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="State"
                            name="state"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Zip Code"
                            name="zip-code"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Region / Area / Zone"
                            name="region-area-zone"
                        ></md-outlined-text-field>
                    </section> 
                    <section class="column">
                        <md-outlined-text-field
                            label="Location"
                            name="location"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Sale Price"
                            name="sale-price"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Other Contributions"
                            name="other-contributions"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Net Sale Price"
                            name="net-sale-price"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Price Per Deeded Acre"
                            name="deeded-acre"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Financing"
                            name="financing"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Percent Financing Adjustment"
                            name="fin-adj"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Section | Township | Range"
                            name="str"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Sales Comparison Analysis (SCA) Unit Type"
                            name="sca-unit-type"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Effective Unit Size"
                            name="effective-unit-size"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="SCA Price Per Unit"
                            name="sca-price"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Multiplier Unit"
                            name="multiplier-unit"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Multiplier Number"
                            name="multiplier-number"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Legal Access"
                            name="legal-access"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Physical Access"
                            name="physical-access"
                        ></md-outlined-text-field>
                    </section> 
                    <section class="column">
                        <md-outlined-text-field
                            label="View"
                            name="view"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Utilities"
                            name="utilities"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Tax ID"
                            name="tax-id"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Recording ID"
                            name="recording-id"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Property Type"
                            name="property-type"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="CEV (AVM Valuation?) Price"
                            name="analysis-code"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Total Assessed Value"
                            name="total-assessed-value"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Total Ratio"
                            name="total-ratio"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Total Land Assessment"
                            name="total-land-assessment"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Land Contribution"
                            name="land-contribution"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Land Ratio"
                            name="land-ratio"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Total Improvement Assessment"
                            name="total-improvement-assessment"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Improvement Contribution"
                            name="improvement-contribution"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Improvement Ratio"
                            name="improvement-ratio"
                        ></md-outlined-text-field>
                        <md-outlined-text-field
                            label="Legal Description"
                            name="legal-description"
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
}

declare global {
    interface HTMLElementTagNameMap {
        'sale-analysis': SaleAnalysis;
    }
}