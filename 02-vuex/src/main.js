import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import Echart from 'echarts'
import store from './store/index'

// import '../src/assets/js/rem.js'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.prototype.$Echart = Echart
Vue.use(VueQuillEditor)

Vue.use(ElementUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
