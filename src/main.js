import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$Q = [
  ['이 나라 이름은?', '세계']
];
Vue.prototype.$I = [
  './assets/korean-flag.png' //이미지가 핑요 없는 문제라면  ''
];
Vue.prototype.$A = [
  ['한국', '대한민국', 'korea', 'KOREA']
];
Vue.prototype.$H = [
	'대한민국'
];

new Vue({
  el: '#app',
  render: h => h(App)
})
