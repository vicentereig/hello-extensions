import { html, render, LitElement } from 'lit'

console.log('Installing Link Receiver')

console.log('requesting links to reliable storage');
chrome.runtime.sendMessage({ action: 'getLinks' }, (response) => {
    if (response && response.links) {
        console.log(`Rendering ${response.links.length} links`);
        renderLinks(response.links);  // Render the links in the side panel
    }
});

// Custom Lit component to display individual links
class LinkItem extends LitElement {
    static properties = {
        link: { type: String },
        synced: { type: Boolean }
    };

    constructor() {
        super();
        this.synced = false; // Initially assume it's not synced
    }

    async syncLink() {
        try {
            const response = await fetch('http://localhost:3000/link', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ link: this.link })
            });
            if (response.ok) {
                this.synced = true; // Update sync status
                this.requestUpdate(); // Re-render to show status change
            } else {
                console.error('Failed to sync link.');
            }
        } catch (err) {
            console.error('Error syncing:', err);
        }
    }

    render() {
        return html`
      <div class="flex justify-between items-center">
        <a href="${this.link}" target="_blank" class="text-blue-500">${this.link}</a>
        <button
          @click=${this.syncLink}
          class="${this.synced ? 'bg-green-500' : 'bg-red-500'} text-white px-4 py-1 ml-2">
          ${this.synced ? 'Synced' : 'Sync'}
        </button>
      </div>
    `;
    }
}

customElements.define('link-item', LinkItem);
// Function to render the links
function renderLinks(links) {
    console.log('Updating UI...')
    const linkItems = links.map(link => html`<link-item .link=${link}></link-item>`);
    render(html`${linkItems}`, document.getElementById('link-list'));
}




// Handle syncing all unsynced links when the "Sync All" button is clicked
document.getElementById('sync-all').addEventListener('click', async () => {
    const unsyncedItems = document.querySelectorAll('link-item:not([synced])');

    // Loop through and sync each unsynced link
    for (const item of unsyncedItems) {
        await item.syncLink();
    }
});
