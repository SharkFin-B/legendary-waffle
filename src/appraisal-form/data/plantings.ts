import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/radio/radio.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/text-button.js';

@customElement('appraisal-plantings')
export class AppraisalPlantings extends LitElement {
    static override styles = css`
        :host {
            font-family: Barlow;
        }

        .plantings {
            margin: 1.5rem;
        }

        p {
            font-style: italic;
            color: #6750a4;
            font-weight: 600;
        }
        
        .table { 
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
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

        .table-type {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .support-land-value, .rcn-basis {
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

    @state() tableType: string = 'blocks';

    renderBlocksTable() {
        return html`
            <md-outlined-text-field
                label="Block Index"
                name="block-index"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Gross Acres"
                name="gross-acres"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Net Acres"
                name="net-acres"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Type"
                name="crop-type"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Variety"
                name="variety"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Spacing"
                name="spacing"
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Rootstock"
                name="rootstock"
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Year Planted"
                name="year-planted"
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Effective Age"
                name="effective-age"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Condition"
                name="condition"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Yield"
                name="yield"
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Units"
                name="units"
            ></md-outlined-text-field>
        `;
    }

    renderSummaryTable() {
        return html`
            <md-outlined-text-field
                label="Type"
                name="crop-type"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Total Gross Acres"
                name="total-gross-acres"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Total Net Acres"
                name="total-net-acres"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Overall Age"
                name="overall-age"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Total Contribution / Acre"
                name="total-contribution"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Planting Contribution / Acre"
                name="planting-contribution"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Planting RCN / Acre"
                name="planting-rcn"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Physical Percentage / Year"
                name="physical-percentage"
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="External Percentage"
                name="external-percentage"
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Overall Percentage"
                name="overall-percentage"
                required
            ></md-outlined-text-field>
            <md-outlined-text-field
                label="Overall Percentage / Year"
                name="percentage-per-year"
                required
            ></md-outlined-text-field>
        `;
    }

    override render() {
        return html`
            <section class="plantings">
                <p>I'm the permanent plantings form portion of the appraisal form. I think this might be the crop history portion, but only for the current year? Either way, I think we can get this from quickstats</p>

                <section class="table-type">
                        <div class="plantings-blocks">
                            <md-radio name="table-type" value="blocks" id="plantings-block" checked @click=${this.changeTableType}></md-radio>
                            <label for="plantings-block">Blocks</label>
                        </div>
                        <div class="plantings-summary">
                            <md-radio name="table-type" value="summary" id="plantings-summary" @click=${this.changeTableType}></md-radio>
                            <label for="plantings-summary">Summary</label>
                        </div>
                </section>
                <hr />
                <form @submit=${this.alertValues}>
                    <section class="support-land-value">
                        <div class="bare-land">
                            <md-radio name="support-land-value" value="bare-land" id="bare-land"></md-radio>
                            <label for="bare-land">Bare Land</label>
                        </div>
                        <div class="planted-land">
                            <md-radio name="support-land-value" value="planted-land" id="planted-land"></md-radio>
                            <label for="planted-land">Planted Land</label>
                        </div>
                        <div class="zero-value">
                            <md-radio name="support-land-value" value="zero-value" id="zero-value"></md-radio>
                            <label for="zero-value">Zero</label>
                        </div>
                    </section>
                    <section class="rcn-basis">
                        <div class="gross-rcn-acres">
                            <md-radio name="rcn-basis" value="gross-rnc-acres" id="gross-rcn-acres"></md-radio>
                            <label for="gross-rcn-acres">Gross</label>
                        </div>
                        <div class="net-rcn-acres">
                            <md-radio name="rcn-basis" value="net-rcn-acres" id="net-rcn-acres"></md-radio>
                            <label for="net-rcn-acres">Net</label>
                        </div>
                    </section>
                    <p>Row #1</p>
                    <section class="table">
                        ${this.tableType === 'blocks' ? this.renderBlocksTable() : this.renderSummaryTable()}
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

    changeTableType(event: MouseEvent) {
        this.tableType = (event.target as HTMLSelectElement).value;
    }

    alertValues(event: SubmitEvent) {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        this.tableType === 'blocks' ? this.alertBlocksValues(data) : this.alertSummaryValues(data);
    }

    alertBlocksValues(data: FormData) {
        const supportLandValue = data.get('bare-land') || data.get('planted-land') || data.get('zero-value');
        const rcnBasis = data.get('gross-rcn-basis') || data.get('net-rcn-basis');
        const blockIndex = data.get('block-index') || '<empty>';
        const grossAcres = data.get('gross-acres') || '<empty>';
        const netAcres = data.get('net-acres') || '<empty';
        const cropType = data.get('crop-type') || '<empty>';
        const variety = data.get('variety') || '<empty>';
        const spacing = data.get('spacing') || '<empty>';
        const rootstock = data.get('rootstock') || '<empty>';
        const yearPlanted = data.get('year-planted') || '<empty>';
        const effectiveAge = data.get('effective-age') || '<empty>';
        const condition = data.get('condition') || '<empty>';
        const cropYield = data.get('yield') || '<empty>';
        const units = data.get('units') || '<empty>';

        alert(`Support Land Value: ${supportLandValue}, RCN Basis: ${rcnBasis}, Block Index: ${blockIndex}, Gross Acres: ${grossAcres}, Net Acres: ${netAcres}, Crop Type: ${cropType}, Crop Variety: ${variety}, Spacing: ${spacing}, Rootstock: ${rootstock}, Year Planted: ${yearPlanted}, Effective Age: ${effectiveAge}, Condition: ${condition}, Crop Yield: ${cropYield}, Units: ${units}`);
    }

    alertSummaryValues(data: FormData) {
        const supportLandValue = data.get('bare-land') || data.get('planted-land') || data.get('zero-value');
        const rcnBasis = data.get('gross-rcn-basis') || data.get('net-rcn-basis');
        const cropType = data.get('crop-type') || '<empty>';
        const grossAcres = data.get('total-gross-acres') || '<empty>';
        const netAcres = data.get('total-net-acres') || '<empty';
        const overallAge = data.get('overall-age') || '<empty>';
        const totalContrib = data.get('total-contribution') || '<empty>';
        const plantingContrib = data.get('planting-contribution') || '<empty>';
        const plantingRCN = data.get('planting-rcn') || '<empty>';
        const physicalPercentage = data.get('physical-percentage') || '<empty>';
        const externalPercentage = data.get('external-percentage') || '<empty>';
        const overallPercentage = data.get('overall-percentage') || '<empty>';
        const overallPercentagePerYear = data.get('percentage-per-year') || '<empty>';

        alert(`Support Land Value: ${supportLandValue}, RCN Basis: ${rcnBasis}, Crop Type: ${cropType}, Total Gross Acres: ${grossAcres}, Total Net Acres: ${netAcres}, Overall Age: ${overallAge}, Total Contrib./Ac: ${totalContrib}, Planting Contrib./Ac: ${plantingContrib}, Planting RCN/Ac: ${plantingRCN}, Physical %/Year: ${physicalPercentage}, External %: ${externalPercentage}, Overall %: ${overallPercentage}, Overall %/Year: ${overallPercentagePerYear}`);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-plantings': AppraisalPlantings;
    }
}