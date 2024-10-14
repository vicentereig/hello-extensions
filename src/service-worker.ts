chrome.runtime.onInstalled.addListener(() => {
    console.log("Link Collector Extension Installed");
});

chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
