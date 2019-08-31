// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Todolist from './Todolist'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 挂载点
  el: '#app',
  components: { Todolist },
  template: '<Todolist/>'
})
