# fck-honey
Open source lib for Merchants to detect if an end user has Honey browser extension installed

## Install (jsDelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/fck-honey@0.1/dist/honey-detect.min.js"></script>
```

## Use

```html
<script>
  window.fckHoney.listen((el) => {
    // Decide how you want to handle this.
    // Example: pause checkout and notify the user.
    console.log("Honey overlay detected:", el);
  });
</script>
```

## Local Dev

```sh
npm run build
```

Open `example/index.html` in your browser.
