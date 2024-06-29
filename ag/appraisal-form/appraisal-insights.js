var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators";
let AppraisalInsights = class AppraisalInsights extends LitElement {
    render() {
        return html `
                <!-- Analysis/Valuation/Insights, get from Growers Edge data team -->
                <sale-analysis></sale-analysis>
                <landmix-analysis></landmix-analysis>
                <income-anaysis></income-anaysis>
                <improvement-analysis></improvement-analysis>
        `;
    }
};
AppraisalInsights = __decorate([
    customElement('appraisal-insights')
], AppraisalInsights);
export { AppraisalInsights };
//# sourceMappingURL=appraisal-insights.js.map