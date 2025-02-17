import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import logo5g from '/5g_systems_atc-inv.svg'

@customElement('my-app')
export class App extends LitElement {

  render() {
    return html`
      <div class="container">
        <a href="https://5gsystems.com" target="_blank">
          <img src=${logo5g} class="logo" alt="5G logo" />
        </a>
      </div>
      <slot></slot>
    `
  }

  static styles = css`
    :host {
      margin: 0 auto;
      text-align: center;
      display:block;
      height: 100%;
      width: 100%
    }

    .container {
      width: 100%;
      background-color: black;
    }

    .container img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': App
  }
}
