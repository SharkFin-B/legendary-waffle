var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
let Index = class Index extends LitElement {
    firstUpdated() {
        var _a;
        const router = new Router((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('outlet'));
        router.setRoutes([
            {
                path: '',
                children: [
                    {
                        path: '/form',
                        component: 'appraisal-form',
                        action: async () => {
                            await import('./appraisal-form/appraisal-form');
                        }
                    }
                ]
            }
        ]);
    }
    render() {
        return html `<div id="outlet"></div>`;
    }
};
Index.styles = css `
    #outlet {
        box-sizing: border-box;
    }
  `;
Index = __decorate([
    customElement('ag-index')
], Index);
export { Index };
//# sourceMappingURL=index.js.map