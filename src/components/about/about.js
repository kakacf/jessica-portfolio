import AboutItem from "./AboutItem.vue";
import about from "../../data/about";
export default {
  name: "about",
  components: {
    AboutItem,
  },
  data() {
    return {
      aboutData: [],
    };
  },
  created() {
    this.aboutData = about
  },
  method: {},
};
