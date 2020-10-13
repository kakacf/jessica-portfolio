import * as project from '../../data/data';
import projectContent from '../../components/ProjectContent/ProjectContent.vue';

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

}