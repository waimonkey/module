import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import drain from '../components/Home/drain.vue'
import Appraise from '../components/Home/appraise.vue'
import UserList from '../components/user/List.vue'
import UserAdd from '../components/user/Add.vue'
import UserInfo from '../components/user/info.vue'
import UserEdit from '../components/user/Edit.vue'
import AppMap from '../components/Home/map.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/drains',
      component: drain
    },
    {
      path: '/appraise',
      component: Appraise
    },
    {
      path: '/map',
      component: AppMap
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/users/add',
      component: UserAdd
    },
    {
      path: '/users/:id/info',
      name: 'user.info',
      component: UserInfo
    },
    {
      path: '/users/:id/edit',
      name: 'user.edit',
      component: UserEdit
    }
  ],
  linkActiveClass: 'active'
})
