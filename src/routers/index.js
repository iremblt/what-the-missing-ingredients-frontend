import { createRouter, createWebHistory } from 'vue-router'
import RecipeList from '../views/recipe/ListPage.vue'
import HomePage from '../views/recipe/HomePage.vue'
import RecipeDetails from '../views/recipe/DetailsPage.vue'
import RecipeAdd from '../views/recipe/CreateOrEditPage.vue'
import RecipeEdit from '../views/recipe/CreateOrEditPage.vue'
import Login from '../views/user/LoginPage.vue'
import Register from '../views/user/RegisterPage.vue'
import UserList from '../views/user/ListPage.vue'
import UserDetails from '../views/user/DetailsPage.vue'
import UserEdit from '../views/user/EditPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/recipe/list',
    name: 'recipeList',
    component: RecipeList
  },
  {
    path: '/recipe/detail/:id',
    name: 'recipeDetail',
    component: RecipeDetails
  },
  {
    path: '/recipe/add',
    name: 'recipeAdd',
    component: RecipeAdd
  },
  {
    path: '/recipe/edit/:id',
    name: 'recipeEdit',
    component: RecipeEdit
  },
  {
    path: '/recipe/recomendation',
    name: 'recipeRecomendation',
    component: RecipeAdd
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/chefs',
    name: 'userList',
    component: UserList
  },
  {
    path: '/user/detail/:id',
    name: 'userDetails',
    component: UserDetails
  },
  {
    path: '/user/edit/:id',
    name: 'userEdit',
    component: UserEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
