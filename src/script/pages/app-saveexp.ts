import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-test')
export class AppSaveTest extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
  }

  render() {
    return html`
      <app-header enableBack="${true}"></app-header>

      <div>
        <h2>
          Minimalist test page for testing saving and loading.
        </h2>
        <p>
          thing
        </p>
      </div>
    `;
  }
}
