//页面路由配置
import Vue from 'vue'
import Router from 'vue-router'
//首页
import Index from '@/pages/index/Index'


Vue.use(Router)

export default new Router({
  routes: [	
	 //首页
	{
      path: '/',
      name: 'index',//首页
      component: Index    
    },	
  ]
})
