'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "66d59cb87e8eca5de306fb40f082e8ce",
"img/logo-full.png": "da59a98e215bf925d555dc00387d6f27",
"index.html": "a4514febe57f5bf9b0ad0505f2c2e31a",
"/": "a4514febe57f5bf9b0ad0505f2c2e31a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "0a5a7bde676c0349869533c0734b7387",
"assets/assets/small/img-3.jpg": "81f5ceb44c0a64df37821f05420e3e16",
"assets/assets/small/img-10.jpg": "8834dd80a678c259b28edfaf2116ddbb",
"assets/assets/small/img-5.jpg": "50283f2dabbbdaa5ddc194c2460a9806",
"assets/assets/small/img-4.jpg": "ae89ec7a1bde68097488fe7840e966b1",
"assets/assets/small/img-2.jpg": "e6423975478fde1a9d06ba75aa4dd860",
"assets/assets/small/img-7.jpg": "d27709fbe05b7b47683f73fa8916c7c8",
"assets/assets/small/img-6.jpg": "1b124f03548415ba0220d44bc74f5704",
"assets/assets/small/img-1.jpg": "3cb9658f9974abd52eb45ba62d152779",
"assets/assets/small/img-9.jpg": "dc18d89eacb608cc670bc8243ca05159",
"assets/assets/small/img-8.jpg": "0ce1ebb1a5e7086fda8bcc892d21e264",
"assets/assets/svg/USA.svg": "0dd5416bc9c80b4e9f5eece4ec80457f",
"assets/assets/svg/China.svg": "34d3566306e06f73e85020c9cf807127",
"assets/assets/svg/Russia.svg": "1bacc478a5992eafdaca646eb0fbf87a",
"assets/assets/svg/Canada.svg": "4dbac52090d79eaecbdd0133faac371e",
"assets/assets/404.svg": "7db51015122852641d14339ee645900f",
"assets/assets/logo-sm.png": "1644bf64faf89792fdeabcb0be4d8db6",
"assets/assets/data/todo.json": "37f6ad319eeb2ff81a11cdd1b2724866",
"assets/assets/logo.png": "54a6a022fc17353885ccb029e14bc9a2",
"assets/assets/other/users_group_two.svg": "f39ccf8c306e2ff2a132fa8c93731cc3",
"assets/assets/other/crown-star-bold-duotone.svg": "487bce322b6077fd8dcff1a2e7314395",
"assets/assets/other/leaf.svg": "bcd6347266d7f6c7590b84add75600a0",
"assets/assets/other/layers.svg": "8626aa75862e10997f56c5397960e20a",
"assets/assets/other/cpu_bolt.svg": "0bb350fb95ded3c6226328ad64fb1bca",
"assets/assets/other/black-hole-line-duotone.svg": "1e2916aa7b0fbfab6769b425e52071eb",
"assets/assets/other/cpu-bolt-line-duotone.svg": "dd3d25757a2c691baa0c2a388bdf6fd7",
"assets/assets/other/bold-duotone.svg": "4c95d9e148b2daf6fcebbbba8732272a",
"assets/assets/logo-full.png": "da59a98e215bf925d555dc00387d6f27",
"assets/assets/favicon.ico": "1644bf64faf89792fdeabcb0be4d8db6",
"assets/assets/users/chat.jpg": "2c2e24d87d9cce17b3eac59e40479674",
"assets/assets/users/avatar-5.jpg": "f2ecea405ad1acaab14b2ca15f18cfe4",
"assets/assets/users/avatar-6.jpg": "c7b9532aef62d15c36993396da9baecf",
"assets/assets/users/avatar-9.jpg": "951f7140cc862612e3414e13062c3917",
"assets/assets/users/avatar-11.jpg": "08dab29d85052b03eacea91134e66abb",
"assets/assets/users/avatar-3.jpg": "4c25ea06a02b88c5c4a03f9801977c21",
"assets/assets/users/avatar-4.jpg": "2eb4a6f81de8f0f0ae54a44503936c6b",
"assets/assets/users/avatar-8.jpg": "7bff11049be7f0f7a0d56d7275d0510f",
"assets/assets/users/avatar-2.jpg": "08312d93d8ef34b85781584007d41bca",
"assets/assets/users/avatar-7.jpg": "36cec4f1d41bff7c5985540dc29845c0",
"assets/assets/users/avatar-12.jpg": "6c10a2a5e527832ff6684936e9f0922c",
"assets/assets/users/avatar-1.jpg": "5e5d08e4c4ca2deda5b23d540660d7be",
"assets/assets/users/avatar-10.jpg": "accaead552dc87a4d79a32bf342291ef",
"assets/assets/users/dummy-avatar.jpg": "bab632b672fffd1648a7b914b31961c5",
"assets/fonts/MaterialIcons-Regular.otf": "6ecfd373ae94e0f687c9516e756eccfa",
"assets/NOTICES": "be77297bdb5c5670589322146fed6d59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_tabler_icons/assets/fonts/tabler-icons.ttf": "a92cc8a8bf911f0e59c1a27fc1b7baea",
"assets/packages/flutter_boxicons/fonts/Boxicons.ttf": "20b1c3156a97064740efd925bba76770",
"assets/packages/flutter_lucide/lib/fonts/lucide.ttf": "ef66ddaf546564f4887dad2854cae777",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
"assets/FontManifest.json": "cf5d3121ae7541f43f017d3c9f519213",
"assets/AssetManifest.bin": "f293cc32477f755c62482f7c58a5e588",
"assets/AssetManifest.json": "f3c760be1a31403d34a27caad91ed34c",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "1644bf64faf89792fdeabcb0be4d8db6",
"_redirects": "6a02faf7ea2a9584134ffe15779a0e44",
"flutter_bootstrap.js": "b436d35af5e1d1dd258efb6fb5986fac",
"version.json": "6db7e5e01e7984f4327226b4a1612c68",
"main.dart.js": "24226481271b602eef4153071e217f31"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
