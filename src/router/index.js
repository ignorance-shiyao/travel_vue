import Vue from 'vue'
import Router from 'vue-router'
// import Home from "@/pages/home/Home";
// import City from "@/pages/city/City";
// import Detail from "@/pages/detail/Detail";

Vue.use(Router);

// 异步加载，如果项目较大考虑使用异步拆分，
// 如果项目较小直接引用就可以，以避免多次请求影响性能
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home')
  },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
