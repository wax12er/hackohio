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
    this.activeRecipe.saveToStorage();
  }

  clear() {
    localStorage.clear();
  }

  onLoadButtonClick() {
    let allRecipes: Recipe[] = Recipe.getAllRecipes();

    let sr: ShadowRoot | null = this.shadowRoot;
    if (sr) {
      let loadText: HTMLElement = ((sr) as ShadowRoot).getElementById("loadText") as HTMLElement;

      loadText.innerHTML = "";
      for (let loadedRecipe of allRecipes) {


        if (loadText) {
          let testString: string = "<p>" + loadedRecipe.title + "</p>"
            + "<p>" + loadedRecipe.ingredients + "</p>"
            + "<p>" + loadedRecipe.directions + "</p>";

          loadText.innerHTML += testString;
        }

      }
    }
  }

  activeRecipe: Recipe = new Recipe();

  changeActiveTitle(evt: any) {
    this.activeRecipe.title = evt.target.value;
  }

  changeActiveIngredients(evt: any) {
    this.activeRecipe.ingredients = evt.target.value;
  }

  changeActiveDirections(evt: any) {
    this.activeRecipe.directions = evt.target.value;
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
          Title
          <input class="my-class" type="text" @input=${this.changeActiveTitle} />
        </p>
        <p>
          Ingredients
          <input class="my-class" type="text" @input=${this.changeActiveIngredients} />

        </p>
        <p>
          Directions
          <input class="my-class" type="text" @input=${this.changeActiveDirections} />

        </p>

        <p>
          <button @click=${this.onSaveButtonClick}>Save</button>
        </p>
        <p>
          <button @click=${this.onLoadButtonClick}>Load</button>
          <div id="loadText"></div>
        </p>
        <p>
          <button @click=${this.clear}>Clear Storage</button>
        </p>

      </div>
    `;
  }
}
