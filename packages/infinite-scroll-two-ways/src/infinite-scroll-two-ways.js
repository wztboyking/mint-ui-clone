import InfiniteScrollTwoWays from './directive';
import 'mint-ui/src/style/empty.css';
import Vue from 'vue';

const install = function(Vue) {
  Vue.directive('InfiniteScrollTwoWays', InfiniteScrollTwoWays);
};

if (!Vue.prototype.$isServer && window.Vue) {
  window.InfiniteScrollTwoWays = InfiniteScrollTwoWays;
  Vue.use(install); // eslint-disable-line
}

InfiniteScrollTwoWays.install = install;
export default InfiniteScrollTwoWays;
