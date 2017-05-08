// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import AMap from 'vue-amap'

Vue.config.productionTip = false

// 加载css 文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/element-ui/lib/theme-default/index.css'
import './assets/css/main.css'
import './assets/css/Appraise.css'
Vue.use(ElementUI)

Vue.use(AMap)
// 初始化vue-amap
AMap.initAMapApiLoader({
// 高德的key
  key: 'b2e4c0cb93928b20a66a58fae6a7ef0e',
// 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
