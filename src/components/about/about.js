import aboutContent from "../../components/aboutContent/aboutContent.vue";
import * as about from "../../data/data";

export default {
  name: "about",
  components: {
    aboutContent,
  },

  data() {
    return {
      me: {},
      work: {},
      education: {},
    };
  },
  created() {
    this.me = about.me;
    this.work = about.work;
    this.education = about.education;
  },
};
