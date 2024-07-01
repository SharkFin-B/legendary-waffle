var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import './identification/appraisal-identification';
import './data/appraisal-data';
import './insights/appraisal-insights';
import './additions/appraisal-additions';
let AppraisalForm = class AppraisalForm extends LitElement {
    render() {
        return html `
            <h1>Appraisal Form</h1>
            <section class="appraisal-form">
                <appraisal-identification></appraisal-identification>
                <appraisal-data></appraisal-data>
                <appraisal-insights></appraisal-insights>
                <appraisal-additions></appraisal-additions>
            </section>
        `;
    }
};
AppraisalForm.styles = css `
        .appraisal-form {
            display: grid;
            gap: 1.5rem;
        }
        h1 {
            font-family: Barlow;
            color: #6750a4;
        }
    `;
AppraisalForm = __decorate([
    customElement('appraisal-form')
], AppraisalForm);
export { AppraisalForm };
//# sourceMappingURL=appraisal-form.js.map