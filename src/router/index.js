import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Product
import Product from '../views/Product/list'
import AddProduct from '../views/Product/add'
import EditProduct from '../views/Product/edit'
import DetailProduct from '../views/Product/detail'

Vue.use(Router)


export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/add-product',
			name: 'add-product',
			component: AddProduct
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/edit-product',
			name: 'edit-product',
			component: EditProduct
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/detail-product',
			name: 'detail-product',
			component: DetailProduct
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		}
	]
})
