// Byggskolan har flyttat till https://wblanck.netlify.app/byggskolan/ (ärende #16, 10 nov 2026).
// Den här service workern ersätter den gamla som visade appen från sitt offline-lager.
// Den tar bort lagret, avregistrerar sig och skickar öppna flikar till den nya adressen.
const NY = 'https://wblanck.netlify.app/byggskolan/';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const namn = await caches.keys();
    await Promise.all(namn.filter((n) => n.startsWith('byggskolan-')).map((n) => caches.delete(n)));
    await self.clients.claim();
    await self.registration.unregister();
    const flikar = await self.clients.matchAll({ type: 'window' });
    for (const f of flikar) {
      const gammal = new URL(f.url);
      f.navigate(NY + gammal.search + gammal.hash).catch(() => {});
    }
  })());
});
// Ingen fetch-hanterare: allt går till nätet, och index.html skickar vidare.
