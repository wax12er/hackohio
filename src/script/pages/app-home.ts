import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      app-header{
        color:blue;
      }
      body {
        background-color: pink;
      }
      {
        background-color:#A52A2A ;
      }
      p{
        text-align:center;
        font-family: "Century Gothic";
        font-size: 100px;
        background: url("https://i.makeagif.com/media/11-28-2016/yXM2q_.gif") no-repeat center center fixed;
        color: white;
        text-shadow: 5px 5px black;
        border-radius: 10px;

        padding-top: 200px;
  padding-bottom: 200px;

      }

      #welcomeBar fast-card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }


      button {
        cursor: pointer;
        background color:#A52A2A;
      }

      .pp{
        font-size: 60px;
        text-shadow: 3px 3px black;
      }





      @media(prefers-color-scheme: light) {
        fast-card {
          --fill-color: #edebe9;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'Recipe',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

<body>
      <div>
        <p>Welcome to your cookbook! <font size="50"><span style="text-shadow: 2px 2px black">Create and access new recipes below:</span> </font></p>

        <fast-anchor href="/recipepage">Navigate to New Page</fast-anchor>
      </div>
</body>
    `;
  }
}
