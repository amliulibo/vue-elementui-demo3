/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-03 13:53:29
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-03 22:06:53
 * @FilePath: \vue-elementui-demo3\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/login"
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
	  path:"/login",
	  name:"login",
	  component:()=>import("../views/login/index.vue")
  },
  {
  	  path:"/home",
  	  name:"home",
  	  component:()=>import("../views/home/index.vue"),
      children:[
        {
            path:"/stats",
            name:"stats",
            component:()=>import("../views/home/stats/index.vue")
        },
        {
            path:"/wms",
            name:"wms",
            component:()=>import("../views/home/wms/index.vue"),
            children:[
              {
                path:"/wms/list",
                name:"/wms_list",
                component:()=>import ("../views/home/wms/wmslist.vue"),

              }
            ]
            
        },
        {
          path:"/index",
          name:"index",
          component:()=>import("../views/home/index/index.vue")
        }
      ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
