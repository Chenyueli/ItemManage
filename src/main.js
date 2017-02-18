// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import store from 'store'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'
import store from './store'
import App from './App'
import NotFound from './components/404'
import Login from './components/Login'
import Home from './components/Home'
import ManageSort from './components/ManageSort'
import AddItems from './components/AddItems'
import ManageOrder from './components/ManageOrder'
import ManageValuable from './components/ManageValuable'
import ViewProducts from './components/ViewProducts'

require('./assets/font-awesome.min.css')

Vue.use(VueRouter)
Vue.use(VueResouce)

const routes = [{
	path:'/',
	component: Home
},{
	path:'/home',
	// redirect:'/home/manageSort',
	component:Home,
	children:[
	{path:'manageSort',component:ManageSort},
	// {path:'addItems',component:AddItems},
	{name:'addCargo',path:'addCargo/:appBorr',component:AddItems},
	// {path:'manageSort',component:ManageSort},
	{name :'manageSort',path:'manageSort/:appBorr',component:ManageSort},
	{path:'manageOrder',csomponent:ManageOrder},
	{name:"manageOrder", path:'applyOrder/:orderType/:status',component:ManageOrder},
	{path:'manageValuable',component:ManageValuable},
	// {name : "products",path:'viewProducts/:type',component:ViewProducts},
	{name : "myproducts",path:'viewProducts/:appBorr/:type',component:ViewProducts},
	]
},{
	path:'/login',
	component:Login
},{
	path : '*',
  component : NotFound
}];

const router = new VueRouter({routes});
// 定义全局重定向规则
// router.redirect({
// 	'/home':'/home/applyOrder'

// });

Vue.config.devtools = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  // components: { App,Login,Home,NotFound}
  ...App,
});
