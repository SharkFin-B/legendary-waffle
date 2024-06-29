import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import { Router } from '@vaadin/router';

@customElement('ag-index')
export class Index extends LitElement {
  static override styles = css`
    #outlet {
        box-sizing: border-box;
    }
  `;

  override firstUpdated() {
    const router = new Router(this.shadowRoot?.getElementById('outlet'));
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

  override render() {
    return html`<div id="outlet"></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-index': Index;
  }
}
