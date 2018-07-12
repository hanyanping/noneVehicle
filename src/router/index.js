import Vue from 'vue'
import Router from 'vue-router'
import parentComponent from '@/components/parentComponent'
import childComponent from '@/components/childComponent'
import parentTwo from '@/components/parentTwo'
import childTwo from '@/components/childTwo'
import personalDeclaration from '@/views/personalDeclaration'
import guild from '@/views/guild'
import companyDeclar from '@/views/companyDeclar'
import historyList from '@/views/historyList'
import listDetail from '@/views/listDetail'
import subscribe from '@/views/subscribe'
import erweima from '@/views/erweima'
import subSucess from '@/views/subSucess'
import showResult from '@/views/showResult'
import regular from '@/components/regular'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/personalDeclaration',
      name: 'personalDeclaration',
      component: personalDeclaration
    },
    {
      path: '/guild',
      name: 'guild',
      component: guild
    },
    {
      path: '/companyDeclar',
      name: 'companyDeclar',
      component: companyDeclar
    },
    {
      path: '/historyList',
      name: 'historyList',
      component: historyList
    },
    {
      path: '/listDetail',
      name: 'listDetail',
      component: listDetail
    },
    {
      path: '/showResult',
      name: 'showResult',
      component: showResult
    },
    {
      path: '/parentComponent',
      name: 'parentComponent',
      component: parentComponent
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: subscribe
    },
    {
      path: '/erweima',
      name: 'erweima',
      component: erweima
    },
    {
      path: '/subSucess',
      name: 'subSucess',
      component: subSucess
    },
    {
      path: '/childComponent',
      name: 'childComponent',
      component: childComponent
    },
    {
      path: '/parentTwo',
      name: 'parentTwo',
      component: parentTwo
    },
    {
      path: '/childTwo',
      name: 'childTwo',
      component: childTwo
    },
    {
      path: '/regular',
      name: 'regular',
      component: regular
    }
  ]
})
