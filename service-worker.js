/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fe2f2e06b8a5b1441880a75e99dd1441"
  },
  {
    "url": "about/index.html",
    "revision": "fc7e9845bcd24617ab4d08c280a93c2b"
  },
  {
    "url": "archives/index.html",
    "revision": "50fdd55ba9ba43da6010b55877c0b808"
  },
  {
    "url": "assets/css/0.styles.02033fa9.css",
    "revision": "507f2dd857bd5ed95c4009b0fe983657"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fdeafd04.js",
    "revision": "23d31529b930f8cfb189b4836d7abe26"
  },
  {
    "url": "assets/js/11.718caa50.js",
    "revision": "ad67b19269165699c683857130940c57"
  },
  {
    "url": "assets/js/12.c80104ff.js",
    "revision": "eaf4293ca9da46a9b692b073f71d3d33"
  },
  {
    "url": "assets/js/13.00ee5c4d.js",
    "revision": "8f1a7cce62f7ed648d4efb74ccf31171"
  },
  {
    "url": "assets/js/14.afe4a5a9.js",
    "revision": "3a3a0c2245e2f90238896f8a48fb97a3"
  },
  {
    "url": "assets/js/15.6c286f2c.js",
    "revision": "c2e486a97a7ddc5b20fbd6d6b444cbef"
  },
  {
    "url": "assets/js/16.e3bdf017.js",
    "revision": "1f13d140efdba1475e86b4e4dfe3dfa0"
  },
  {
    "url": "assets/js/17.bc5b908d.js",
    "revision": "2834bdccf4796c3860b19a7b355a1083"
  },
  {
    "url": "assets/js/18.063a18f3.js",
    "revision": "3e8efc3e7aea67aae736a504a074ea94"
  },
  {
    "url": "assets/js/19.686c85c8.js",
    "revision": "7c5be64c31bb283b6eefb7c8e7721fff"
  },
  {
    "url": "assets/js/2.6bf691b5.js",
    "revision": "8554faaa02d5e40202d0124b7170c1e3"
  },
  {
    "url": "assets/js/20.f3c2e4d0.js",
    "revision": "174798546d7bd735a96c5a7c157846c1"
  },
  {
    "url": "assets/js/21.58c39726.js",
    "revision": "d29969685df72224944dd72fc2adce1f"
  },
  {
    "url": "assets/js/22.369120c9.js",
    "revision": "5407295b1afede54f46f695ccdb7430b"
  },
  {
    "url": "assets/js/23.f89de527.js",
    "revision": "e2785d73b91c17106b36f1116a068379"
  },
  {
    "url": "assets/js/24.1d387324.js",
    "revision": "a5ea5d1f01b71b8bd2e90a4b2eea9d66"
  },
  {
    "url": "assets/js/25.dc87582c.js",
    "revision": "832d25c6172894613da24b500a5b6973"
  },
  {
    "url": "assets/js/26.4a430fd3.js",
    "revision": "0196a8978f64e99e8a860597fbe6c46f"
  },
  {
    "url": "assets/js/27.3fc29a5f.js",
    "revision": "ae745bd9f99690091618ce6adaef2881"
  },
  {
    "url": "assets/js/28.91823d01.js",
    "revision": "f0d13169b2f77c0badef9f8645758cb1"
  },
  {
    "url": "assets/js/29.3ab9d002.js",
    "revision": "f97df963f0c38f7f37103e9e63443d98"
  },
  {
    "url": "assets/js/3.1fe9b44e.js",
    "revision": "9f35dc8f2d92545c2bcc7cd09f93e564"
  },
  {
    "url": "assets/js/30.46e5e7ab.js",
    "revision": "5f9355b2a301e0acaff0b42e6adb1e6a"
  },
  {
    "url": "assets/js/31.a0a7dd0c.js",
    "revision": "811e039a49ccd7e245b80e23037a3943"
  },
  {
    "url": "assets/js/32.645cd9c5.js",
    "revision": "d446d261776c1b5a3fc78f82a688b560"
  },
  {
    "url": "assets/js/33.a3c6e6c1.js",
    "revision": "f9df51848c0a6883bdd61a5083a864d7"
  },
  {
    "url": "assets/js/34.6b33c78d.js",
    "revision": "43a4706e6552cb7d741c17d9f181ae4c"
  },
  {
    "url": "assets/js/35.e8edf2da.js",
    "revision": "e4e9108904b540bff3614ccd88b9d034"
  },
  {
    "url": "assets/js/36.300edb26.js",
    "revision": "13fca681b26808ee0701853949c294ca"
  },
  {
    "url": "assets/js/37.d907cdaf.js",
    "revision": "273f2f9e82696ef21c7a2354efdeaca2"
  },
  {
    "url": "assets/js/38.c7abe645.js",
    "revision": "595c55409082615a51e3b089b1a0900e"
  },
  {
    "url": "assets/js/39.09a6b281.js",
    "revision": "a91a7d04b57cfd41a5aefdf001e3d19f"
  },
  {
    "url": "assets/js/4.dcd7ca82.js",
    "revision": "01c19f6b4f130cc9a98cc805b0c62264"
  },
  {
    "url": "assets/js/40.2ac2b978.js",
    "revision": "21504f507f9db36af6622c26309a32a3"
  },
  {
    "url": "assets/js/41.63125693.js",
    "revision": "69d6b2fbc8257a191b9739a74341bbdf"
  },
  {
    "url": "assets/js/42.36f006c5.js",
    "revision": "c5f101ecb2ae9f1e42a6aa8de36ce611"
  },
  {
    "url": "assets/js/43.30d76178.js",
    "revision": "839c243e2196ba3e7f444240043f51de"
  },
  {
    "url": "assets/js/44.a5681849.js",
    "revision": "7377fc8b9281afc936e495f6c45e57df"
  },
  {
    "url": "assets/js/45.2900aa66.js",
    "revision": "ccd70cf54861068e46257bc83bc9490b"
  },
  {
    "url": "assets/js/46.339cfcd3.js",
    "revision": "8f26e5e5be926693e2f286fe113ba8bc"
  },
  {
    "url": "assets/js/47.29b85cbe.js",
    "revision": "2ad162c4639c7a53563d775ab31b5a33"
  },
  {
    "url": "assets/js/48.5e21bff6.js",
    "revision": "b4ae8df2426cd5a0de9a6c5947ba5b49"
  },
  {
    "url": "assets/js/49.302f96b7.js",
    "revision": "87e7e42e2cdd4767a2fb84c9ff8a272f"
  },
  {
    "url": "assets/js/5.dc4f1c10.js",
    "revision": "3125bcac4a9a8195ae1c0c351e705411"
  },
  {
    "url": "assets/js/50.80485186.js",
    "revision": "a3020740bf53fda62c8f89b9cd519893"
  },
  {
    "url": "assets/js/51.a1b920fb.js",
    "revision": "e16b440b1dc14d6dab5c5720d1b2e488"
  },
  {
    "url": "assets/js/52.e41bc1fc.js",
    "revision": "a864a7f42e9903a1e49b1cd58ac4e791"
  },
  {
    "url": "assets/js/53.ad7880d7.js",
    "revision": "c79031b0f12e37e7f2b8161bf14eee07"
  },
  {
    "url": "assets/js/54.3c5acbf2.js",
    "revision": "b9d2c9758099fddda9538872bc8fe122"
  },
  {
    "url": "assets/js/55.4746e845.js",
    "revision": "741280f1aed42c6b9fecfb2785589e26"
  },
  {
    "url": "assets/js/56.42a43509.js",
    "revision": "c5e8917ecbf4cf44c5d6620015190b9a"
  },
  {
    "url": "assets/js/57.7ef3b657.js",
    "revision": "50915cd657b90ff06df23a0c8bf10812"
  },
  {
    "url": "assets/js/58.d6e492ed.js",
    "revision": "2c0746533671bb190932d637d946c9a1"
  },
  {
    "url": "assets/js/59.7114a787.js",
    "revision": "8bd55461b7cd89771a30fc2ff5487b34"
  },
  {
    "url": "assets/js/6.69315c79.js",
    "revision": "022ad29d0141c5c3c90cdfcd9adb641c"
  },
  {
    "url": "assets/js/60.6247957c.js",
    "revision": "eac8ad595fafc092c87e6a1bf0880ecd"
  },
  {
    "url": "assets/js/61.911f4e64.js",
    "revision": "280303db9b3e288d1f6f9d0cb2e9beee"
  },
  {
    "url": "assets/js/7.cb16bba4.js",
    "revision": "5ec4985ded31b42119ed29bb43065db2"
  },
  {
    "url": "assets/js/8.8ed2b0ab.js",
    "revision": "13a2065de394a417b5d636e216b56094"
  },
  {
    "url": "assets/js/9.f331c573.js",
    "revision": "afa46f3c4c743d9b753bd157e150e464"
  },
  {
    "url": "assets/js/app.f838b83e.js",
    "revision": "792f0c0ab1893fefe04c2d9846817104"
  },
  {
    "url": "buildWebsite/index.html",
    "revision": "dfe723d36f049851815f4e141362494a"
  },
  {
    "url": "categories/index.html",
    "revision": "2c25b58232447fb3d068eced736d5acc"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "e9edff1de590e3769fbdfede047bb487"
  },
  {
    "url": "img/bg.jpeg",
    "revision": "bf3e56b6219d2cfcd39eda9b4d1ab69d"
  },
  {
    "url": "img/bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "img/blog.png",
    "revision": "1d66f8a29a60545900f7c03d99609fae"
  },
  {
    "url": "img/git.png",
    "revision": "26caa7e6d6476cf41146237fea40df9d"
  },
  {
    "url": "img/java.png",
    "revision": "62430eb3ecae734bdf6e5218050da7e6"
  },
  {
    "url": "img/logo.jpg",
    "revision": "e9edff1de590e3769fbdfede047bb487"
  },
  {
    "url": "img/media.png",
    "revision": "49ff9a7468b101259872b00e7d706b45"
  },
  {
    "url": "img/tx.jpg",
    "revision": "f85479077bdd585ca7adbca15b3c6e3c"
  },
  {
    "url": "img/tx2.jpg",
    "revision": "bf900b0058c4368fb24856117b253319"
  },
  {
    "url": "img/web.png",
    "revision": "8f9e0a33a0222f13c4a766fd3581fe35"
  },
  {
    "url": "index.html",
    "revision": "d4f40bfaa4d5cde02bd2f3aaef560289"
  },
  {
    "url": "items/index.html",
    "revision": "7dd9d2c9de815ee715a09993fc2d18a9"
  },
  {
    "url": "javaweb/index.html",
    "revision": "e70e3cde2c141f67f9b0e76aab7257bb"
  },
  {
    "url": "jeecg-boot/index.html",
    "revision": "a729bc18b26450ce4866aab6dd7405fa"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e1fce1a4837ff2ce4a3af7cc4805d2b1"
  },
  {
    "url": "lifelog/index.html",
    "revision": "02549aa3cc3330938f5666c1dde728e9"
  },
  {
    "url": "linuxandshell/index.html",
    "revision": "3088c6ecf875c46358c9bfe6d569ebea"
  },
  {
    "url": "media/index.html",
    "revision": "5fa7cedbf6ef7adb09d312503bad7509"
  },
  {
    "url": "nichetech/index.html",
    "revision": "8ca75ce0c6fbf5a00f9838fa05938783"
  },
  {
    "url": "pages/02be36/index.html",
    "revision": "ed6c26acad97836ff3c74d4f52983a6b"
  },
  {
    "url": "pages/04f104/index.html",
    "revision": "0551506fa222c7d24d4558412a83df44"
  },
  {
    "url": "pages/22b946/index.html",
    "revision": "5d19820a2c0d595ea58fc1671e889cfb"
  },
  {
    "url": "pages/2587e8/index.html",
    "revision": "55b057997381ac36853001684c212cae"
  },
  {
    "url": "pages/2899d1/index.html",
    "revision": "9d09d30c7de980dffc53990c77847d2e"
  },
  {
    "url": "pages/378611/index.html",
    "revision": "d87fa722b59e1080ec6e333edbd626dc"
  },
  {
    "url": "pages/65bdc4/index.html",
    "revision": "f093d0365649a9ecf2b3d590981d551b"
  },
  {
    "url": "pages/6693a3/index.html",
    "revision": "2724f194a1734c68a7ea74970440bbc4"
  },
  {
    "url": "pages/73a216/index.html",
    "revision": "025a0e97caa8a106ccbadc01693ec2ed"
  },
  {
    "url": "pages/77de88/index.html",
    "revision": "094b14b894bb68f9cf3ac044c1026fc4"
  },
  {
    "url": "pages/7f5bcb/index.html",
    "revision": "26499ebb25c0464b9ce6b80a6f94c1a5"
  },
  {
    "url": "pages/82612b/index.html",
    "revision": "11056ca9c9c969888554ff6930ba3dfa"
  },
  {
    "url": "pages/8aaaae/index.html",
    "revision": "28272fab763cf97438c3cc426fbeba4a"
  },
  {
    "url": "pages/8c71af/index.html",
    "revision": "67f4341c9d8803298d2f88595877ee9b"
  },
  {
    "url": "pages/937ff5/index.html",
    "revision": "b779a232d490259cc6b22698a691673e"
  },
  {
    "url": "pages/9925ff/index.html",
    "revision": "90d9f805d8abe42724a98169a75a5de3"
  },
  {
    "url": "pages/9b3747/index.html",
    "revision": "bac1218cf59ab2c5d68bfcf6ff7dbbb5"
  },
  {
    "url": "pages/9c2189/index.html",
    "revision": "46363f6ee086fd20aed06b34e0353618"
  },
  {
    "url": "pages/9c228e/index.html",
    "revision": "3534e462460944b2fb2738cbcd87ef03"
  },
  {
    "url": "pages/9cb9f3/index.html",
    "revision": "575bec1e73043fbc2705e7e4b694813d"
  },
  {
    "url": "pages/9d4a22/index.html",
    "revision": "89fa7a466d5c0000dc6f1689b3265e39"
  },
  {
    "url": "pages/a23606/index.html",
    "revision": "4d8c379f7a0e52089891fbeb706cd139"
  },
  {
    "url": "pages/a7d8df/index.html",
    "revision": "350842f93f36508e8f4a7bd1255f0ef0"
  },
  {
    "url": "pages/aa4305/index.html",
    "revision": "39874877f0c08fd1268e81f1bea01f2c"
  },
  {
    "url": "pages/ab6ea4/index.html",
    "revision": "d2ee058ca71f6b99b91410fd273fa88d"
  },
  {
    "url": "pages/b72d93/index.html",
    "revision": "29eb45033622da792fc248bc9c9b3779"
  },
  {
    "url": "pages/c04e0c/index.html",
    "revision": "f1ae2e4aaa64fb3c68f56172c00b6582"
  },
  {
    "url": "pages/c127de/index.html",
    "revision": "7743eb6c8c71b04f615662c7d8a0607c"
  },
  {
    "url": "pages/c56d05/index.html",
    "revision": "acc173641c630f617dbb813799193efc"
  },
  {
    "url": "pages/dbc68b/index.html",
    "revision": "9e9d6eefbab4512fa6def1abfbae35d3"
  },
  {
    "url": "pages/dc5ce1/index.html",
    "revision": "81640bdc551c7dd0ae93d64e97eaef3d"
  },
  {
    "url": "pages/e3ff90/index.html",
    "revision": "bf55deee4476ae08107f2af064e0c742"
  },
  {
    "url": "pages/e79e98/index.html",
    "revision": "5b80e9f262af00964f398106aa30de4c"
  },
  {
    "url": "pages/eaeb0d/index.html",
    "revision": "298ebc26e27f3669c037fdff63dcdb50"
  },
  {
    "url": "pages/eb1799/index.html",
    "revision": "d6ad13bb76687ff4a044c530ccd98f43"
  },
  {
    "url": "pages/eea94d/index.html",
    "revision": "5a61522fbd80945d10521d7a9cfa1842"
  },
  {
    "url": "pages/f01e08/index.html",
    "revision": "586edf1f53f4e99c65454b03d13364fb"
  },
  {
    "url": "pages/f4fe76/index.html",
    "revision": "918a88d0337a1ac009a9d15fad588d49"
  },
  {
    "url": "tags/index.html",
    "revision": "34ccebd06ec5e977f0215d6ccec410ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
