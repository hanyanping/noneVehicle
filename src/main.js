// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//引入插件与第三方库
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import '../static/reset.css'
import '../static/flexible.debug.js'
import '../static/flexible_css.debug.js'
import 'viewerjs/dist/viewer.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.ajaxUrl = '/non_vehicle/';

Vue.use(MintUI);

/* eslint-disable no-new */
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  else {
    document.addEventListener('WebViewJavascriptBridgeReady', function () {
      callback(WebViewJavascriptBridge)
    }, false)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
};

function setTitle(title) {
  document.title = title || document.title;
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger" && !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)) {
    var ifr = document.createElement('iframe')
    ifr.src = "/favicon.ico";
    ifr.onload = function () {
      setTimeout(function () {
        ifr.remove();
      }, 0)
    }
    document.body.appendChild(ifr);
  }
}

router.beforeEach((to, from, next) => {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android??
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios??
  setTitle(to.meta.title)
  // next()
  if (to.name == 'guild') {
    if (Vue.prototype.bridge) {
      next()
    } else {
      setupWebViewJavascriptBridge(function (bridge) {//调用原生方法
        if (isAndroid) {
          bridge.init(function (message, responseCallback) {
            //log('JS got a message', message)
            var data = {'Javascript Responds': 'Wee!'}
            //log('JS responding with', data)
            responseCallback(data)
          })
        }
        ;
        bridge.callHandler('isLogin', '', function (response) {
          if (response.isLogin == 'true') {
            var userId = response.userid;
            var phone = response.phoneNum;
            localStorage.setItem('userId', userId);
            localStorage.setItem('phone', phone)
            Vue.prototype.bridge = bridge;
            setTimeout(next(), 13)
          }
        });
      });
    }
  } else {
    next()
  }
})
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
