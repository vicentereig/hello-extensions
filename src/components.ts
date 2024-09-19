import {html, LitElement} from "lit";
import {customElement} from 'lit/decorators.js';

@customElement('scraper-screen')
export class ScraperScreen extends LitElement {
    render() {
        return html`<div class="text-center w-1/2 border-2 border-gray-100 bg-white">
            <h1 class="text-3xl font-bold">
                Oh, Sheet!
            </h1>        
        </div>`
    }
}
