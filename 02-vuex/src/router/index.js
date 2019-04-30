import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/table/table.vue'
import Editor from '@/components/editor/editor.vue'
import Copy from '@/components/copy/copy.vue'
import Vuex from '@/components/vuex/vuex.vue'

// 路由懒加载
const Form = () => import('@/components/form/form.vue')
const Layout = () => import('@/components/layout/layout.vue')
const Echart = () => import('@/components/echart.vue')
const Circle = () => import('@/components/circle.vue')
const Line = () => import('@/components/line.vue')
// const Project = () => import('@/components/project.vue')
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/project',
    //   name: 'project',
    //   component: Project
    // },
    {
      path: '/line',
      name: 'line',
      component: Line
    },
    {
      path: '/circle',
      name: 'circle',
      component: Circle
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex
    },
    {
      path: '/copy',
      name: 'copy',
      component: Copy
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/echart',
      name: 'echart',
      component: Echart
    }
  ]
})
