console.log("Ready to scrape Github users...")

let mainPanel = document.createElement('scraper-screen');
document.body.appendChild(mainPanel);

let script = document.createElement('script');
script.src = chrome.runtime.getURL('components.js');
script.type = 'module';
document.head.appendChild(script);
