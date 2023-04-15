import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './routers'
import { axios } from './utils/axios'
import store from './store';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";


const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueAwesomePaginate)
app.config.globalProperties.$axios = axios;
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
