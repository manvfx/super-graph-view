import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
const app = createApp(App);

app.component('super-graph-view', defineAsyncComponent(() => import('../../mod')));


import App from './App.vue';
app.mount('#app');
