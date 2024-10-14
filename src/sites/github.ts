console.log("Ready to scrape links... ")
const links = Array.from(document.querySelectorAll('a')).map(a => a.href);
console.log(`Gathered ${links.length} links... broadcasting.`)

// Send the collected links to the background or side panel
chrome.runtime.sendMessage({ action: 'sendLinks', links: links}, (response) => {
    console.log(response);
});
