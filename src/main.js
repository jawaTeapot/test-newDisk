import { createApp } from "vue";
import "./reset.css";
import App from "./App.vue";
import VueAwesomePaginate from "vue-awesome-paginate";
import vSelect from "vue-select";
import "vue-awesome-paginate/dist/style.css";
import "vue-select/dist/vue-select.css";

createApp(App)
  .use(VueAwesomePaginate)
  .component("v-select", vSelect)
  .mount("#app");
