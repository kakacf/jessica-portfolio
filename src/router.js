import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    mode: "history",
    routes:[
        {
            path:'/',  
            name:'home', 
            component: () =>import('./views/home'),
        },
        {
            path:'/projectimg',  
            name:'projectimg', 
            component: () =>import('./components/project-img')
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
});
export default router;