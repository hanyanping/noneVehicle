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
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.ajaxUrl = '/non_vehicle/';
Vue.use(MintUI);
/* eslint-disable no-new */
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
  else {
      document.addEventListener('WebViewJavascriptBridgeReady', function() {
          callback(WebViewJavascriptBridge)
      }, false)
  }
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
};
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    // var phone = '13444423233';
    // var userId = '12';
    // localStorage.setItem('userId',userId);
    // localStorage.setItem('phone',phone);
    // setupWebViewJavascriptBridge(function(bridge) {
    //   if(isAndroid){
    //       bridge.init(function(message, responseCallback) {
    //         //log('JS got a message', message)
    //           var data = { 'Javascript Responds':'Wee!' }
    //         //log('JS responding with', data)
    //           responseCallback(data)
    //       })
    //   };
    //     /*保险到期提示 */
    //   bridge.callHandler('isLogin', '',function(response){
    //       if(response.isLogin == 'true'){
    //           var userId = response.userid;
    //           var phone = response.phoneNum;
    //           localStorage.setItem('userId',userId);
    //           localStorage.setItem('phone',phone);
    //       }
    //   });
    // });
		next()
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
