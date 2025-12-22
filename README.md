# fck-honey
Open source lib for Merchants to detect if an end user has Honey browser extension installed

## Inspiration
[MegaLag exposed Honey as a scam](https://www.youtube.com/watch?v=wwB3FmbcC88)

## Usage (Browser Global)

```html
<script src="https://cdn.jsdelivr.net/npm/fck-honey/dist/honey-detect.min.js"></script>
<script>
  window.fckHoney.listen((el, warn) => {
    // Decide how you want to handle this. Native warn function allows you to tell the user to disable Honey.
    warn("You must disable the Honey extension to continue.");
  });
</script>
```

## Usage (ESM)

```sh
npm install fck-honey
```

```js
import { listen } from "fck-honey";

listen((el, warn) => {
  // Decide how you want to handle this. Native warn function allows you to tell the user to disable Honey.
  warn("You must disable the Honey extension to continue.");
});
```

## Advanced Options

```js
window.fckHoney.listen((el, warn) => {
  // will keep the Honey tool on the page, giving you access to its element via `el`
}, { removeHoney: false });
```
