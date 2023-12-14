import { createApp } from 'vue';

import router from './router';
import App from './App.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseLogo from './components/UI/BaseLogo.vue';

const app = createApp(App);

app.use(router);
app.component('base-button', BaseButton);
app.component('base-logo', BaseLogo);

app.mount('#app');
