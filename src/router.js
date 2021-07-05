import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', name: 'form', component: () => import('./Form.vue') },
      { path: '/preview', name: 'preview', component: () => import('./Preview.vue') },

    ]
  })