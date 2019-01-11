
// 引用模板
import Login from '../page/Login.vue'
import NotFound from '../page/404.vue';
import Home from '../page/Home.vue';
// 配置路由
export default[
  {
    path: '/Login',
    component: Login    
  },
  {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true,
  },
  {
    path: '/',
    component: Home
}
]