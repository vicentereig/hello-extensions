chrome.runtime.onInstalled.addListener(() => {
    console.log("Link Collector Extension Installed");
});

chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));


// this ia a reliable listener, since the side panel won't be always active
let collectedLinks = [];

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'sendLinks') {
        collectedLinks = [...new Set([...collectedLinks, ...message.links])]; // Store collected links
        sendResponse({ status: 'Links stored in background' });
    }
});

// Handle requests from the side panel
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getLinks') {
        sendResponse({ links: collectedLinks });
    }
});
