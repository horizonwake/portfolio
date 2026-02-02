import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import config from "./config/portfolio.config.js";
import "./styles/main.css";

// Apply theme colors from config to CSS variables
if (config.theme) {
  const root = document.documentElement;
  Object.entries(config.theme).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
}

const app = createApp(App);

app.provide("config", config);
app.use(router);
app.mount("#app");
