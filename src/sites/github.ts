console.log("Ready to scrape Github users...")

let mainPanel = document.createElement('scraper-screen');
document.body.appendChild(mainPanel);

let script = document.createElement('script');
script.src = chrome.runtime.getURL('components.js');
script.type = 'module';
document.head.appendChild(script);

//         <link rel="stylesheet" type="text/css" href="../style.css">
let linkRel = document.createElement('link');
linkRel.rel = 'stylesheet';
linkRel.type = 'text/css';
linkRel.href = '../style.css';

document.head.appendChild(linkRel);
