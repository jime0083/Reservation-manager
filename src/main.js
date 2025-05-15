// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app');


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const pinia = createPinia(); // Piniaインスタンスを作成
app.use(pinia);              // ここでPiniaをVueに登録
app.use(router);             // ルーター登録（していれば）

app.mount('#app');
