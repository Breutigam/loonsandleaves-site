'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "225f24af5e98ea96b204950926f03585",
"assets/AssetManifest.bin.json": "fbbe0b3c7cfef53e54d8e96e11f00595",
"assets/AssetManifest.json": "b6c32e5e6e8b7bed359eb680e2882e4d",
"assets/assets/bar/5c1076f5": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/bar/barbell.svg": "762d79bcadca0162c41a878e6a4b7566",
"assets/assets/bar/bar_axle.svg": "3e61e8f65106a2b74ef3aa237ab3abfb",
"assets/assets/bar/bar_cambered.svg": "554722f66ed5de9dc91c376ced4b1222",
"assets/assets/bar/bar_center.png": "37649954731abb47022c0e142ad08881",
"assets/assets/bar/bar_duffalo.svg": "54fb25689a7136b5f5ba1669489f8743",
"assets/assets/bar/bar_earthquake.png": "a8182d0705278ed20033a10a89fd0a86",
"assets/assets/bar/bar_ez.svg": "da23308d1c51eec962204549eeb75d80",
"assets/assets/bar/bar_hex.svg": "40a9965357735371aa70cdb87c22410e",
"assets/assets/bar/bar_log.svg": "a1a6e399b56e2f291f9cf23f9617b919",
"assets/assets/bar/bar_safety.svg": "a39e607b9ee9296d94cca754927c751a",
"assets/assets/bar/bar_swiss.svg": "da45309a192293b99ffafce05ac3abeb",
"assets/assets/bar/custom_barbell.svg": "762d79bcadca0162c41a878e6a4b7566",
"assets/assets/bar/standard_bar.svg": "762d79bcadca0162c41a878e6a4b7566",
"assets/assets/bar/standard_barbell.svg": "762d79bcadca0162c41a878e6a4b7566",
"assets/assets/bar/womens_bar.svg": "762d79bcadca0162c41a878e6a4b7566",
"assets/assets/bar/youth_bar.svg": "762d79bcadca0162c41a878e6a4b7566",
"assets/assets/collars/collar.png": "f98d49aad6cf09c1499886aea88269d4",
"assets/assets/collars/collar.svg": "9a5c376a9e0a4545533549970028807e",
"assets/assets/images/google_signin_button.png": "9bc614a37ab7f13c1fc4f43496f27131",
"assets/assets/images/promo1.png": "05ea85f0bb6768046795b9a8514cf08d",
"assets/assets/images/promo2.png": "1d1f20b32fbd861ea0911e63a0af6dfd",
"assets/assets/images/promo3.png": "5a112aa5e825eede0f741c779e8bfcd1",
"assets/assets/plates/kg/round/plate_0.25.svg": "d0a374e01b82d22b5855b74094949aba",
"assets/assets/plates/kg/round/plate_0.5.svg": "d0a374e01b82d22b5855b74094949aba",
"assets/assets/plates/kg/round/plate_1.25.svg": "d0a374e01b82d22b5855b74094949aba",
"assets/assets/plates/kg/round/plate_10.svg": "dbceeed7cbb79d2e0b11a9edcfdf663b",
"assets/assets/plates/kg/round/plate_15.svg": "141f5f392a6ce4a7ae754c6ea4afc252",
"assets/assets/plates/kg/round/plate_2.5.svg": "5b7c53ae9e0f0083be645c52508470e6",
"assets/assets/plates/kg/round/plate_20.svg": "b2493e07610c4c5f9edc743d8e5cf9fd",
"assets/assets/plates/kg/round/plate_25.svg": "943161fd1978de74d490e55fbca04232",
"assets/assets/plates/kg/round/plate_5.svg": "d0a374e01b82d22b5855b74094949aba",
"assets/assets/plates/lbs/round/plate_0.25.svg": "5b7c53ae9e0f0083be645c52508470e6",
"assets/assets/plates/lbs/round/plate_0.5.svg": "5b7c53ae9e0f0083be645c52508470e6",
"assets/assets/plates/lbs/round/plate_0.75.svg": "5b7c53ae9e0f0083be645c52508470e6",
"assets/assets/plates/lbs/round/plate_1.25.svg": "5b7c53ae9e0f0083be645c52508470e6",
"assets/assets/plates/lbs/round/plate_10.svg": "d0a374e01b82d22b5855b74094949aba",
"assets/assets/plates/lbs/round/plate_100.svg": "943161fd1978de74d490e55fbca04232",
"assets/assets/plates/lbs/round/plate_12.5.svg": "5b7c53ae9e0f0083be645c52508470e6",
"assets/assets/plates/lbs/round/plate_15.svg": "141f5f392a6ce4a7ae754c6ea4afc252",
"assets/assets/plates/lbs/round/plate_2.5.svg": "5b7c53ae9e0f0083be645c52508470e6",
"assets/assets/plates/lbs/round/plate_20.svg": "943161fd1978de74d490e55fbca04232",
"assets/assets/plates/lbs/round/plate_25.svg": "dbceeed7cbb79d2e0b11a9edcfdf663b",
"assets/assets/plates/lbs/round/plate_30.svg": "943161fd1978de74d490e55fbca04232",
"assets/assets/plates/lbs/round/plate_35.svg": "b2493e07610c4c5f9edc743d8e5cf9fd",
"assets/assets/plates/lbs/round/plate_45.svg": "943161fd1978de74d490e55fbca04232",
"assets/assets/plates/lbs/round/plate_5.svg": "5b7c53ae9e0f0083be645c52508470e6",
"assets/assets/plates/lbs/round/plate_50.svg": "943161fd1978de74d490e55fbca04232",
"assets/assets/plates/lbs/round/plate_55.svg": "943161fd1978de74d490e55fbca04232",
"assets/assets/plates/lbs/round/plate_65.svg": "943161fd1978de74d490e55fbca04232",
"assets/assets/plates/lbs/round/plate_7.5.svg": "d0a374e01b82d22b5855b74094949aba",
"assets/assets/plates/plate_black.png": "248c79211207c7267cf89d1d8f18e181",
"assets/assets/plates/plate_default.png": "c0177c8e95739703299fe7e0767465dc",
"assets/assets/plates/themes/four_seasons/plate_fall.svg": "b1ef6385f882e1de6f87a94bb00315ed",
"assets/assets/plates/themes/four_seasons/plate_spring.svg": "e20dd6c12a25c684235bcbc5a424b6b4",
"assets/assets/plates/themes/four_seasons/plate_summer.svg": "d2000e992141229b46e7194bebb9c144",
"assets/assets/plates/themes/four_seasons/plate_winter.svg": "9522ecde02f8adb5d6ccfd951543786d",
"assets/assets/plates/themes/plate_america.svg": "71dfeb51daf1f6392f12ecd75d6cafdf",
"assets/assets/plates/themes/plate_army_camo.svg": "22af25db73fac0c74a75a74c9ab3e9b5",
"assets/assets/plates/themes/plate_australia.svg": "7b12cd5d9deba5aff7e0ca5f64123379",
"assets/assets/plates/themes/plate_canada.svg": "03afd262729653e0e534710a351d81f7",
"assets/assets/plates/themes/plate_canadared.svg": "0264945f806263bcbd980ab682b56033",
"assets/assets/plates/themes/plate_default.svg": "943161fd1978de74d490e55fbca04232",
"assets/assets/plates/themes/plate_desert_camo.svg": "58471144506c0d0cbe4d38966bbbe6ce",
"assets/assets/plates/themes/plate_egypt.svg": "16a50532f601878f14b85ccd4a36813a",
"assets/assets/plates/themes/plate_europe.svg": "7760d06523d7d21c996cd79418965d5d",
"assets/assets/plates/themes/plate_fairy.svg": "016022abc1fa7ed8f38f71afc75a74be",
"assets/assets/plates/themes/plate_fall.svg": "b1ef6385f882e1de6f87a94bb00315ed",
"assets/assets/plates/themes/plate_fourseasons.svg": "3b2f606edc09f35361d3b071f6a3a705",
"assets/assets/plates/themes/plate_france.svg": "0d1a194ac85412d4c04c4be561a27418",
"assets/assets/plates/themes/plate_germany.svg": "313d441c954c567316502ca355ac18df",
"assets/assets/plates/themes/plate_halloween.svg": "73be8258368f5d61abf22ee751b7cc81",
"assets/assets/plates/themes/plate_jamaica.svg": "8f7489b0918a6f17a9e69dca027c8266",
"assets/assets/plates/themes/plate_lucky.svg": "895a53e4a5cb4c37435edf968bb3877d",
"assets/assets/plates/themes/plate_navy_camo.svg": "b4f8bfe4a8d1461bf1f72ff9e928b20e",
"assets/assets/plates/themes/plate_new_zealand.svg": "0eb9b6ccbe54f3c59caf5dcff61c7f44",
"assets/assets/plates/themes/plate_orange.svg": "f4468bcd479ba32af865e8849d8e589e",
"assets/assets/plates/themes/plate_pink.svg": "0528a459c00c048613d50f943d3918f0",
"assets/assets/plates/themes/plate_pink_camo.svg": "3b71ca60fbf7510feb39b11f580fd4f1",
"assets/assets/plates/themes/plate_pride.svg": "345f4e3a8c977b23740f5785aa49dea5",
"assets/assets/plates/themes/plate_quebec.svg": "22a91f558a089a148c8f1de816790385",
"assets/assets/plates/themes/plate_race.svg": "072c83879710ec2b3e95afa696e5f911",
"assets/assets/plates/themes/plate_realistic.svg": "2e24502104ce8ff31f8e2ec1ff80b6d1",
"assets/assets/plates/themes/plate_spring.svg": "e20dd6c12a25c684235bcbc5a424b6b4",
"assets/assets/plates/themes/plate_summer.svg": "d2000e992141229b46e7194bebb9c144",
"assets/assets/plates/themes/plate_trans.svg": "b1d44c2a60c3c621f96682d2af922df1",
"assets/assets/plates/themes/plate_ukraine.svg": "ee0ebf0cd984770aac1eb22546205013",
"assets/assets/plates/themes/plate_union_jack.svg": "2c2b7f6448123decc2805a4921a9d601",
"assets/assets/plates/themes/plate_usa.svg": "71dfeb51daf1f6392f12ecd75d6cafdf",
"assets/assets/plates/themes/plate_western.svg": "411878d3f8b55f064d569a8ddabf60a0",
"assets/assets/plates/themes/plate_wing.svg": "c5ba2812d20bc2176cd64f4921e6433c",
"assets/assets/plates/themes/plate_winter.svg": "9522ecde02f8adb5d6ccfd951543786d",
"assets/assets/splash/splash.svg": "5cd859fd6c4024f9ba3a872b6e7f1e19",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "763bc4505c0e2acdcee56e78c9bc81bc",
"assets/NOTICES": "73c251985fc96fbaa052fbce3ecf8a1c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "f826fd767356f6bfe5dc4f3f3bf6712a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24aa1d17c99e22bfc57b1c8e9ec930f5",
"/": "24aa1d17c99e22bfc57b1c8e9ec930f5",
"main.dart.js": "295fd786ad978b4000de8ae6a3317e3c",
"manifest.json": "68ff60440cd1193b890d5a3ead99a8bc",
"splash/img/dark-1x.png": "e58aefba4a4111a3f2d5dfe781030a3b",
"splash/img/dark-2x.png": "160307f0a9804c582ebf381c1f6fc7e9",
"splash/img/dark-3x.png": "fbc06802368eefe5767807b30b852573",
"splash/img/dark-4x.png": "2df0d7614603b59266eda8d33c60399d",
"splash/img/light-1x.png": "e58aefba4a4111a3f2d5dfe781030a3b",
"splash/img/light-2x.png": "160307f0a9804c582ebf381c1f6fc7e9",
"splash/img/light-3x.png": "fbc06802368eefe5767807b30b852573",
"splash/img/light-4x.png": "2df0d7614603b59266eda8d33c60399d",
"version.json": "62294bce89099cecf1281b4803fea378"};
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
