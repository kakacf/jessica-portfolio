import aboutContent from '../../components/AboutContent/AboutContent.vue';
import * as about from '../../data/data';

export default {
  name: 'About',
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
  }

  
};
