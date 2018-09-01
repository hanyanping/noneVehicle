import Vue from 'vue'
import Router from 'vue-router'
import parentComponent from '@/components/parentComponent'
import childComponent from '@/components/childComponent'
import parentTwo from '@/components/parentTwo'
import childTwo from '@/components/childTwo'
import personalDeclaration from '@/views/personalDeclaration'
import guild from '@/views/guild'     //  申报
import declareSuccess from '@/views/declareSuccess'     //  申报成功页面
import regList from '@/views/RegList'     //  一览表
import pass from '@/views/pass'     //申请成功
import companyDeclar from '@/views/companyDeclar'
import historyList from '@/views/historyList'
import listDetail from '@/views/listDetail'
import subscribe from '@/views/subscribe'
import erweima from '@/views/erweima'
import subSucess from '@/views/subSucess'
import showResult from '@/views/showResult'
import regular from '@/components/regular'
import onlinesublist from '@/views/onlinesublist'
import searchcar from '@/views/searchcar'
import onlinechoose from '@/views/onlinechoose'
import personsubscribe from '@/views/personsubscribe'
import subscribecode from '@/views/subscribecode'
import onlineverify from '@/views/onlineverify'
import onlinelistDetail from '@/views/onlinelistDetail'
Vue.use(Router)

export default new Router({
    base: '/vehicle/',
    mode: 'history',
    routes: [
        {
            path: '/personalDeclaration',
            name: 'personalDeclaration',
            component: personalDeclaration,
            meta: {
                title: '个人申报'
            }
        },
        {
            path: '/onlinelistDetail',
            name: 'onlinelistDetail',
            component: onlinelistDetail,
            meta: {
                title: '信息详情'
            }
        },
        {
            path: '/',
            name: 'guild',
            component: guild,
            meta: {
                title: '过渡期电动自行车'
            }
        },
        {
            path: '/onlinechoose',
            name: 'onlinechoose',
            component: onlinechoose,
            meta: {
                title: '过渡期电动自行车'
            }
        },
        {
            path: '/onlineverify',
            name: 'onlineverify',
            component: onlineverify,
            meta: {
                title: '过渡期电动自行车'
            }
        },
        {
            path: '/personsubscribe',
            name: 'personsubscribe',
            component: personsubscribe,
            meta: {
                title: '个人申报（预约）'
            }
        },
        {
            path: '/subscribecode',
            name: 'subscribecode',
            component: subscribecode,
            meta: {
                title: '预约二维码'
            }
        },
        {
            path: '/regList',
            name: 'regList',
            component: regList,
            meta: {
                title: '个人申报'
            }
        },
        {
            path: '/declareSuccess',
            name: 'declareSuccess',
            component: declareSuccess,
            meta: {
                title: '申请成功'
            }
        },

        {
            path: '/searchcar',
            name: 'searchcar',
            component: searchcar,
            meta: {
                title: '过渡期电动自行车'
            }
        },
        {
            path: '/companyDeclar',
            name: 'companyDeclar',
            component: companyDeclar,
            meta: {
                title: '单位预录入'
            }
        },
        {
            path: '/onlinesublist',
            name: 'onlinesublist',
            component: onlinesublist,
            meta: {
                title: '非机动车申请记录'
            }
        },
        {
            path: '/pass',
            name: 'pass',
            component: pass,
            meta: {
                title: '审核成功'
            }
        },
        {
            path: '/historyList',
            name: 'historyList',
            component: historyList,
            meta: {
                title: '非机动车申请记录'
            }
        },
        {
            path: '/listDetail',
            name: 'listDetail',
            component: listDetail,
            meta: {
                title: '信息详情'
            }
        },
        {
            path: '/showResult',
            name: 'showResult',
            component: showResult,
            meta: {
                title: '扫码结果展示'
            }
        },
        {
            path: '/parentComponent',
            name: 'parentComponent',
            component: parentComponent,
            meta: {
                title: '个人申报'
            }
        },
        {
            path: '/subscribe',
            name: 'subscribe',
            component: subscribe,
            meta: {
                title: '预约办理'
            }
        },
        {
            path: '/erweima',
            name: 'erweima',
            component: erweima,
            meta: {
                title: '非机动车信息二维码'
            }
        },
        {
            path: '/subSucess',
            name: 'subSucess',
            component: subSucess,
            meta: {
                title: '预约成功'
            }
        },
        {
            path: '/childComponent',
            name: 'childComponent',
            component: childComponent,
            meta: {
                title: '个人申报'
            }
        },
        {
            path: '/parentTwo',
            name: 'parentTwo',
            component: parentTwo,
            meta: {
                title: '个人申报'
            }
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
