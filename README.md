# Coupon Shield 🛡️
 Tool for eComm merchants to detect, warn and prevent a customer from shopping using a shady coupon browser extension

* Detects Honey, Capital One Shopping & Rakuten 🕵🏼‍♀️
* Tiny! 3kb minified & gzipped 🐁
* Does not collect any user data 🥦
* [Demo video here 🎥](https://youtu.be/Em9Fjil8Xds)
* [Inspired by MegaLag's YouTube 🎥](https://www.youtube.com/watch?v=wwB3FmbcC88)

<img width="880" height="618" alt="image" src="https://github.com/user-attachments/assets/aa777c9b-d8f7-4051-a85b-57fd749f9858" />

## Easy install (no-JS)
This will automatically detect a coupon extension and show a default warning to the user to disable the extension as shown above). Install this at the very top of the `<head>` in your webpage to ensure it runs prior to the extension.
[jsDelivr package page](https://www.jsdelivr.com/package/npm/coupon-shield).
```html
<script src="https://cdn.jsdelivr.net/npm/coupon-shield@latest/dist/auto.min.js"></script>
```

## Custom Usage (Browser Global)

```html
<script src="https://cdn.jsdelivr.net/npm/coupon-shield@latest/dist/couponshield.min.js"></script>
<script>
window.couponShield.listen((warn, vendor) => {
    // Decide how you want to handle this. Native warn function allows you to tell the user to disable the extension.
    // vendor is "honey", "Capital One Shopping", or "Rakuten"
    warn("You must disable the Honey extension to continue.");
  });
</script>
```

## Custom Usage (ESM)

```sh
npm install coupon-shield
```

```js
import { listen } from "coupon-shield";

listen((warn, vendor) => {
  // Decide how you want to handle this. Native warn function allows you to tell the user to disable the extension.
  // vendor is "honey", "Capital One Shopping", or "Rakuten"
  warn("You must disable the Honey extension to continue.");
});
```

## Advanced Options

```js
window.couponShield.listen((warn, vendor, el) => {
  // removePageElement defaults to true (extension element loaded onto the page is auto-removed).
  // Set removePageElement to false if you want to keep the extension element for some reason.
  // el is only defined when removePageElement is false.
  // vendor is "honey", "Capital One Shopping", or "Rakuten"
}, { removePageElement: false });
```

```js
window.couponShield.listen((warn, vendor) => {
  // Stop observing if nothing is detected within 10 seconds.
}, { unbindAfterSeconds: 10 });
```

