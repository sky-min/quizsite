import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$Q = [
  ['타이타닉의 구명 보트에는 몇 명이 탈수 있을까?', '넌센스'],
  ['10 × 8 = ?', '수학']
];
Vue.prototype.$A = [
	['9명', '9'],
	['80', '팔십']
];
Vue.prototype.$H = [
	'9명(구명 보트)',
	'80'
];

new Vue({
  el: '#app',
  render: h => h(App)
})
