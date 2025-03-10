import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
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

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme: myCustomTheme,
    },
  },
});
