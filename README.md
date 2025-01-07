# theworcoder-pwa

A Progressive Web app for converting an arbitrary string into a sequence of mnemonic words and back, with an RS1024 checksum appended to detect errors.

App is [deployed here, give it a try](https://cypherpunk.today/theworcoder/index.html)

## Other implementations

JavaScript version: [worcoder-js](https://github.com/jooray/worcoder-js)

Python library: [worcoder](https://github.com/jooray/worcoder)

Desktop app: [theworcoder-desktop](https://github.com/jooray/theworcoder-desktop)

## Building

```bash
git submodule update --remote
npm install
npm run build
```

The resulting files in dist/ can be copied to a webserver.
