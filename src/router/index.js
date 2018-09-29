import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from "@/views/layout/layout";
import headerImg from "@/views/headerImg/index";
import writeNote from "@/views/writeNote/index";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'layout',
      component: layout,
      children:[
        {
          path:"headerImg",
          name:"headerImg",
          component:headerImg,
          meta:{
            title:"头图"
          }
        },
        {
          path:"writeNote",
          name:"writeNote",
          component:writeNote,
          meta:{
            title:"写笔记"
          }
        }
      ]
    }
  ]
})
