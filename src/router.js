import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
        {
            path:'/',  
            name:'HelloWorld', 
            component: () =>import('./components/HelloWorld')
        },
        
    ]
});
export default router;