import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Recipe } from '../components/recipe';

@customElement('app-saveexp')
export class AppSaveTest extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/

  constructor() {
    super();
  }

  textToSave: string = "";

  onSaveButtonClick() {
    let testRecipe : Recipe = new Recipe();
    testRecipe.title = "banan";
    testRecipe.ingredients = "potassium";
    testRecipe.directions = "eat banan";

    testRecipe.saveToStorage();
    console.log("banan has been saved");
  }

  onLoadButtonClick() {
    let loadedRecipe: Recipe | null = Recipe.loadFromStorage("banan");

    if (loadedRecipe) {

      let sr: ShadowRoot | null = this.shadowRoot;
      if (sr) {
        let loadText = ((sr) as ShadowRoot).getElementById("loadText");

        if (loadText) {
          let testString: string = "<p>" + loadedRecipe.title + "</p>"
            + "<p>" + loadedRecipe.ingredients + "</p>"
            + "<p>" + loadedRecipe.directions + "</p>";

          (loadText as HTMLElement).innerHTML = testString;
        }
      }
    } else {
      console.log("Loading Failed");
    }
  }


  render() {

    return html`
      <app-header enableBack="${true}"></app-header>

      <div>
        <h2>
          Minimalist test page for testing saving and loading.
        </h2>
      </div>
      <div>
        <p>
          Type something down below:
        </p>

        <p>
          <button @click=${this.onSaveButtonClick}>Save</button>
        </p>
        <p>
          <button @click=${this.onLoadButtonClick}>Load</button>
          <div id="loadText"></div>
        </p>

      </div>
    `;
  }
}
