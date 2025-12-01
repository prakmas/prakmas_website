// Service Worker for offline support and caching
const CACHE_NAME = 'fusionone-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/404.html',
  '/images/fusionone-logo.png.webp',
  '/images/dashboard-placeholder.jpg.webp',
  '/favicon.ico',
  '/site.webmanifest',
  '/manifest.json',
  '/offline.html'
];

// Image cache name for separate image caching strategy
const IMAGE_CACHE_NAME = 'fusionone-images-v1';

// Install event - cache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Cache core assets
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        }),
      
      // Create image cache
      caches.open(IMAGE_CACHE_NAME)
    ])
    .catch(err => {
      console.error('Error caching assets:', err);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME, IMAGE_CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Helper function to determine if a request is for an image
function isImageRequest(request) {
  const url = new URL(request.url);
  return (
    request.destination === 'image' || 
    url.pathname.endsWith('.jpg') || 
    url.pathname.endsWith('.jpeg') || 
    url.pathname.endsWith('.png') || 
    url.pathname.endsWith('.gif') || 
    url.pathname.endsWith('.webp') || 
    url.pathname.endsWith('.svg')
  );
}

// Fetch event - serve from cache or network with different strategies
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Handle image requests with cache-first strategy
  if (isImageRequest(event.request)) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          // Return cached image if available
          if (response) {
            return response;
          }
          
          // Otherwise fetch from network and cache
          return fetch(event.request).then(networkResponse => {
            // Clone the response before caching
            const responseToCache = networkResponse.clone();
            
            // Cache the fetched image
            cache.put(event.request, responseToCache);
            
            return networkResponse;
          }).catch(error => {
            // If network fails, serve fallback image
            console.error('Failed to fetch image:', error);
            return caches.match('/images/placeholder.svg');
          });
        });
      })
    );
    return;
  }
  
  // For HTML pages, use network-first strategy
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(event.request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // If no cached version, serve offline page
              return caches.match('/offline.html');
            });
        })
    );
    return;
  }
  
  // For other assets, use stale-while-revalidate strategy
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            // Don't cache API calls or external resources
            if (!event.request.url.includes('/api/') && 
                event.request.url.startsWith(self.location.origin)) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            throw error;
          });
        
        // Return cached response immediately, or wait for network
        return cachedResponse || fetchPromise;
      });
    })
  );
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});