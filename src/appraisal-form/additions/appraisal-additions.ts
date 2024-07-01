import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./attachments";
import "./photos";
import "./comments";

@customElement('appraisal-additions')
export class AppraisalAdditions extends LitElement {
    static override styles = css`
        :host {
            font-family: Barlow;
        }
        .miscellaneous {
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
            <h2>MISCELLANEOUS</h2>
            <section class="miscellaneous">
                <!-- Miscellaneous Details, allow user to upload or add whatever they want -->
                <appraisal-comments></appraisal-comments>
                <appraisal-photos></appraisal-photos>
                <appraisal-attachments></appraisal-attachments>
            </section>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'appraisal-additions': AppraisalAdditions;
    }
}