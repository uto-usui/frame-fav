import 'babel-polyfill';
import Vue from 'Vue';

import favButton from 'Component/button';

// import __$ from './utility/selector';

////
new Vue({
  el: '#app',
  components: {
    favButton
  },
  data: {
    message: 'Hello,Vue.js!',
    buutonState: {
      loading: false,
      disabled: false,
    }
  },
  methods: {
  }
});
