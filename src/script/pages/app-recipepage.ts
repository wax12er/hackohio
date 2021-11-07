import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-recipepage')
export class AppRecipepage extends LitElement {
  static get styles() {
    return css`
        .border {
            height: 600px;
            width: 50%;
            border: 5px solid black;
            background-color: white;
            margin-left: 25%;
        }
        .textboxIngredient {
            width: 699px;
            height: 205px;
        }
        .titlerecipe {
            width: 400px;
            height: 20px;
            margin-left: 22%;
        }
        .directions{
            width: 699px;
            height: 350px;
        }
    `;
  }

  constructor() {
    super();
  }



  render() {
    return html`
      <app-header enableBack="${true}"></app-header>
      <div>
        <h2>New Page</h2>
        <div class="border">
            <textarea name="Title" cols="50" rows="1" style="resize: none;" class="titlerecipe"></textarea>
            <textarea name="Ingredients" cols="100" rows="5" style="resize: none;" class="textboxIngredient" overflow:auto></textarea>
            <textarea name="Directions" cols="100" rows="10" style="resize: none;" class="directions"></textarea>
        </div>

      </div>
    `;
  }
}

