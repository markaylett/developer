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
    "revision": "83c06ce060a0767e0dcf3a80bc25ac37"
  },
  {
    "url": "api/index.html",
    "revision": "fbc12725877b9f99f8240bf73af60de2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b217ea963ec2cf3748d55ec1d7766a78"
  },
  {
    "url": "assets/css/0.styles.b176249a.css",
    "revision": "2270d6b336a8e5e8d611d0ee31615fd6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8073b9be.js",
    "revision": "f7215b8316a57be799748c45f9386e7b"
  },
  {
    "url": "assets/js/11.79a19ae2.js",
    "revision": "f5f32930f7825fe3c3ee29b9c62884dc"
  },
  {
    "url": "assets/js/2.7a1d3e00.js",
    "revision": "438ebc1fd701d07ed06d3ea5e860e6e1"
  },
  {
    "url": "assets/js/3.4c78530f.js",
    "revision": "2ee4641a3ac0215a33996de3c6c25936"
  },
  {
    "url": "assets/js/4.615ef18c.js",
    "revision": "0a6802723e26777cc4c34037481dec2f"
  },
  {
    "url": "assets/js/5.9817a826.js",
    "revision": "c445a9d3876d113a8ffa75640d584d8e"
  },
  {
    "url": "assets/js/6.6c9a955a.js",
    "revision": "5d6a5658a0f797bebbc8a6ace3466d24"
  },
  {
    "url": "assets/js/7.1b26d590.js",
    "revision": "2385e5fee4c48ad154cad462db7ec1a7"
  },
  {
    "url": "assets/js/8.03356b69.js",
    "revision": "f9e0578f5f3ae96b5bdc3223db1099a2"
  },
  {
    "url": "assets/js/9.800deccd.js",
    "revision": "1e97b2bbf9605e856c3b59065b71ed64"
  },
  {
    "url": "assets/js/app.b7180cf4.js",
    "revision": "2826ac0560b9768428b91179727556e8"
  },
  {
    "url": "devices.png",
    "revision": "73bf6c10c4e9e5e769bc4bac81e3b024"
  },
  {
    "url": "favicon-128.png",
    "revision": "9164c616e213164328aaf8071f5e8d5a"
  },
  {
    "url": "favicon-16.png",
    "revision": "5bc043dba2ae3b27e16bb63e89c0970e"
  },
  {
    "url": "favicon-32.png",
    "revision": "280e893552a95d932583dc3f1084e596"
  },
  {
    "url": "favicon-512.png",
    "revision": "5b7f6b1b0d488319a8475e8f6c878275"
  },
  {
    "url": "favicon-64.png",
    "revision": "6e2b7a92606ce45a9f57356fbb32a7c9"
  },
  {
    "url": "icon-128.png",
    "revision": "0e9ddec1ca8bceae0dda830cebf8aa9f"
  },
  {
    "url": "icon-192.png",
    "revision": "fd6d32cbbee16ff26a3975d585970597"
  },
  {
    "url": "icon-256.png",
    "revision": "c71800b2c4f701b9540b77d9ea0f336c"
  },
  {
    "url": "icon-512.png",
    "revision": "bd295da788c068ddba15fadc5a6c74b0"
  },
  {
    "url": "index.html",
    "revision": "a999588da2859f347ae22036725e62da"
  },
  {
    "url": "logo-light.png",
    "revision": "7c6a2a5395c741fbe271ef2a5d8a25ac"
  },
  {
    "url": "sdk/java/index.html",
    "revision": "f435f99b90fc08e4dde3dab497b128ff"
  },
  {
    "url": "sdk/js/index.html",
    "revision": "fa58eb1b13a09bdfe68bc4040ddf093d"
  },
  {
    "url": "sdk/py/index.html",
    "revision": "65c6125befef79425da5e3b69baecc12"
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
