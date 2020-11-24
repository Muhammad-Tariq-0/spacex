

let CACHE_NAME = 'my-site-cache-v1';
  let urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/sw.js',
  '/index.html',
  '/icon2.png',
  '/App.tsx',
  '/Home.tsx',
  // '/codegen.yml',
  '/components/Mission/MissionList.tsx',
  '/components/Mission/query.tsx',
  '/components/MissionInfo/MissionDetails.tsx',
  '/components/MissionInfo/query.tsx',
  'fonts.googleapis.com/css?family=Lemon',
  '/static/media/logo1.88567a3c.png',
  '/static/media/back1.ef1c9f6a.png'
  
  // 'https://spacexdata.herokuapp.com/graphql',
  
];

this.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
