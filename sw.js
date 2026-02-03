self.addEventListener('install', event => {
  console.log('Service Worker تم تثبيته');
});

self.addEventListener('fetch', event => {
  // يمكن تركه بسيط بدون caching لأن التوجيه مباشر
});