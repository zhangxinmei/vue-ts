import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import '@babel/polyfill';
import "normalize.css/normalize.css";
import FastClick from "fastclick";

// iOS 300ms延迟
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      (FastClick as any).attach(document.body);
    },
    false
  );
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
