'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7de7e9c6ffb27b205bdb0919cd255aa1",
"version.json": "12fdc9b25cefc408a7ee208b06392325",
"index.html": "f430e9d0d34b69ef85b1ed5ec54d01ed",
"/": "f430e9d0d34b69ef85b1ed5ec54d01ed",
"main.dart.js": "195c94c26241139779d40d0dc8baf000",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "edff6839a01e9d05c198ab4b23362864",
".git/ORIG_HEAD": "2658262dfaea6c212b9f0ab8fae47a11",
".git/config": "5a2c1a54d97cf60ad10ff9927d9901f1",
".git/objects/92/17c9218f67bc97eebb24ae616d82de59ad4389": "3615da0280a81b48add976418f6c2d8b",
".git/objects/92/13ee6db0a2c4587e380b53998e8ba70874d634": "f16bcfe5e9039f0b54ab30e39a3a091c",
".git/objects/6f/500c78b868276b325cb3fc8a8aa853c1432b92": "91cc6b7112a7f420e8e9ea26f8b7c521",
".git/objects/32/5598f6c5181e77e2ee79ac9dae7b8efb39c90b": "fed1b71501cdcab29128c4e3d4cc8933",
".git/objects/51/2357f1e2cbb1e664a6bbdae3cb5e3b96924162": "2e73900a19701e67a5390fe15f9b2d74",
".git/objects/51/1adda466438ca333a6914786a8a297653fb56d": "cba0ec1a7e0f66047cb76de6bacd93b6",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/784843c3f09ec89098fd0fb0e4d5ce34d25e2a": "46dfc9141b4abae8392376414f38669a",
".git/objects/93/66ac2d892fc08dd4f062370a1bba486a2882e1": "f2754e72640d3471728a9b6afad9c25b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/1875cc54718e71c45401208f71209ddf9b1a6d": "6d07a1b8c3749be0886ae76400925f48",
".git/objects/34/5fe762f37b30ed1c44f8483c5fc586f40cbd75": "c4a9d1f0160065b1f6624bbdadde1056",
".git/objects/33/aa3a0169410db1e6ce8f69bac6e601d2977cdd": "f0ad7c5150962e58d0a2ad06fc76d51c",
".git/objects/ac/5bbd8df20f895d17e6b096f87f5646db6a60d4": "38b4018d47f2980e891b562e744ca205",
".git/objects/ad/aa63e98df9a3728a2901921462744cf11fa955": "bf986d9f076006b3cce404bc250ecee1",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/31a2c452295ebed44f94b4d84cd5a3528027e9": "c0d3fdf7ca8c2af47eec86f2d6616c4b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/58b0447ba8552e7b03ef08eb62d505f232f18e": "4cdd167a18c8ace0a0c8eb9829d12c1c",
".git/objects/e5/80fc15cb5789c80d716dc08bf1cb5c217bd378": "aa85df4a9a5e2f6e1726e9f8320e039e",
".git/objects/f4/bfd10644da5574001843139c4bb9ed11fa788f": "15d6c998e9ecc796b5fb6fc6dee28fd0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/def56cb5c7f38fa0c10e03b425b1483faff03d": "8ce1243b46a4d8f20790274b15445c82",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f5/8f1e197d54d8e89df28d35414c37894a6978dc": "1de3f30b65d35d77a3fa537e4bac271b",
".git/objects/ca/8c779534d70dfd603792bd07c965432d3fc9e8": "c2744bfd2e0311aab60a5e860fe3512a",
".git/objects/fe/5235e0aed9713792cd0a27ed9dbe584eb9292a": "cfc9c9f47607005cc5f090e6b962fa60",
".git/objects/fe/6f74465be590c4ca8d16d66dc44298a897297b": "2d7bce5988c80c67a8ab2122baf9b07a",
".git/objects/fb/cd83d4589c3065089db96113315e0cbf3a7c8b": "c5340c5bf0c62d4772694d8873ff9735",
".git/objects/4e/93ec7863e135eba46f5de92b60a847a7f6a97c": "67c68485f2226643ae3337f4093c1274",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/f6ce5b213fceb100cacddc2d7e1d30345c6d9f": "fb0e2b3a90d394e68ffb20b960115625",
".git/objects/7c/0bd44ed7acb562c9ac1cf4d3e68ffd7cb35302": "8ab78dee2969b4719fc6de9a87667c8e",
".git/objects/45/304548447c05fd934748549d7a7bd4f0e1dfbc": "58b96bd0582073082b608688685ee739",
".git/objects/87/ab7e3b6089fff45f34edbb460ba7adadfc1ab1": "cf77216e452762ad8743913ed318eacb",
".git/objects/74/4a7301fc28de46789a0e86f39363294eb8e7f4": "4b44135b0d435fde55f921aa7b97f174",
".git/objects/17/5c322f9415ff5dbfeb00dddde5033f6bfc0614": "63f5738895e5790b7da54150ab73ab78",
".git/objects/7b/810c9d7382620d583fd190197cc3ec68e787f9": "4fe891ae199c427bac6dab939d6d6128",
".git/objects/8a/dbe3dc295fc228ceaf378bb92de5a4ec667327": "f867eeb04bf832b1190dd5849f49b0d2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/f94114463ca6883bef87ea3a7c6e5f001c3c66": "fe3f2f37fd92cb7f2b830a16a11bbac8",
".git/objects/10/24db44b4aa8a8c75fa909921a090cc54e54196": "79d0d03800a4eeafd5d48e51ae6184ae",
".git/objects/2a/12a698f3856b7051fba7be7bcb5bf0be76a9bf": "02ad460cf2669ec6512ae42ff850802c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/7b1f0699183718f325727b544f7903e788ac5d": "a60a1545a73ceeb95815f3139c1ddccf",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/54/e23339fbadffd043f903b1e3ed5eb86d842c4e": "e4b288fdd3c55ae4e615344a3af871e2",
".git/objects/98/bfd244a57b1ed368e445694c3342bf3846904f": "f02cc3bf3e79efbb2901c0adde75eafd",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/90a32684fad115807e6386d32825aac73413ce": "ba7e3d20480db9b4bce0ffbf191e17d7",
".git/objects/3f/4dded04f129df0caa7e154d89e85c55bea53f7": "f0f19ff810994a9ae256e054bdf55fcf",
".git/objects/5b/b66f2ff968b19a08d643d090b37527ec6f1d53": "ab22b35ce7a756c717354cecb5f4ed7b",
".git/objects/37/f79ba0185f2687dd827fa4870e72ef40a1f479": "06f060fd4f3ed23a6e62f90d941912d8",
".git/objects/06/42b7e2f47d92f94d496e0feadd9b37a0221b8d": "24b44fc9d65779799d451ef1c81f70b1",
".git/objects/97/f38535ed3bda578c64c8f18a97d5f05d191e70": "1fecdd944821f35767016b136bedff3b",
".git/objects/0a/a4c2dc4561113d6d5d24af765bbe6d90031eaf": "5d3ea454d4acbc39629411c80da11b38",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/3a97a715259c4307435e81f5a70e023a3f9e8c": "10995336cb28af403f254e03a3f3eda0",
".git/objects/a9/00c0d243d2e2741de2c4d2dca16f601328c402": "261f394656411e34e7f83b4681a61c10",
".git/objects/d5/cd51acf6a2f69b84818000e66176aec33a4b1f": "3aa77870892f496884940876f2a78dcd",
".git/objects/d2/bef7b88b6b225520a2c4a0d7d074d18f462265": "31951ed118457389f16eee05a0a8fe7c",
".git/objects/af/4d4b242bb90aa74c5e5cf68d3aa70ca4a1f8f9": "a8c60c0f6bb17a9da93628179c4c7385",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/be77a63ced0b426160b6d98d967857ee60b115": "c1d3e6333732925c113fd25fafc1fde6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/415f02d1a1de519ef55c0712f61ff7a624e712": "38d2fef947a1111d8d6b259640a10c1e",
".git/objects/cd/c537b0c25a097eec822b155fa8edcbc6f4d820": "18d040fef99d60295bb5c2fad8184533",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c5/ab6fa814e8870cfcaeca086d59290231eba128": "e07c1de2af2572c280cb8e3013b98046",
".git/objects/c2/f83f8bfea2844de74fb84e7a5490620c9be6ed": "89c74ea00b3f9567f131eebf9550a6f1",
".git/objects/cb/ef1a1664ff0860511375aa01d9734eecd41f0a": "e7f917d32e1db55a4245de9505dd6d97",
".git/objects/ce/25ee8cf3d478a676227b3d222358084de5e368": "7703943265e26bbe92dc84b28faffc52",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/3b1af9a806d9c1602603a4981019585032b537": "2010a345a1182d5057e672ea735542f3",
".git/objects/4f/775475f808dad407f50000fe92fa00ec6fb03e": "d2e7d0db2f0fcfa325f7b6d707dc1802",
".git/objects/8d/c333903d05f9d30ba54915596b4164fc06164f": "69ff464a4b95ee7f85c196137a19e383",
".git/objects/12/6d8e6d0bbc4729a555f0cff72c4fe62dd348b2": "3b5faac1dbe3dbcf1d4e45bc8d31a27c",
".git/objects/8c/f1f9c682a95ab40735d596bfc8085b5e4be41b": "fd73f3015b96f1042132bf052e091f7c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/6fe3c4abd94e0560fe327129367973c7e44edc": "1302d20638274ad8c23010d915e84939",
".git/objects/2b/0c7731a3e32f3bb5e2f903773a96ca5985ef0d": "4557c7e44081907ac081242bd2343b2f",
".git/objects/2b/42e2bc3b7594efe40fabee0e96bfa08fdd964c": "1e930408e292ec7c1c3c956d0c43bc2c",
".git/objects/2b/9a4259a7a6fb2b63e36b9668154cc15a499f32": "444e66d99ee029b0c338ac4e6340348f",
".git/objects/25/0a23ddd98709232811520fb1152ecf470f4bec": "6d9cd725177fc260b23b964f90086929",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "25cc3b9af42301f15f1e2d89b8042a86",
".git/logs/refs/heads/main": "2ccc29a4f7d5189b85ee92439e0b64d5",
".git/logs/refs/remotes/origin/HEAD": "42353b65c8bad13911e985fb41c5c6a3",
".git/logs/refs/remotes/origin/main": "6cb2306efd27ed321484cea6cb56f355",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2658262dfaea6c212b9f0ab8fae47a11",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2658262dfaea6c212b9f0ab8fae47a11",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/COMMIT_EDITMSG": "a1b5bbb322ec306e7a0cfb3e2b924a91",
".git/FETCH_HEAD": "82002f910fd3c2fb5b7095f3bbbd7cff",
"assets/AssetManifest.json": "e8220eb981ac286c82f8402fed739b9f",
"assets/NOTICES": "0cd54e3a677ae6081dc1b6adeac39276",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "99c6f51136d42ad8df8e64080c22fde5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f31f4b5bd767a1e3bbd796e18f2492b2",
"assets/fonts/MaterialIcons-Regular.otf": "53931e7401077fd486259f35ea55aa5e",
"assets/assets/blue_field_flip.jpeg": "0bfa92ad4e106bfd06c385b80d8f777f",
"assets/assets/red_field.png": "a9f67c24ef140fcedbe0c96cb3a73121",
"assets/assets/blue_field.png": "84ade8d7d5374fb46639942a071f0191",
"assets/assets/red_field_flip.png": "5c241b444da0528c3438f112bf972f2d",
"assets/assets/ring.png": "8613149a3eeb4ebc122db416fd29a7da",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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