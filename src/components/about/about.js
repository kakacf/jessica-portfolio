import aboutContent from '../../components/about-content/about-content.vue';
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
  },
  mounted() {
    this.$bus.$on('aboutRefAnchor', (refName) => {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
      console.log('event bus about on~~~');
    });

  },
  beforeDestroy() {
    this.$bus.$off('aboutRefAnchor');
    console.log('event bus about off~~~');
  },

  
};
