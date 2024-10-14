// this ia a reliable listener, since the side panel won't be always active
let collectedLinks = [];

chrome.runtime.onInstalled.addListener(() => {
    console.log(`Link Collector Extension Installed, collectedLinks: ${collectedLinks.length}`);
});

chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));


// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'sendLinks') {
        collectedLinks = [...new Set([...collectedLinks, ...message.links])]; // Store collected links
        sendResponse({ status: `${message.links.length} Links stored in background collectedLinks: ${collectedLinks.length}` });
        chrome.runtime.sendMessage({ action: 'render', links: collectedLinks}, (response) => {
            console.log(response);
        });

    }
});

// Handle requests from the side panel
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getLinks') {
        console.log('incoming request from sidepanel')
        sendResponse({ links: collectedLinks });
    }
});
