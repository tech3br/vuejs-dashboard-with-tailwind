import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import icons from "./fontawesome";
import "./index.css";
import router from "./Router";

library.add({ ...icons });

createApp(App).component("fa", FontAwesomeIcon).use(router).mount("#app");
