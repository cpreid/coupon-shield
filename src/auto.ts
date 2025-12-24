import { listen, version } from "./core";

function buildAutoModalHtml(vendor: string): string {
  const query = encodeURIComponent(
    "Why is the " + vendor + " browser extension shady, and how can i uninstall it?"
  );
  const helpUrl = "http://chatgpt.com/?q=" + query;
  return (
    '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="honey-modal-title">' +
    '<h2 id="honey-modal-title">' +
    '<span style="font-weight:400;">This site can’t proceed with </span>' +
    "<strong>" +
    vendor +
    '</strong><span style="font-weight:400;"> Extension enabled</span>' +
    "</h2>" +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 12px 0;align-items:stretch;">' +
    '<a href="' +
    helpUrl +
    '" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:52px;padding:10px 12px;background:#e6eef7;color:#0b1b2b;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px;border-radius:6px;flex:1 1 240px;">Please disable it to continue your checkout. ⛔️</a>' +
    '<a href="https://www.youtube.com/watch?v=wwB3FmbcC88" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:52px;padding:10px 12px;background:#e6eef7;color:#0b1b2b;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px;border-radius:6px;flex:1 1 240px;">Here is why 🎥</a>' +
    "</div></div>"
  );
}

if (typeof window !== "undefined") {
  window.couponShield = window.couponShield || {};
  window.couponShield.listen = listen;
  window.couponShield.version = version;

  window.couponShieldHandle = window.couponShield.listen((warn, vendor) => {
    const vendorName = vendor || "honey";
    const vendorLabel = vendorName.charAt(0).toUpperCase() + vendorName.slice(1);
    warn(buildAutoModalHtml(vendorLabel));
  });
}

declare global {
  interface Window {
    couponShield?: {
      listen?: typeof listen;
      version?: string;
    };
    couponShieldHandle?: ReturnType<typeof listen>;
  }
}
