import InfiniteScrollInBody from './directive';
import 'mint-ui/src/style/empty.css';
import Vue from 'vue';

const install = function(Vue) {
  Vue.directive('InfiniteScrollInBody', InfiniteScrollInBody);
};

if (!Vue.prototype.$isServer && window.Vue) {
  window.InfiniteScrollInBody = InfiniteScrollInBody;
  Vue.use(install); // eslint-disable-line
}

InfiniteScrollInBody.install = install;
export default InfiniteScrollInBody;
