import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

import router from "./router/routes"
import store from "./store/store"

library.add(fas)

const app = createApp(App)
app.component("Icon", FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')
