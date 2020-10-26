import * as project from '../../data/data'; 
import projectContent from '../../components/project-content/project-content.vue';

export default {
    name: 'Project',
    components: {
        projectContent
    },
    data() {
        return {
            info: {},
            projectItems: []
        };
    },
    method: {


    },
    created() {
        this.info = project.info;
        this.projectItems = project.project.items;

        
    
    },
    mounted() {
        
        this.$bus.$on('projectRefAnchor', (refName) => {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            window.scrollTo(0, top);
            console.log('event bus project on~~~');
        });
       
        
        
    },
    beforeDestroy() {
        this.$bus.$off('projectRefAnchor');
        console.log('event bus project off~~~');
    
            
            
      },

}