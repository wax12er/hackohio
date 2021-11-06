import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('app-newpage')
export class AppAbout extends LitElement {
  static get styles() {
    return css`
      .my-class {
          border: 5px solid red;
      }
    `;
  }

  inputVal: string;

  constructor() {
    super();
    this.inputVal = "My Initial Value";
  }

  onInputChange(evt: any) {
    const oldVal = this.inputVal;
    this.inputVal = evt.target.value;
    console.log(evt);
    this.requestUpdate('inputValue', oldVal);
  }

  render() {
    return html`
      <app-header enableBack="${true}"></app-header>
      <div>
        <h2>New Page</h2>

        <input class="my-class" type="text" @input=${this.onInputChange} .value=${this.inputVal} />
        <div>${this.inputVal}</div>
      </div>
    `;
  }
}
