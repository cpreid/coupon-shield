import { listen, startHoneyOverlayObserver, version } from "./core";

if (typeof window !== "undefined") {
  window.fckHoney = window.fckHoney || {};
  window.fckHoney.startHoneyOverlayObserver = startHoneyOverlayObserver;
  window.fckHoney.listen = listen;
  window.fckHoney.version = version;
}

declare global {
  interface Window {
    fckHoney?: {
      startHoneyOverlayObserver?: typeof startHoneyOverlayObserver;
      listen?: typeof listen;
      version?: string;
    };
  }
}
