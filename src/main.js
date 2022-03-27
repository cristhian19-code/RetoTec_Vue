import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import route from './router'
import store from './store'

createApp(App).use(route).use(store).mount('#app')
