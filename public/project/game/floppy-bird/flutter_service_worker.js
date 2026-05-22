'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "43d6c6939a4a97f127b8c77459cacebc",
"assets/AssetManifest.bin.json": "776e77fdd30f7199274feedea0bc9c1a",
"assets/assets/audio/bgm.mp3": "32fe9d3d826c4e4ae31ff4438634f470",
"assets/assets/audio/floppy.mp3": "5dc02810217c7c382ae705527513f640",
"assets/assets/audio/gagak.mp3": "40647631f2741d8f5e163c9d03383d52",
"assets/assets/audio/game_over1.mp3": "dd981c3edc0182b71705e85643d30315",
"assets/assets/audio/game_over2.mp3": "1ac70aa461127245a6468355ea167e7f",
"assets/assets/data.json": "b51fe2fd8d85a5f84857ee0147046457",
"assets/assets/free.jpg": "27fb855c6e418ba9bbe6fed680170d13",
"assets/assets/images/ball.png": "ecd27d47dff9d1762590633bac99b5cb",
"assets/assets/images/bg/background_0.png": "7d576806cc2d5ef2b910dffdeaae3b49",
"assets/assets/images/bg/background_1.png": "07d8adae2bb5c695f99b111fd0d8e5d0",
"assets/assets/images/bg/background_2.png": "e4d459ed192bf106dc8bbd3a04a54509",
"assets/assets/images/bg/gr.png": "d9ff6d804a95d035d85b1ee1c628ba19",
"assets/assets/images/bird/Crow-Death.png": "09debbfd56f221f50fdf7c0108aabad8",
"assets/assets/images/bird/Crow-Fly.png": "a5fb3d08ac615b1e532988917a63e8ed",
"assets/assets/images/bird/Crow-Hurt.png": "2ef909c65ec0f53f6c48e292b8f84513",
"assets/assets/images/bird/Crow-Idle.png": "16204c9df1d8450c3efd6f6847a08f10",
"assets/assets/images/bird/grey1.png": "52b54a61bb6abd37b66e96327a51cbb0",
"assets/assets/images/bird/grey2.png": "069f2181859e3e73ec769669e3f7fcae",
"assets/assets/images/bird/grey3.png": "e911a1d80dfb2684f31625f0d3971c12",
"assets/assets/images/bird/grey4.png": "235d9fe1319b71ae472dfbb76de9bafa",
"assets/assets/images/bird/grey5.png": "e911a1d80dfb2684f31625f0d3971c12",
"assets/assets/images/bird/grey6.png": "069f2181859e3e73ec769669e3f7fcae",
"assets/assets/images/bird/grey7.png": "208fa00abe36c53d6baadca9c2a9dda7",
"assets/assets/images/bird/Little%2520Bird%2520Fly%2520Up.png": "f65a42394d75203a301d0c2ddfd0c4db",
"assets/assets/images/bird/pigeon_fiy-Sheet.png": "2a1d9b7e27e26aa08bf9b784b213ead3",
"assets/assets/images/bird/yellow1.png": "b544373b723aa35d35e54e90adb47d31",
"assets/assets/images/bird/yellow2.png": "6d766339df4dbef8141a35fae8c2ac97",
"assets/assets/images/bird/yellow3.png": "34c016b47518ec8ab9b5f80a8d85f607",
"assets/assets/images/bird/yellow4.png": "a1534edb817121a42e40c4d3b17c0cea",
"assets/assets/images/bird/YellowBird-Death.png": "6186f710ccbd4f84a29dafba0d46ea7c",
"assets/assets/images/bird/YellowBird-Fly.gif": "b389039d46a2e36eb472ee78499863a8",
"assets/assets/images/bird/YellowBird-Fly.png": "5c3fa9b4ee9ff6ac693ffb8f665bb758",
"assets/assets/images/bird/YellowBird-Hurt.png": "154e373f3bfc40f98b13a52dad50ba48",
"assets/assets/images/bird/YellowBird-Idle.png": "dc041a323b39f6a82e0141ffc12d4e28",
"assets/assets/images/bird/yellow_mainmenu.png": "7fbf3407c3b95f3e5c074def99037e77",
"assets/assets/images/bird_player.png": "fdb1c28d7cae59fe79fc5908c9f94096",
"assets/assets/images/ic_launcher.png": "201544f1b57fefdcc179aad30ebd65e3",
"assets/assets/images/ic_launcher_adaptive_back.png": "aa6d3812fc714ed5fb18aced98a8ee37",
"assets/assets/images/ic_launcher_adaptive_fore.png": "1412e4baab7b12f9fa060ac88347dc8f",
"assets/assets/images/Spinning-Floppy-Disk.ase": "af04464182303887ed4fe0a1d84e0d8c",
"assets/assets/images/Spinning-Floppy-Disk.png": "c2420d449fa87b48ccb55e9b4d347b90",
"assets/assets/images/tap.png": "522dc3711964aa09a16f0f9768cdf5c6",
"assets/assets/pro.jpg": "f61e77ae26ffeab81b8e3cd6603121b5",
"assets/assets/tet1.epub": "7044436d0ad679bcaae730f5707d6b3d",
"assets/assets/translations/en.json": "904a03d2c01eae68be6a60fbffbe321e",
"assets/assets/translations/jp.json": "00a051d7222a8bc9245db1ef2ff6b768",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"assets/NOTICES": "98456aa655e67664cab480d0758d849c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "f9a3f6692179046891d62cda5437d038",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "253daaf95e984eadcaef2b0250ac5e63",
"/": "253daaf95e984eadcaef2b0250ac5e63",
"main.dart.js": "406467cec702436ee8a17318800c9350",
"manifest.json": "0440bdbf93274239efdf5cb1ee6f7ab5",
"version.json": "d91d9301bcf95270c687c3b473b11fe2"};
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
