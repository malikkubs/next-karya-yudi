if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const _=e=>i(e,c),o={module:{uri:c},exports:r,require:_};s[c]=Promise.all(a.map((e=>o[e]||_(e)))).then((e=>(n(...e),r)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Ig.svg",revision:"1f212d8cbd769cb409aa1dda306025ee"},{url:"/_next/static/GVTYWO7lb8-C9GgFolMbw/_buildManifest.js",revision:"759d1802e1864923fee9df85e90ec794"},{url:"/_next/static/GVTYWO7lb8-C9GgFolMbw/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/GVTYWO7lb8-C9GgFolMbw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/659-21ff30615dc920d4.js",revision:"21ff30615dc920d4"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-e380ed469c5a0a07.js",revision:"e380ed469c5a0a07"},{url:"/_next/static/chunks/pages/_app-49bcc2801a910a8f.js",revision:"49bcc2801a910a8f"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/index-608e5c164c99051c.js",revision:"608e5c164c99051c"},{url:"/_next/static/chunks/pages/sitemap.xml-468a9e6f6c8e65a7.js",revision:"468a9e6f6c8e65a7"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"d7b038a63b619762"},{url:"/_next/static/css/5cdd77e856957807.css",revision:"5cdd77e856957807"},{url:"/about.svg",revision:"e409b2c760085204df2e0f7ef34dcc12"},{url:"/assets/icons/icon-128x128.png",revision:"15ffc1cd4b31e693dd809c2fa4742349"},{url:"/assets/icons/icon-144x144.png",revision:"72f7f3c373e84ec24af96394df500b9f"},{url:"/assets/icons/icon-152x152.png",revision:"78f497d362e29297636d625949e7e5e6"},{url:"/assets/icons/icon-192x192.png",revision:"18aa076e86e1b1d720a1faf8490db060"},{url:"/assets/icons/icon-384x384.png",revision:"a9304147afc34255eba5ee9952c970f5"},{url:"/assets/icons/icon-48x48.png",revision:"9efa548514b842fe39683e650aeef396"},{url:"/assets/icons/icon-512x512.png",revision:"d498b645cad76262c13a3a7c0f4b9fa0"},{url:"/assets/icons/icon-72x72.png",revision:"1a70a1dc8cc28fabd594d0bb24ea1900"},{url:"/assets/icons/icon-96x96.png",revision:"9fe177a27d002ae5052c957a6452ee80"},{url:"/email.svg",revision:"0dffbd1cdaa7295449547f74f15abe0f"},{url:"/favicon.ico",revision:"8d430774614de0c6c1c9264be28be2eb"},{url:"/favicon2.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/foto.png",revision:"f227468c19b80b51487b9717a1d230b6"},{url:"/github-red.svg",revision:"2ce417e3132c76521e88ae23968b6146"},{url:"/github.svg",revision:"ac81b1d807e5941b0f1bf9679c0c2c32"},{url:"/home.svg",revision:"826e973202ee11081ba1582a4adb4149"},{url:"/iconwa.svg",revision:"b9e337698cee4bcd09b818497f4f8693"},{url:"/ig-red.svg",revision:"1f212d8cbd769cb409aa1dda306025ee"},{url:"/img-project/Logoambyarfood.jpg",revision:"dddeac60997eaadac06f211bb4b03c82"},{url:"/img-project/ambyarfood.jpg",revision:"f734e4c7499bece2912992e684b9a2c0"},{url:"/img-project/cashire.png",revision:"f59a28672c026ec4949e536570241f00"},{url:"/img-project/desaku.jpg",revision:"a7fff542358a2e8fed9a5084490a18b8"},{url:"/img-project/jokocomic.jpg",revision:"11b49a731252edd151b8b1adf42ae91e"},{url:"/img-project/karyayudi.png",revision:"ddae714b1887ce79e9ef7d8b7020e856"},{url:"/img-project/kuno.jpg",revision:"4c54f8f7197bfc1e33f5ce4304749b14"},{url:"/img-project/logo-game.png",revision:"6d5589fa7026eb455f3737b4855bb2c8"},{url:"/img-project/mkstudio.jpg",revision:"95312503a20247dca8de4b80575387ad"},{url:"/japan-wave.jpg",revision:"9f577a199a1ac932d7a954b26c9f70da"},{url:"/japan-wave.png",revision:"f13b29680e6292681d6fad470ee7754c"},{url:"/japan-wave2.png",revision:"6eef52287df50259fbf66e8eb20c258a"},{url:"/jepan.webp",revision:"fdab78a01dfc5a53539e9c3c8d3cd164"},{url:"/linkedin.svg",revision:"6bea9f2e0bc1fba986a6cc27edc9656c"},{url:"/logo.svg",revision:"40746bf180b54664291d3ff6501debcf"},{url:"/manifest.json",revision:"9685a0ced2a9de2596f0adf14ca91d31"},{url:"/megamendung1.png",revision:"67f033df396fc3194025a7f23000f5b6"},{url:"/megamendung10.webp",revision:"28b30827b37a8902b42bf86c06bb35e5"},{url:"/megamendung_pattern.jpg",revision:"2581c1d5d8ab696920af09d25a1db5e4"},{url:"/menu.svg",revision:"9c78e8968ab433835260fdbfaf1c750d"},{url:"/myskill.svg",revision:"38a2d6faab90b2445055c5bb8547f736"},{url:"/portfolio.svg",revision:"063cd252bd659af1aac420b761c4c444"},{url:"/splash_screens/10.2__iPad_landscape.png",revision:"dacb9b7fa5772df8a03b83b52dbc26cf"},{url:"/splash_screens/10.2__iPad_portrait.png",revision:"d990963d979c69e1d98c77ce877a4081"},{url:"/splash_screens/10.5__iPad_Air_landscape.png",revision:"21ce26abd799f104b8f0d09792b090b7"},{url:"/splash_screens/10.5__iPad_Air_portrait.png",revision:"e043952f39931a3b11348ff5b9c243fd"},{url:"/splash_screens/10.9__iPad_Air_landscape.png",revision:"761c9155967952753623a4d0e77a274f"},{url:"/splash_screens/10.9__iPad_Air_portrait.png",revision:"43dd05471364e27f8a828b45e849c17c"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"aa1b775b6505954093624ff863440bdb"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"a5f38d60763d0fdacbbcb2e2ec058498"},{url:"/splash_screens/12.9__iPad_Pro_landscape.png",revision:"0f08fbf4fff75c5660fa6ef56e64c750"},{url:"/splash_screens/12.9__iPad_Pro_portrait.png",revision:"c037b751da04b399cf1224f2dfebbacc"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"475bb12d4ff1af1ef2f8e39bff73c161"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"a0677ab4957081ece972cb7d1b232aa0"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"06521211cbb98804a79e38d5671222c7"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"4a94e2adb848cef6382e05faf66f8fbd"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"cbc91bc170fbc167d13ffc05c9294bc1"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"b99b8715fa3ee5e392ea6ed4b6f2b253"},{url:"/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"8b3099afbd827a9649f8ccf173b67cf1"},{url:"/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"40d7cc3120c4ea89856fced910497b79"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"27e48345875372928a917795d39825f0"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"860d2441eaef0ecbaf7ccc4ddcb5df2c"},{url:"/splash_screens/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"3a2361cf6b68666a95d81c58b2dd07d8"},{url:"/splash_screens/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"840ec157d4d50669fcd4955a4503c002"},{url:"/splash_screens/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"51e39ccc84657c2d44ba044da8a1cf13"},{url:"/splash_screens/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"39538428d58c98b3d87138eeeb9a1924"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"3087e7c5006fa1a917e546277ee07272"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"b3662869d93a285467cabe612a9c257b"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"534683260248a37a6ac197c081c16c8f"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"83238f7019c862c8d021946f8fd62704"},{url:"/splash_screens/icon.png",revision:"d498b645cad76262c13a3a7c0f4b9fa0"},{url:"/thumnail.png",revision:"ddae714b1887ce79e9ef7d8b7020e856"},{url:"/unduh/KeryaYudiNextProd",revision:"7530bcd53e7b3dd92d986d84513195df"},{url:"/unduh/gamezombie.exe",revision:"f4786640c9b4fc1ed693720ab1d649ce"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/xx.svg",revision:"423f952caeef7dba5c5a60e582833679"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
