self.addEventListener("install", event => {
  console.log("BloodBridge app installed");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
