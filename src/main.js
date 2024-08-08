import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

import FontAwesomeIcon from './plugins/font-awesome';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Register FontAwesomeIcon globally
app.use(router);
app.mount('#app');