/* Este archivo se subió aquí por error. Esta versión se borra sola:
   limpia lo guardado en los teléfonos que alcanzaron a abrir la página equivocada
   y vuelve a cargar la página de ventas normal. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  const ks = await caches.keys(); await Promise.all(ks.map(k => caches.delete(k)));
  await self.registration.unregister();
  const cs = await self.clients.matchAll({ type: "window" }); cs.forEach(c => c.navigate(c.url));
})()));
