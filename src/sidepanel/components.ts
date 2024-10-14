import {html, LitElement} from "lit";
import {customElement, property} from 'lit/decorators.js';

@customElement('scraper-screen')
export class ScraperScreen extends LitElement {
    render() {
        return html`<div class="text-center w-1/2 border-2 border-gray-100 bg-white">
            <h1 class="text-3xl font-bold">
                Link scraper
            </h1>   
            <section>
                <scraper-button/>
            </section>
        </div>`
    }
}
@customElement('scraper-button')
class ScraperButton extends LitElement {
    @property({type: Number}) count = 0;
    render() {
        return html`
            <button @click="${this._increment}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Click me.
            </button>
            
            <p> count=${this.count}</p>
        `;
    }

    private _increment(e: Event) {
        this.count++;
    }
}
