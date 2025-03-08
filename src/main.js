import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";
import "vuetify/styles";

const myCustomTheme = {
  dark: false,
  colors: {
    primary: "#272D4E",
    secondary1: "#F08BB5",
    secondary2: "#B8D6F7",
    icon: "#23538F",
    accent: "#FF4081",
    error: "#272D4E",
    success: "#4CAF50",
    warning: "#FFA000",
    info: "#1976D2",
  },
};

const vuetify = createVuetify({
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme: myCustomTheme,
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
