import 'babel-polyfill';
import Vue from 'Vue';


$('.main').addClass('is-active');

////
new Vue({
  el: '#app',
  components: {
  },
  data: {
    message: 'Hello,Vue.js!'
  }
});
