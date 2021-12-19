import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$Q = [ //문제
	'타이타닉의 구명 보트에는 몇 명이 탈수 있을까?'
];
Vue.prototype.$A = [ //정답이라 인정할 값
	['9명', '9']
];
Vue.prototype.$H = [ //틀렸을때 출력할 답
	'9명(구명 보트)'
];

new Vue({
  el: '#app',
  render: h => h(App)
})
