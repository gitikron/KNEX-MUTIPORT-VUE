import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
const instance = axios.create();
instance.get('http://localhost:3000/api/user')

createApp(App).use(store).use(router).mount("#app");