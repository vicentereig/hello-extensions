# link-scraper

Demonstratest client side data flow:

1. Content Scripts finds all links in the html
2. A service worker acts as a reliable source for communications. When the side panel is closed it can't receive messages.
3. If the side panel opens for the first time, it requests links from the service worker via message passing.
4. When the service worker receives new messages, it collects them, and notifies the side panel that it can render the collected messages.

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

Chrome manifest v3 schema; https://json.schemastore.org/chrome-manifest
