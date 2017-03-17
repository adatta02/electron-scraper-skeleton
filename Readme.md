## Electron Scraper Skeleton

This is a stub that demonstrates how to use Electron to scrape sites that require cookies/javascript/ or intermittently require captchas.

There's a bit to "grok" when using Electron like this so here's the breakdown of what fits where. index.js is loaded inside your main Electron app process which loads index.html into the "main" BrowserWindow, and note they don't share any scope. Next, index.html contains a "webview" which will load the site you're interested in scraping. And finally, injected.js is autoloaded into the same scope as the webview, so it can access the DOM, and it can also load nodejs modules. But the wrinkle is that injected.js can't communicate with any code in index.html without using Electron's IPC services.

## What's in here?

There's a couple of files that are mostly just stubs.

index.js - The main Electron entry point, this really just loads index.html in the "main" Electron window.
index.html - Aforementioned page which loads your target site in a webview.
injected.js - This is the JavaScript file that's injected into the webview, alongside the target site.  

## How do I run this?

You should be able to just run:

```bash
npm install
./node_modules/electron/dist/electron .
```

To launch

## Oh but is there's more?
Just one more! As of 3/17/17 it's possible to use the Tor client as a SOCKS proxy which Electron can be configured to use. So if you download and launch Tor you can launch Electron with the following to pipe your traffic through Tor:

```bash
./node_modules/electron/dist/electron --proxy-server="socks5://localhost:9150" .
```

And then to get a fresh IP address via a new Tor circuit you can run 'killall -HUP tor'
