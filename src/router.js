import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView (view) {
    return () => import(`@/views/${view}.vue`)
}


export default new Router ({
      mode: "history",
      routes: [
        {
            path:'/',
            name:'main',
            component: loadView('Main')
        },
        {
            path:'/module',
            name:'module',
            component: loadView('Module')
        },
        {
            path:'/test1',
            name:'test1',
            component: loadView('Test1')
        }
      ]
})