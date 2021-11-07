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
        .borderside {
            height: 600px;
            width: 20%;
            border: none;
            background-color: pink;
        }
        .textboxIngredient {
            width: 99%;
            height: 34%;
            margin: -1px;
        }
        .directions{
            width: 99%;
            height: 58%;
        }
        #middle{
            width: 56%;
            height: 3%;
            margin-left: 22%;
            text-align: center;
        }
        .button {
            border: 2px solid black;
            background-color: #93E8FB;
            color: white;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
        .recipe {
            border: none;
            background-color: #ffffff;
            opacity: .4;
            font-size: 16px;
            cursor: pointer;

        }

    `;
  }

  DefaultTemplate = '<div class="border">' +
    '<textarea name="Title" cols="50" rows="1" style="resize: none;" id="middle">Title</textarea>' +
    '<textarea name="Ingredients" cols="100" rows="5" style="resize: none;" class="textboxIngredient"' +
    'overflow:auto>Ingredients\n1.\n2.\n3.\n4.\n5.\n6.\n7.\n8.\n9.\n10.\n11.\n12.</textarea>' +
    '<textarea name="Directions" cols="100" rows="10" style="resize: none;" class="directions">Directions</textarea>' +
    '</div>';

  myFunction() {
    let sr: ShadowRoot | null = this.shadowRoot;
        if (sr) {
            let loadText = ((sr) as ShadowRoot).getElementById("loadText");

            if (loadText) {
                loadText.innerHTML = this.DefaultTemplate;
            }
        }
    }

  constructor() {
    super();
  }

  /* <div class="border">
        <textarea name="Title" cols="50" rows="1" style="resize: none;" id="middle"></textarea>
        <textarea name="Ingredients" cols="100" rows="5" style="resize: none;" class="textboxIngredient"
        overflow:auto></textarea>
        <textarea name="Directions" cols="100" rows="10" style="resize: none;" class="directions"></textarea>
    </div> */


  render() {
    return html`
      <app-header enableBack="${true}"></app-header>
      <div>
        <div style="width: 15%; float:left; height:600px; background-color: pink; border: none; margin:10px">
            Recipes
            <br>
            <button class="recipe"">Recipe 1.0</button> <br>
            <button class="recipe"">Recipe 1.1</button> <br>
            <button class="recipe"">Recipe 1.2</button> <br>
            <button class="recipe"">Recipe 2.0</button> <br>
        </div>

        <div style="width: 50%; float:left; height:600px; background-color: white; border: 5px solid black; margin: 10px 170px">
            <textarea name="Title" cols="50" rows="1" style="resize: none;" id="middle"></textarea>
            <textarea name="Ingredients" cols="100" rows="5" style="resize: none;" class="textboxIngredient"
            overflow:auto></textarea>
            <textarea name="Directions" cols="100" rows="10" style="resize: none;" class="directions"></textarea>
        </div>

        <div>
            <button class="button" onclick="myFunction()">Add Recipe</button>
        </div>

      </div>
    `;
  }
}

